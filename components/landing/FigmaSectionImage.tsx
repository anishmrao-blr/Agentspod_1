import Image from "next/image";

type FigmaSectionImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

export function FigmaSectionImage({ src, alt, width, height, className }: FigmaSectionImageProps) {
  return (
    <section className={className ?? ""}>
      <div className="figmaSectionInner">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="figmaSectionImage"
          priority
          unoptimized
        />
      </div>
    </section>
  );
}
