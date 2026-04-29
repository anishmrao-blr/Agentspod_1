// Executed via Figma MCP use_figma — paste body inside (async () => { ... })() without this wrapper comment
(async () => {
  const strip = (s) =>
    s
      .replace(/<\?xml[^?]*\?>/g, "")
      .replace(/<!DOCTYPE[^>]*>/gi, "")
      .replace(/xmlns:serif="[^"]*"/g, "");

  const fixNvidia = (s) =>
    strip(s).replace(/width="656" height="120"/, 'width="164" height="30"');

  const fixLangChain = (s) =>
    strip(s).replace(/fill="CurrentColor"/gi, 'fill="#111111"');

  for (const c of [...figma.currentPage.children]) {
    try {
      c.remove();
    } catch (e) {}
  }

  try {
    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  } catch (e) {}

  const title = figma.createText();
  title.fontName = { family: "Inter", style: "Semi Bold" };
  title.fontSize = 22;
  title.characters = "Partner logos — native vectors + official PNG (FIT)";
  title.x = 48;
  title.y = 32;
  figma.currentPage.appendChild(title);

  const blurb = figma.createText();
  blurb.fontName = { family: "Inter", style: "Regular" };
  blurb.fontSize = 12;
  blurb.opacity = 0.72;
  blurb.characters =
    "SVG marks use figma.createNodeFromSvg (editable vector layers). Raster marks use createImage + FIT (no stretch). Sources: OpenAI ctfassets; Wikimedia Commons for NVIDIA/Anthropic/LangChain/OpenAI wordmark; AWS d0.awsstatic + a0.awsstatic; Google Cloud press; ElevenLabs press S3.";
  blurb.resize(1180, 140);
  blurb.textAutoResize = "HEIGHT";
  blurb.x = 48;
  blurb.y = 64;
  figma.currentPage.appendChild(blurb);

  const placed = [];

  async function placeSvg(name, url, prep) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(name + " fetch " + res.status);
    let svg = await res.text();
    if (prep) svg = prep(svg);
    const node = figma.createNodeFromSvg(svg);
    node.name = name + " (vector)";
    figma.currentPage.appendChild(node);
    placed.push(node);
    return node;
  }

  async function placePng(name, url, maxW) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(name + " fetch " + res.status);
    const bytes = new Uint8Array(await res.arrayBuffer());
    const image = figma.createImage(bytes);
    const meta = await image.getSizeAsync();
    const scale = Math.min(1, maxW / meta.width);
    const w = Math.max(2, Math.round(meta.width * scale));
    const h = Math.max(2, Math.round(meta.height * scale));
    const rect = figma.createRectangle();
    rect.name = name + " (PNG " + meta.width + "×" + meta.height + ")";
    rect.resize(w, h);
    rect.fills = [
      {
        type: "IMAGE",
        imageHash: image.hash,
        scaleMode: "FIT",
      },
    ];
    figma.currentPage.appendChild(rect);
    placed.push(rect);
    return rect;
  }

  async function placePngOnDark(name, url, maxW) {
    const wrap = figma.createFrame();
    wrap.name = name + " — cell";
    wrap.layoutMode = "VERTICAL";
    wrap.primaryAxisSizingMode = "AUTO";
    wrap.counterAxisSizingMode = "AUTO";
    wrap.paddingTop = 20;
    wrap.paddingBottom = 20;
    wrap.paddingLeft = 24;
    wrap.paddingRight = 24;
    wrap.itemSpacing = 8;
    wrap.fills = [{ type: "SOLID", color: { r: 0.12, g: 0.13, b: 0.15 } }];
    wrap.cornerRadius = 10;

    const res = await fetch(url);
    if (!res.ok) throw new Error(name + " fetch " + res.status);
    const bytes = new Uint8Array(await res.arrayBuffer());
    const image = figma.createImage(bytes);
    const meta = await image.getSizeAsync();
    const scale = Math.min(1, maxW / meta.width);
    const w = Math.max(2, Math.round(meta.width * scale));
    const h = Math.max(2, Math.round(meta.height * scale));
    const rect = figma.createRectangle();
    rect.name = name + " (PNG " + meta.width + "×" + meta.height + ")";
    rect.resize(w, h);
    rect.fills = [
      {
        type: "IMAGE",
        imageHash: image.hash,
        scaleMode: "FIT",
      },
    ];
    wrap.appendChild(rect);
    figma.currentPage.appendChild(wrap);
    placed.push(wrap);
    return wrap;
  }

  const svgJobs = [
    {
      name: "NVIDIA",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/NVIDIA_logo.svg",
      prep: fixNvidia,
    },
    {
      name: "Anthropic",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Anthropic_logo.svg",
      prep: strip,
    },
    {
      name: "LangChain",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/LangChain%20Logo.svg",
      prep: fixLangChain,
    },
    {
      name: "OpenAI wordmark",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/OpenAI%20Logo.svg",
      prep: strip,
    },
    {
      name: "OpenAI Blossom",
      url:
        "https://images.ctfassets.net/kftzwdyauwt9/3hUGLn3ypllZ0oa01qOYVq/28e8188e6f11b84c3e876569d492734f/Blossom_Light.svg",
      prep: strip,
    },
    {
      name: "ElevenLabs",
      url:
        "https://11labs-nonprd-15f22c1d.s3.eu-west-3.amazonaws.com/0b9cd3e1-9fad-4a5b-b3a0-c96b0a1f1d2b/elevenlabs-logo-black.svg",
      prep: strip,
    },
  ];

  const pngJobs = [
    {
      name: "AWS Powered by (light)",
      url: "https://d0.awsstatic.com/logos/powered-by-aws.png",
      maxW: 520,
    },
    {
      name: "AWS Powered by (dark)",
      url: "https://d0.awsstatic.com/logos/powered-by-aws-white.png",
      maxW: 520,
    },
    {
      name: "AWS smile",
      url: "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",
      maxW: 640,
    },
    {
      name: "Google Cloud (press)",
      url: "https://www.googlecloudpresscorner.com/image/logo-cloud.png",
      maxW: 560,
    },
    {
      name: "ElevenLabs black (press PNG)",
      url:
        "https://11labs-nonprd-15f22c1d.s3.eu-west-3.amazonaws.com/0b9cd3e1-9fad-4a5b-b3a0-c96b0a1f1d2b/elevenlabs-logo-black.png",
      maxW: 520,
    },
  ];

  for (const j of svgJobs) {
    try {
      await placeSvg(j.name, j.url, j.prep);
    } catch (e) {
      const t = figma.createText();
      t.fontName = { family: "Inter", style: "Regular" };
      t.characters = j.name + " SVG failed: " + (e && e.message ? e.message : String(e));
      t.fontSize = 12;
      t.fills = [{ type: "SOLID", color: { r: 0.8, g: 0, b: 0 } }];
      figma.currentPage.appendChild(t);
      placed.push(t);
    }
  }

  for (const j of pngJobs) {
    try {
      await placePng(j.name, j.url, j.maxW);
    } catch (e) {
      const t = figma.createText();
      t.fontName = { family: "Inter", style: "Regular" };
      t.characters = j.name + " PNG failed: " + (e && e.message ? e.message : String(e));
      t.fontSize = 12;
      t.fills = [{ type: "SOLID", color: { r: 0.8, g: 0, b: 0 } }];
      figma.currentPage.appendChild(t);
      placed.push(t);
    }
  }

  try {
    await placePngOnDark(
      "ElevenLabs white",
      "https://11labs-nonprd-15f22c1d.s3.eu-west-3.amazonaws.com/0b9cd3e1-9fad-4a5b-b3a0-c96b0a1f1d2b/elevenlabs-logo-white.png",
      520
    );
  } catch (e) {
    const t = figma.createText();
    t.fontName = { family: "Inter", style: "Regular" };
    t.characters = "ElevenLabs white failed: " + (e && e.message ? e.message : String(e));
    t.fontSize = 12;
    t.fills = [{ type: "SOLID", color: { r: 0.8, g: 0, b: 0 } }];
    figma.currentPage.appendChild(t);
    placed.push(t);
  }

  const COLS = 2;
  const COL_W = 560;
  const GAP_X = 48;
  const GAP_Y = 40;
  const START_X = 48;
  const START_Y = 200;
  const maxRowH = 340;

  placed.forEach((node, i) => {
    const col = i % COLS;
    const row = Math.floor(i / COLS);
    node.x = START_X + col * (COL_W + GAP_X);
    node.y = START_Y + row * (maxRowH + GAP_Y);
  });

  figma.viewport.scrollAndZoomIntoView(placed);
})();
