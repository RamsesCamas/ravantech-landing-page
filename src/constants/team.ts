export type Social = {
  platform: "twitter" | "linkedin" | "github" | "website";
  url: string;
  iconSrc: string;
  alt?: string;
};

export type Member = {
  id: string;
  name: string;
  role: string;
  imageSrc: string;
  imageAlt?: string;
  bio: string;
  socials: Social[];
};

export const TEAM: Member[] = [
  {
    id: "1",
    name: "Viviana Rojo",
    role: "VP de Operaciones",
    imageSrc: "/images/team/vivi.webp",
    imageAlt: "Foto de Viviana Rojo",
    bio: "Lidero la operación de proyectos tecnológicos, integrando gestión, diseño UX y control de calidad para garantizar entregas exitosas y clientes satisfechos.",
    socials: [
      { platform: "linkedin", url: "https://www.linkedin.com/", iconSrc: "/icons/linkedin.svg" },
      { platform: "github", url: "https://github.com/", iconSrc: "/icons/github.svg" }
    ],
  },
  {
    id: "2",
    name: "Ramsés Camas",
    role: "CEO y Co-Fundador",
    imageSrc: "/images/team/ram.webp",
    imageAlt: "Foto de Ramsés Camas",
    bio: "Mtro. en IA y arquitecto de sistemas inteligentes. Lidero RavanTech desde el código hasta la estrategia, construyendo agentes autónomos y sistemas de automatización que transforman cómo las empresas operan.",
    socials: [
      { platform: "linkedin", url: "https://www.linkedin.com/in/camas-ramses/", iconSrc: "/icons/linkedin.svg" },
      { platform: "twitter", url: "https://x.com/CamasRamses", iconSrc: "/icons/twitter.svg" }
    ],
  },
  {
    id: "3",
    name: "Daniel Ríos",
    role: "VP de Ingeniería",
    imageSrc: "/images/team/victor_ia.webp",
    imageAlt: "Foto de Daniel Ríos",
    bio: "Superviso la ejecución técnica de proyectos, desde arquitectura hasta despliegue. Especializado en desarrollo web FullStack e Infraestructura Cloud",
    socials: [
      { platform: "linkedin", url: "https://www.linkedin.com/", iconSrc: "/icons/linkedin.svg" },
      { platform: "github", url: "https://github.com/", iconSrc: "/icons/github.svg" }
    ],
  },
  {
    id: "4",
    name: "Iván Rincón",
    role: "COO y Co-Fundador",
    imageSrc: "/images/team/ivan.webp",
    imageAlt: "Foto de Iván Rincón",
    bio: "Director de Operaciones que convierte visión en realidad. Dirijo las operaciones que llevan nuestra innovación al mundo y lidero la dirección creativa que da vida a nuestros proyectos de IA, VR/AR y videojuegos.",
    socials: [
      { platform: "linkedin", url: "https://www.linkedin.com/", iconSrc: "/icons/linkedin.svg" },
      { platform: "github", url: "https://github.com/", iconSrc: "/icons/github.svg" }
    ],
  },
  {
    id: "5",
    name: "Luis Hernández",
    role: "Senior Frontend Engineer",
    imageSrc: "/images/team/luis.webp",
    imageAlt: "Foto de Luis Hernández",
    bio: "Ingeniero en Desarrollo de Software. Me especializo en el desarrollo de aplicaciones web atractivas y funcionales.",
    socials: [
      { platform: "linkedin", url: "https://www.linkedin.com/in/luishernandez19/", iconSrc: "/icons/linkedin.svg" },
      { platform: "github", url: "https://github.com/LuisHernandez019", iconSrc: "/icons/github.svg" },
      { platform: "website", url: "https://www.luishernandez.digital/", iconSrc: "/icons/website.svg" }
    ],
  },
  {
    id: "6",
    name: "Alejandro Camas",
    role: "Consultor de tecnología",
    imageSrc: "/images/team/alex_ia.webp",
    imageAlt: "Foto de Alejandro Camas",
    bio: "Apoyo en proyectos de software e innovación, aprendiendo y aplicando tecnologías de vanguardia.",
    socials: [
      { platform: "linkedin", url: "https://www.linkedin.com/", iconSrc: "/icons/linkedin.svg" },
      { platform: "github", url: "https://github.com/", iconSrc: "/icons/github.svg" }
    ],
  },
  {
    id: "7",
    name: "Fernando Monterrosa",
    role: "Director de Relaciones Comerciales",
    imageSrc: "/images/team/fercho.webp",
    imageAlt: "Foto de Fernando Monterrosa",
    bio: "Construyo alianzas estratégicas y expando la red de clientes para impulsar el crecimiento empresarial.",
    socials: [
      { platform: "linkedin", url: "https://www.linkedin.com/in/fernando-monterrosa-mazariegos-516007293/", iconSrc: "/icons/linkedin.svg" }
    ],
  },
];