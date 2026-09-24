import { assetBase } from "../content/site";

export function Photo({
  name,
  alt,
  eager = false,
  className = "",
}: {
  name: string;
  alt: string;
  eager?: boolean;
  className?: string;
}) {
  return (
    <img
      className={className}
      src={`${assetBase}${name}-1400.webp`}
      srcSet={`${assetBase}${name}-640.webp 640w, ${assetBase}${name}-1400.webp 1400w`}
      sizes="(max-width: 700px) 100vw, 700px"
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      {...{ fetchpriority: eager ? "high" : "auto" }}
      width="1400"
      height="1000"
    />
  );
}

export function Mascot({
  pose = "maker",
  className = "",
  eager = false,
}: {
  pose?: "maker" | "explorer" | "tech" | "reader";
  className?: string;
  eager?: boolean;
}) {
  const descriptions = {
    maker: "举着扳手",
    explorer: "拿着望远镜",
    tech: "戴着科技头盔",
    reader: "戴着眼镜读书",
  };
  return (
    <img
      className={`mascot ${className}`}
      src={`${assetBase}mascot-${pose}.webp`}
      alt={`${descriptions[pose]}的红蛛吉祥物`}
      width="640"
      height="640"
      loading={eager ? "eager" : "lazy"}
      {...{ fetchpriority: eager ? "high" : "auto" }}
    />
  );
}
