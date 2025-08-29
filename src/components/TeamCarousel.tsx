"use client";
import { Member } from "@/constants/team";
import TeamCard from "./TeamCard";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";

type Props = {
  members: Member[];
  className?: string;
};

function getVisibleCountSSR(): 1 {
  // Evitar uso de window en SSR: por defecto 1
  return 1;
}

function getVisibleCountCSR(): 1 | 3 | 4 {
  if (typeof window === "undefined") return 1;
  const lg = window.matchMedia("(min-width: 1024px)").matches;
  const md = window.matchMedia("(min-width: 768px)").matches;
  return lg ? 4 : md ? 3 : 1;
}

export default function TeamCarousel({ members, className }: Props) {
  const [visibleCount, setVisibleCount] = useState<1 | 3 | 4>(getVisibleCountSSR());
  const [index, setIndex] = useState<number>(visibleCount); // índice en arreglo extendido
  const [animate, setAnimate] = useState(true);
  const trackRef = useRef<HTMLDivElement | null>(null);

  // Actualiza visibleCount en client (y al redimensionar)
  useEffect(() => {
    const apply = () => setVisibleCount(getVisibleCountCSR());
    apply();
    const mqlMd = window.matchMedia("(min-width: 768px)");
    const mqlLg = window.matchMedia("(min-width: 1024px)");
    mqlMd.addEventListener("change", apply);
    mqlLg.addEventListener("change", apply);
    return () => {
      mqlMd.removeEventListener("change", apply);
      mqlLg.removeEventListener("change", apply);
    };
  }, []);

  // Reajusta índice cuando cambia visibleCount
  useEffect(() => {
    setAnimate(false);
    setIndex(visibleCount);
    const id = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(id);
  }, [visibleCount]);

  // Clones para infinito
  const extended = useMemo(() => {
    const head = members.slice(0, visibleCount);
    const tail = members.slice(-visibleCount);
    return [...tail, ...members, ...head];
  }, [members, visibleCount]);

  const total = members.length;
  const slidePercent = 100 / visibleCount;
  const offsetPercent = -index * slidePercent;

  const goNext = useCallback(() => {
    setAnimate(true);
    setIndex((i) => i + 1);
  }, []);

  const goPrev = useCallback(() => {
    setAnimate(true);
    setIndex((i) => i - 1);
  }, []);

  // Teleport invisible al terminar transición si caemos en clones
  const handleTransitionEnd = useCallback(() => {
    const firstReal = visibleCount;
    const lastReal = visibleCount + total - 1;

    if (index > lastReal) {
      // Nos fuimos a los clones del final -> vuelve al inicio real
      setAnimate(false);
      setIndex(firstReal + (index - lastReal - 1));
      requestAnimationFrame(() => setAnimate(true));
    } else if (index < firstReal) {
      // Nos fuimos a clones del inicio -> salta al final real
      setAnimate(false);
      setIndex(lastReal - (firstReal - index - 1));
      requestAnimationFrame(() => setAnimate(true));
    }
  }, [index, total, visibleCount]);

  return (
    <div className={clsx("w-full", className)}>
      <div className="relative">
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className={clsx(
              "flex",
              animate ? "transition-transform duration-300 ease-out" : "transition-none"
            )}
            style={{
              transform: `translateX(${offsetPercent}%)`,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extended.map((m, i) => (
              <div
                key={`${m.id}-${i}`}
                className={clsx(
                  "px-2",
                  "basis-full shrink-0",
                  "md:basis-1/3",
                  "lg:basis-1/4"
                )}
              >
                <TeamCard member={m} />
              </div>
            ))}
          </div>
        </div>

        {/* Controles debajo del carrusel */}
        <div className="mt-4 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={goPrev}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50 active:scale-[0.98] focus:outline-none"
            aria-label="Anterior"
          >
            ← Anterior
          </button>
          <button
            type="button"
            onClick={goNext}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50 active:scale-[0.98] focus:outline-none"
            aria-label="Siguiente"
          >
            Siguiente →
          </button>
        </div>
      </div>
    </div>
  );
}