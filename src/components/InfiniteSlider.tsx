import Image from "next/image";
import * as React from "react";

type SliderImage = {
  src: string;
  alt: string
};

type Props = {
  images: SliderImage[];
  speedSec?: number; // Duración (en segundos) de un ciclo completo
  direction?: "left" | "right";
  heightPx?: number;
  gapPx?: number;
  pauseOnHover?: boolean;
  className?: string;
  unoptimized?: boolean; // Si se usan imágenes remotas sin configurar domains, pon true
};

export default function InfiniteSlider({
  images,
  speedSec = 35,
  direction = "left",
  heightPx = 96,
  gapPx = 32,
  pauseOnHover = false,
  className = "",
  unoptimized = false,
}: Props) {
  const sequence = React.useMemo(() => [...images, ...images], [images]);
  const mask = "linear-gradient(to right, transparent, black 10%, black 90%, transparent)";

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ WebkitMaskImage: mask, maskImage: mask, willChange: "transform" }}
      aria-live="off"
    >
      <div
        className={[
          "flex w-max items-center",
          `[--gap:${gapPx}px] gap-[var(--gap)]`,
          `animate-[slider-scroll_var(--duration)_linear_infinite]`,
          "motion-reduce:animate-none",
          pauseOnHover ? "hover:[animation-play-state:paused]" : "",
          direction === "right" ? "[animation-direction:reverse]" : "",
        ].join(" ")}
        style={{ ["--duration" as any]: `${speedSec}s` }}
      >
        {sequence.map((img, idx) => (
          <div key={`${img.src}-${idx}`} className="flex-shrink-0 mr-[75px]">
            <Image
              src={img.src}
              alt={img.alt ?? ""}
              width={320}
              height={heightPx}
              sizes="(max-width: 768px) 70vw, 40vw"
              className="h-[var(--h)] w-auto rounded-xl object-cover opacity-45"
              style={{ ["--h" as any]: `${heightPx}px` }}
              priority={idx < 4}
              unoptimized={unoptimized}
            />
          </div>
        ))}
      </div>
    </div>
  );
};