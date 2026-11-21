import type { ImgHTMLAttributes } from "react";
import images from "../lib/image-manifest.json";
type Asset = {
  width: number;
  height: number;
  variants: { width: number; webp: string; avif: string }[];
};
const manifest = images as Record<string, Asset>;
export function ResponsiveImage({
  src,
  alt = "",
  sizes = "(max-width: 760px) 100vw, 50vw",
  loading,
  fetchPriority,
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) {
  if (typeof src !== "string" || src.trim() === "") return null;
  const asset = typeof src === "string" ? manifest[src] : undefined;
  if (!asset)
    return (
      <img
        {...props}
        src={src}
        alt={alt}
        loading={loading}
        fetchPriority={fetchPriority}
      />
    );
  const fallback =
    asset.variants.find((v) => v.width >= 800) || asset.variants.at(-1)!;
  return (
    <picture>
      <source
        type="image/avif"
        srcSet={asset.variants.map((v) => `${v.avif} ${v.width}w`).join(", ")}
        sizes={sizes}
      />
      <source
        type="image/webp"
        srcSet={asset.variants.map((v) => `${v.webp} ${v.width}w`).join(", ")}
        sizes={sizes}
      />
      <img
        {...props}
        src={fallback.webp}
        alt={alt}
        width={asset.width}
        height={asset.height}
        sizes={sizes}
        loading={loading ?? (fetchPriority === "high" ? "eager" : "lazy")}
        fetchPriority={fetchPriority}
        decoding="async"
      />
    </picture>
  );
}
