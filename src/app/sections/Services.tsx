"use client";
import Image from "next/image";
import { useState, useCallback, useMemo } from "react";
import LazyModelViewer from "@/components/LazyModelViewer";
import { SERVICES } from "@/constants/services";

export const Services = () => {
  const [index, setIndex] = useState(0);
  const total = SERVICES.length;

  const goNext = useCallback(() => setIndex(i => (i + 1) % total), [total]);
  const goPrev = useCallback(() => setIndex(i => (i - 1 + total) % total), [total]);

  const current = useMemo(() => SERVICES[index], [index]);

  return (
    <section id="services" className="cv-auto bg-white px-[10%] min-[500px]:px-[20%] md:px-[45px] xl:px-[83px] 2xl:px-[203px] py-[40px] xl:py-[55px] scroll-mt-[55px]">
      <h2 className="font-sora font-extrabold text-[20px] md:text-[24px] xl:text-[30px] text-center mb-[20px] md:mb-[35px] xl:mb-[50px]">
        Nuestros&nbsp;
        <span className="text-secondary-purple inline">
          Servicios
        </span>
      </h2>

      {/* ===== Grid tablet/desktop ===== */}
      <div className="mt-[25px] hidden md:grid grid-rows-3 md:grid-cols-2 gap-x-6 gap-y-14 lg:grid-rows-2 lg:grid-cols-3 xl:px-[80px] 2xl:px-[200px]">
        {SERVICES.map((service) => (
          <figure key={service.id} className="relative flex flex-col items-center">
            <div className="absolute inset-x-0 -top-20 flex justify-center pointer-events-auto">
              <LazyModelViewer
                src={service.model}
                height={170}
                fillY={0.5}
                align="center"
                autoRotate
                className="w-[220px] max-w-full"
              />
            </div>

            <article className="w-full h-full rounded-xl border bg-main-purple px-[25px] py-[25px] pt-20">
              <div className="flex flex-col text-white text-center">
                <h3 className="font-sora font-bold text-[16px] xl:text-[20px] mt-[10px]">
                  {service.title}
                </h3>
                <p className="font-nunito font-regular text-[14px] xl:text-[16px] mt-[15px]">
                  {service.description}
                </p>
              </div>
            </article>
          </figure>
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
          className="relative overflow-x-hidden overflow-y-visible rounded-xl snap-x snap-mandatory scroll-pl-4"
        >
          <div className="absolute inset-x-0 -top-7 z-10 flex justify-center pointer-events-auto">
            <LazyModelViewer
              src={current.model}
              height={150}
              fillY={0.5}
              align="center"
              autoRotate
              orbit={true}
              className="w-[190px] max-w-full"
            />
          </div>

          {/* Track */}
          <div
            className="flex transition-transform duration-300 ease-out will-change-transform"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="snap-start flex min-w-full pt-[25px] bg-transparent"
                aria-roledescription="slide"
                aria-label={`${SERVICES.indexOf(service) + 1} de ${total}: ${service.title}`}
              >
                <figure className="relative flex flex-col items-center">
                  <article className="w-full h-full rounded-xl border bg-main-purple px-[25px] pb-[25px] pt-20 text-white text-center">
                    <h3 className="font-sora font-bold text-[16px] my-[10px]">
                      {service.title}
                    </h3>
                    <p className="font-nunito font-light text-[14px]">
                      {service.description}
                    </p>
                  </article>
                </figure>
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

          <div className="text-xs text-neutral-300" aria-live="polite" aria-atomic="true">
            {index + 1} / {total}
          </div>

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

        {/* Puntos */}
        <div className="mt-3 flex items-center justify-center gap-2">
          {SERVICES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Ir a la tarjeta ${i + 1}`}
              className={[
                "h-2 w-2 rounded-full border",
                i === index ? "bg-main-purple" : "opacity-40",
              ].join(" ")}
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
