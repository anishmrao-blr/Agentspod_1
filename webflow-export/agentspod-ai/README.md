# Agentspod.ai Webflow export

This folder was populated using the **Webflow MCP** Data API tools (`data_sites_tool`, `data_pages_tool`, `data_cms_tool`) against workspace site **`agentspod-ai`** (`69eb297704133713fa5a2d00`).

The Designer URL you shared (`https://agentspod-ai.design.webflow.com/?app=...`) opens that site in the Webflow Designer. The `?app=` value is Designer/extension context, not the site ID. The site was resolved by listing sites and matching `shortName` **`agentspod-ai`**.

## Contents

| Path | Description |
|------|-------------|
| `site.json` | Site record from `get_site`. |
| `pages-index.json` | Page IDs, titles, slugs, and export metadata. |
| `pages/*.json` | Per-page **Designer static content** from `get_page_content` (text, images, component instances, embeds). Large pages may be split into `*-part-*.json` chunks. |
| `public-html/` | **Not recommended** for `*.design.webflow.com`: that host serves the Webflow Designer app shell (small HTML), not full published page markup. Use a **published** host (e.g. `*.webflow.io` or a custom domain) for static HTML mirrors, or use `get_page_content` / `GET /v2/pages/{id}/dom` for structured content. |

## Refresh page JSON via API (same data as MCP)

With a site token that has **`pages:read`**:

```bash
export WEBFLOW_API_TOKEN="..."
node /Users/swami/Documents/Pluging_test/scripts/webflow-export-all-pages.mjs
```

This calls [Get Page Content](https://developers.webflow.com/data/reference/pages-and-components/pages/get-content) (`GET https://api.webflow.com/v2/pages/{page_id}/dom`) for every page in `pages-index.json`, paginating by 100 nodes (same as the MCP export).

Single page:

```bash
node /Users/swami/Documents/Pluging_test/scripts/webflow-export-page-dom.mjs 69eb297804133713fa5a2d39 /path/to/out.json
```

## Limits

- **CMS**: This site has **no CMS collections** (`get_collection_list` returned an empty list).
- **Component internals**: Nodes of type `component-instance` reference `componentId`; inner structure lives in components, not fully inlined in page content.
- **Pagination**: `get_page_content` returns up to 100 nodes per request; the Style Guide (302 nodes) was fetched with `offset` 0, 100, 200, 300 and merged in the `pages/` JSON where applicable.

## Re-running the export

Use the same Webflow MCP site ID, or call the Webflow Data API with a token and the endpoints described in the [Webflow Data API pages reference](https://developers.webflow.com/data/reference/pages).
