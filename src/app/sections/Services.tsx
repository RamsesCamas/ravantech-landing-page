"use client";
import Image from "next/image";
import { useState, useCallback, useMemo, useRef } from "react";
import { SERVICES } from '@/constants/services';

export const Services = () => {
  const [index, setIndex] = useState(0);
  const total = SERVICES.length;

  const goNext = useCallback(() => setIndex(i => (i + 1) % total), [total]);
  const goPrev = useCallback(() => setIndex(i => (i - 1 + total) % total), [total]);

  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);
  const THRESHOLD = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const onTouchEnd = () => {
    if (Math.abs(touchDeltaX.current) > THRESHOLD) {
      if (touchDeltaX.current < 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  const current = useMemo(() => SERVICES[index], [index]);

  return (
    <section className="bg-white px-[10%] md:px-[45px] xl:px-[83px] 2xl:px-[203px] py-[40px] xl:py-[55px]">
      <h2 className="font-sora font-extrabold text-[22px] md:text-[24px] xl:text-[32px] text-center mb-[20px] md:mb-[35px] xl:mb-[50px]">
        Nuestros&nbsp;
        <p className="text-secondary-purple inline">
          Servicios
        </p>
      </h2>

      {/* ===== Grid tablet/desktop ===== */}
      <div
        className="
          mt-[25px] hidden md:grid grid-rows-3 md:grid-cols-2 gap-6
          lg:grid-rows-2 lg:grid-cols-3
        "
      >
        {SERVICES.map((service) => (
          <article
            key={service.id}
            className="rounded-xl border bg-main-purple px-[30px] py-[25px]"
          >
            <div className="flex flex-col text-white text-center">
              <h3 className="font-sora font-bold text-[16px] xl:text-[20px] my-[15px]">{service.title}</h3>
              <p className="font-nunito-sans font-light text-[14px] xl:text-[18px]">{service.description}</p>
            </div>
          </article>
        ))}
      </div>

      {/* ===== Carrusel móvil ===== */}
      <div
        className="mt-[25px] md:hidden"
        role="region"
        aria-label="Carrusel de servicios"
        aria-roledescription="carousel"
      >
        {/* Viewport */}
        <div
          className="relative overflow-hidden rounded-xl border"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Track */}
          <div
            className="flex transition-transform duration-300 ease-out will-change-transform"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {SERVICES.map((service) => (
              <article
                key={service.id}
                className="min-w-full bg-main-purple px-[30px] py-[25px]"
                aria-roledescription="slide"
                aria-label={`${SERVICES.indexOf(service) + 1} de ${total}: ${service.title}`}
              >
                <div className="flex flex-col text-white text-center">
                  <h3 className="font-sora font-bold text-[16px] my-[15px]">{service.title}</h3>
                  <p className="font-nunito-sans font-light text-[14px]">{service.description}</p>
                </div>
              </article>
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

          <div className="text-xs text-neutral-300" aria-live="polite" aria-atomic="true">
            {index + 1} / {total}
          </div>

          <Image
            src="/icons/right-arrow.svg"
            alt="Icono de flecha hacia la derecha"
            width={45}
            height={45}
            className="cursor-pointer hover:brightness-97"
            onClick={goNext}
          />
        </div>

        {/* Puntos */}
        <div className="mt-3 flex items-center justify-center gap-2">
          {SERVICES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Ir a la tarjeta ${i + 1}`}
              className={[
                'h-2 w-2 rounded-full border',
                i === index ? 'bg-main-purple' : 'opacity-40',
              ].join(' ')}
            />
          ))}
        </div>

        {/* Texto “actual” oculto para lectores de pantalla */}
        <span className="sr-only" aria-live="polite">
          Mostrando: {current.title}
        </span>
      </div>
    </section>
  );
};