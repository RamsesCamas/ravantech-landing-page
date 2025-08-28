// app/components/InfiniteImageSlider.tsx
import Image from "next/image";
import * as React from "react";

type SliderImage = { src: string; alt?: string };

type Props = {
  images: SliderImage[];
  /** Duración (en segundos) de un ciclo completo */
  speedSec?: number;
  /** "left" (por defecto) o "right" */
  direction?: "left" | "right";
  /** Alto en píxeles del carrusel (las imágenes escalan) */
  heightPx?: number;
  /** Separación horizontal entre imágenes en px */
  gapPx?: number;
  /** Pausar animación al hover (por defecto true) */
  pauseOnHover?: boolean;
  /** className opcional para el contenedor */
  className?: string;
  /** Si usas imágenes remotas sin configurar domains, pon true */
  unoptimized?: boolean;
};

export default function InfiniteSlider({
  images,
  speedSec = 40,
  direction = "left",
  heightPx = 96,       // ~24 * 4px
  gapPx = 32,          // ~8 * 4px
  pauseOnHover = false,
  className = "",
  unoptimized = false,
}: Props) {
  // Duplicamos el set para un bucle perfecto
  const sequence = React.useMemo(() => [...images, ...images], [images]);

  // Mask suave en bordes para un look más limpio
  const mask = "linear-gradient(to right, transparent, black 10%, black 90%, transparent)";

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{
        // Suavizado de bordes (Safari/Chromium)
        WebkitMaskImage: mask,
        maskImage: mask,
        // Permite que el navegador optimice
        willChange: "transform",
      }}
      aria-live="off"
    >
      <div
        className={[
          "flex w-max items-center",
          // Gap configurable
          // Tailwind v4 permite propiedades arbitrarias:
          `[--gap:${gapPx}px] gap-[var(--gap)]`,
          // Animación: movemos la pista -50% (dos grupos idénticos => sin salto)
          `animate-[slider-scroll_var(--duration)_linear_infinite]`,
          // Respeta reduce motion
          "motion-reduce:animate-none",
          // Opción de pausar en hover
          pauseOnHover ? "hover:[animation-play-state:paused]" : "",
          // Dirección
          direction === "right" ? "[animation-direction:reverse]" : "",
        ].join(" ")}
        // Duración configurable por CSS var
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
              className="h-[var(--h)] w-auto rounded-xl object-cover"
              // Alto controlado por var para que puedas ajustarlo rápido
              style={{ ["--h" as any]: `${heightPx}px` }}
              priority={idx < 4} // ayuda al LCP si está arriba en la página
              unoptimized={unoptimized}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
