"use client";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Member } from "@/constants/team";
import TeamCard from "./TeamCard";
import clsx from "clsx";

type Props = {
  members: Member[];
  className?: string;
  randomize?: boolean;
};

function getVisibleCountSSR(): 1 {
  return 1;
}

function getVisibleCountCSR(): 1 | 3 | 4 {
  if (typeof window === "undefined") return 1;
  const lg = window.matchMedia("(min-width: 1100px)").matches;
  const md = window.matchMedia("(min-width: 700px)").matches;
  return lg ? 4 : md ? 3 : 1;
}

function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();

  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }

  return a;
}

export default function TeamCarousel({ members, className, randomize = true }: Props) {
  const [visibleCount, setVisibleCount] = useState<1 | 3 | 4>(getVisibleCountSSR());
  const [animate, setAnimate] = useState(true);

  const [ordered, setOrdered] = useState<Member[]>(members);
  useEffect(() => {
    setOrdered(randomize ? shuffle(members) : members);
  }, [members, randomize]);

  // Actualiza visibleCount en cliente (y al redimensionar).
  useEffect(() => {
    const apply = () => setVisibleCount(getVisibleCountCSR());
    apply();
    const mqlMd = window.matchMedia("(min-width: 700px)");
    const mqlLg = window.matchMedia("(min-width: 1100px)");
    mqlMd.addEventListener("change", apply);
    mqlLg.addEventListener("change", apply);
    return () => {
      mqlMd.removeEventListener("change", apply);
      mqlLg.removeEventListener("change", apply);
    };
  }, []);

  const total = ordered.length;

  const extended = useMemo(() => {
    if (total === 0) return [] as Member[];
    const head = ordered.slice(0, visibleCount);
    const tail = ordered.slice(-visibleCount);
    return [...tail, ...ordered, ...head];
  }, [ordered, visibleCount, total]);

  // Índice dentro de 'extended'
  const [index, setIndex] = useState<number>(visibleCount);

  // Re-centrar cuando cambian visibleCount u order.
  useEffect(() => {
    setAnimate(false);
    setIndex(visibleCount); // primer real dentro de [tail | ordered | head]
    const id = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(id);
  }, [visibleCount, total]);

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

  const handleTransitionEnd = useCallback(() => {
    // límites reales dentro de 'extended'
    const firstReal = visibleCount;
    const lastReal = visibleCount + total - 1;

    if (index > lastReal) {
      // Salimos por derecha, caer en clones de head
      // Calcular posición equivalente dentro del bloque real
      const overshoot = index - lastReal - 1;
      setAnimate(false);
      setIndex(firstReal + overshoot);
      requestAnimationFrame(() => setAnimate(true));
    } else if (index < firstReal) {
      // Salimos por izquierda, caer en clones de tail
      const overshoot = firstReal - index - 1;
      setAnimate(false);
      setIndex(lastReal - overshoot);
      requestAnimationFrame(() => setAnimate(true));
    }
  }, [index, total, visibleCount]);

  const trackRef = useRef<HTMLDivElement | null>(null);

  if (!total) return null;

  return (
    <div className={clsx("w-full", className)}>
      <div className="relative">
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className={clsx(
              "flex will-change-transform",
              animate ? "transition-transform duration-300 ease-out" : "transition-none"
            )}
            style={{ transform: `translateX(${offsetPercent}%)` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extended.map((m, i) => (
              <div
                key={`${m.id ?? i}-${i}`}
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

        {/* Controles */}
        <div className="mt-4 flex items-center justify-center gap-x-10">
          <Image
            src="/icons/left-arrow.svg"
            alt="Icono de flecha hacia la izquierda"
            width={45}
            height={45}
            className="cursor-pointer hover:brightness-97"
            onClick={goPrev}
          />
          <Image
            src="/icons/right-arrow.svg"
            alt="Icono de flecha hacia la derecha"
            width={45}
            height={45}
            className="cursor-pointer hover:brightness-97"
            onClick={goNext}
          />
        </div>
      </div>
    </div>
  );
};