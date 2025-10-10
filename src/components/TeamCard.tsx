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
      className="focus:outline-none group"
    >
      <div
        className={clsx(
          "relative h-[267px] w-[205px] xl:h-[325px] xl:w-[250px]",
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
            <div className="relative h-[217px] xl:h-[265px] w-full">
              <Image
                src={member.imageSrc}
                alt={member.imageAlt ?? member.name}
                fill
                className="object-cover"
                sizes="(max-width: 700px) 100vw, 33vw"
                priority={false}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="h-[50px] xl:h-[60px] w-full px-[20px] flex flex-col items-center justify-center font-nunito">
              <h3 className="font-semibold text-main-purple text-[14px] lg:text-[16px]">{member.name}</h3>
              <p className="font-medium text-secondary-purple text-[11px] xl:text-[13px] line-clamp-1">{member.role}</p>
            </div>
          </div>

          {/* Reverso */}
          <div
            className="absolute inset-0 rounded-xl overflow-hidden bg-main-purple text-white py-[20px] px-[25px] flex flex-col font-nunito text-start"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
            }}
          >
            <div className="mb-[15px]">
              <h3 className="font-extrabold text-[16px] xl:text-[18px]">{member.name}</h3>
              <p className="font-medium text-[14px] xl:text-[16px]">{member.role}</p>
            </div>
            <p className="font-light text-[12px] xl:text-[14px] flex-1">
              {member.bio}
            </p>
            <div className="mt-4 flex items-center gap-x-[15px] xl:gap-x-[20px]">
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
                    width={20}
                    height={20}
                    loading="lazy"
                    decoding="async"
                    className="xl:w-auto xl:h-[25px]"
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