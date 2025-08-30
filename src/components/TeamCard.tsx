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
          "relative h-[360px] md:h-[400px] lg:h-[420px] w-full",
          "perspective",
        )}
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
            className="absolute inset-0 rounded-xl overflow-hidden bg-white border border-gray-border"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="relative h-[82.5%] w-full">
              <Image
                src={member.imageSrc}
                alt={member.imageAlt ?? member.name}
                fill
                className="object-cover"
                sizes="(max-width: 700px) 100vw, 33vw"
                priority={false}
              />
            </div>
            <div className="h-[17.5%] w-full py-[10px] px-[20px] flex flex-col items-center justify-center font-nunito-sans">
              <h3 className="font-bold text-main-purple text-[16px] md:text-[18px]">{member.name}</h3>
              <p className="font-bold text-secondary-purple text-[14px] md:text-[16px] line-clamp-1">{member.role}</p>
            </div>
          </div>

          {/* Reverso */}
          <div
            className="absolute inset-0 rounded-xl overflow-hidden bg-main-purple text-white py-[20px] px-[25px] flex flex-col font-nunito-sans text-start"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
            }}
          >
            <div className="mb-[15px]">
              <h3 className="font-bold text-[18px]">{member.name}</h3>
              <p className="font-regular text-[16px]">{member.role}</p>
            </div>
            <p className="text-[14px] flex-1">
              {member.bio}
            </p>
            <div className="mt-4 flex items-center gap-x-[15px]">
              {member.socials.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.alt ?? s.platform}
                  className="inline-flex"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image
                    src={s.iconSrc}
                    alt={s.alt ?? s.platform}
                    width={24}
                    height={24}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <span className="sr-only">
        {flipped ? "Ocultar detalles" : "Mostrar detalles"}
      </span>
    </button>
  );
};

declare global { }