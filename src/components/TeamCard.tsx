"use client";
import Image from "next/image";
import { Member } from "@/constants/team";
import { useState } from "react";
import clsx from "clsx";

type Props = {
  member: Member;
};

export default function TeamCard({ member }: Props) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      aria-label={`Ver detalles de ${member.name}`}
      onClick={() => setFlipped((f) => !f)}
      className="w-full focus:outline-none group"
    >
      <div
        className={clsx(
          "relative h-[360px] sm:h-[380px] md:h-[400px] lg:h-[420px] w-full",
          "perspective",
        )}
        /* usando utilidades arbitrarias de Tailwind para 3D */
        style={{ perspective: "1000px" }}
      >
        <div
          className={clsx(
            "relative h-full w-full transition-transform duration-500",
            flipped ? "rotate-y-180" : "rotate-y-0"
          )}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* Frente */}
          <div
            className="absolute inset-0 rounded-xl overflow-hidden shadow-sm bg-main-purple"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="relative h-2/3 w-full">
              <Image
                src={member.imageSrc}
                alt={member.imageAlt ?? member.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={false}
              />
            </div>
            <div className="h-1/3 w-full p-4 flex flex-col items-start justify-center text-white">
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm">{member.role}</p>
            </div>
          </div>

          {/* Reverso */}
          <div
            className="absolute inset-0 rounded-xl overflow-hidden shadow-sm bg-main-purple text-white p-4 flex flex-col text-start"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
            }}
          >
            <div className="mb-2">
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm">{member.role}</p>
            </div>
            <p className="text-sm leading-relaxed line-clamp-6 flex-1">
              {member.bio}
            </p>
            <div className="mt-4 flex items-center gap-3">
              {member.socials.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.alt ?? s.platform}
                  className="inline-flex"
                  onClick={(e) => e.stopPropagation()} // para no volver a voltear al hacer click
                >
                  <Image
                    src={s.iconSrc}
                    alt={s.alt ?? s.platform}
                    width={22}
                    height={22}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tip visual accesible */}
      <span className="sr-only">
        {flipped ? "Ocultar detalles" : "Mostrar detalles"}
      </span>
    </button>
  );
}

/* Helpers de clase para el flip (con Tailwind mediante utilidades arbitrarias) */
/* Nota: estas clases usan CSS-in-JS inline arriba para preserve-3d/backface. */
declare global {
  // Agregamos definiciones para evitar errores de TS si usas CSS Modules, opcional.
}