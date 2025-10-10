"use client";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import TeamCard from "./TeamCard";
import { Member } from "@/constants/team";

type Props = {
  members: Member[];
  className?: string;
  randomize?: boolean;
};

const GAP_PX = 15;

function getVisibleCountCSR(): 1 | 3 | 4 {
  if (typeof window === "undefined") return 1;
  const w = window.innerWidth;
  if (w >= 1200) return 4;
  if (w >= 700) return 3;
  return 1;
}
function getVisibleCountSSR(): 1 { return 1; }

function shuffle<T>(arr: T[]) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function TeamCarousel({ members, className, randomize = true }: Props) {
  const [visibleCount, setVisibleCount] = useState<1 | 3 | 4>(getVisibleCountSSR());
  const [animate, setAnimate] = useState(true);

  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  
  const ordered = useMemo(() => {
    if (!members?.length) return [];
    if (!mounted || !randomize) return members;
    return shuffle([...members]);
  }, [members, randomize, mounted]);
  const total = ordered.length;

  // clones para loop infinito
  const extended = useMemo(() => {
    if (!total) return [] as Member[];
    const head = ordered.slice(0, visibleCount);
    const tail = ordered.slice(-visibleCount);
    return [...tail, ...ordered, ...head];
  }, [ordered, visibleCount, total]);

  // índice actual (arrancamos en el primer real)
  const [index, setIndex] = useState<number>(visibleCount);

  useEffect(() => {
    const apply = () => setVisibleCount(getVisibleCountCSR());
    apply();
    const mqlMd = window.matchMedia("(min-width: 700px)");
    const mqlLg = window.matchMedia("(min-width: 1200px)");
    mqlMd.addEventListener("change", apply);
    mqlLg.addEventListener("change", apply);
    return () => {
      mqlMd.removeEventListener("change", apply);
      mqlLg.removeEventListener("change", apply);
    };
  }, []);

  // cuando cambia visibleCount, re-ubicar sin animación y reactivar
  useEffect(() => {
    setAnimate(false);
    setIndex(visibleCount);
    const id = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(id);
  }, [visibleCount, total]);

  // === Medición del ancho real de un ítem (card) ===
  const itemRef = useRef<HTMLDivElement | null>(null);
  const [itemWidth, setItemWidth] = useState(0);
  useEffect(() => {
    const measure = () => {
      if (itemRef.current) setItemWidth(itemRef.current.offsetWidth);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [visibleCount]);

  // Paso y offset en PX
  const stepPx = itemWidth > 0 ? itemWidth + GAP_PX : 0;
  const offsetPx = -(index * stepPx);

  const viewportPx =
    itemWidth > 0 ? visibleCount * stepPx - GAP_PX : undefined;

  const goNext = useCallback(() => {
    setAnimate(true);
    setIndex((i) => i + 1);
  }, []);
  
  const goPrev = useCallback(() => {
    setAnimate(true);
    setIndex((i) => i - 1);
  }, []);

  const handleTransitionEnd = useCallback(() => {
    const firstReal = visibleCount;
    const lastReal = visibleCount + total - 1;
    
    if (index > lastReal) {
      const overshoot = index - lastReal - 1;
      setAnimate(false);
      setIndex(firstReal + overshoot);
      requestAnimationFrame(() => setAnimate(true));
    } else if (index < firstReal) {
      const overshoot = firstReal - index - 1;
      setAnimate(false);
      setIndex(lastReal - overshoot);
      requestAnimationFrame(() => setAnimate(true));
    }
  }, [index, total, visibleCount]);

  if (!total) return null;

  return (
    <div className={clsx("w-full", className)}>
      <div className="relative">

        <div
          className="mx-auto overflow-hidden"
          style={{
            width: viewportPx ? `${viewportPx}px` : undefined,
          }}
        >
          <div
            className={clsx(
              "flex items-start gap-[15px] will-change-transform",
              animate ? "transition-transform duration-300 ease-out" : "transition-none"
            )}
            style={{ transform: `translateX(${offsetPx}px)` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extended.map((m, i) => (
              <div
                key={`${m?.id ?? i}-${i}`}
                ref={i === 0 ? itemRef : null}
                className="shrink-0"
              >
                <TeamCard member={m} />
              </div>
            ))}
          </div>
        </div>

        {/* Controles */}
        <div className="mt-4 flex items-center justify-center gap-x-10">
          <Image
            src="/icons/left-arrow.svg"
            alt="Icono de flecha hacia la izquierda"
            width={45}
            height={45}
            loading="lazy"
            decoding="async"
            className="cursor-pointer hover:brightness-97"
            onClick={goPrev}
          />
          <Image
            src="/icons/right-arrow.svg"
            alt="Icono de flecha hacia la derecha"
            width={45}
            height={45}
            loading="lazy"
            decoding="async"
            className="cursor-pointer hover:brightness-97"
            onClick={goNext}
          />
        </div>
      </div>
    </div>
  );
};