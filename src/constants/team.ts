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
    role: "Directora de Transformación Digital",
    imageSrc: "/images/team/default-picture.webp",
    imageAlt: "Foto de Viviana Rojo",
    bio: "Lidero la adopción de soluciones tecnológicas que modernizan procesos y generan ventajas competitivas.",
    socials: [
      { platform: "linkedin", url: "https://www.linkedin.com/", iconSrc: "/icons/linkedin.svg" },
      { platform: "github", url: "https://github.com/", iconSrc: "/icons/github.svg" }
    ],
  },
  {
    id: "2",
    name: "Ramsés Camas",
    role: "CTO",
    imageSrc: "/images/team/default-picture.webp",
    imageAlt: "Foto de Ramsés Camas",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ligula elit, ultricies in ullamcorper at, consequat vel neque.",
    socials: [
      { platform: "linkedin", url: "https://www.linkedin.com/in/camas-ramses/", iconSrc: "/icons/linkedin.svg" },
      { platform: "twitter", url: "https://x.com/CamasRamses", iconSrc: "/icons/twitter.svg" }
    ],
  },
  {
    id: "3",
    name: "Daniel Ríos",
    role: "Coordinador de Desarrollo Tecnológico",
    imageSrc: "/images/team/default-picture.webp",
    imageAlt: "Foto de Daniel Ríos",
    bio: "Superviso y organizo los proyectos técnicos, asegurando calidad e integración en cada solución.",
    socials: [
      { platform: "linkedin", url: "https://www.linkedin.com/", iconSrc: "/icons/linkedin.svg" },
      { platform: "github", url: "https://github.com/", iconSrc: "/icons/github.svg" }
    ],
  },
  {
    id: "4",
    name: "Iván Rincón",
    role: "CEO",
    imageSrc: "/images/team/default-picture.webp",
    imageAlt: "Foto de Iván Rincón",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ligula elit, ultricies in ullamcorper at, consequat vel neque.",
    socials: [
      { platform: "linkedin", url: "https://www.linkedin.com/", iconSrc: "/icons/linkedin.svg" },
      { platform: "github", url: "https://github.com/", iconSrc: "/icons/github.svg" }
    ],
  },
  {
    id: "5",
    name: "Luis Hernández",
    role: "Coordinador de Experiencia Digital",
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
    role: "Becario Desarrollo",
    imageSrc: "/images/team/default-picture.webp",
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
    imageSrc: "/images/team/default-picture.webp",
    imageAlt: "Foto de Fernando Monterrosa",
    bio: "Construyo alianzas estratégicas y expando la red de clientes para impulsar el crecimiento empresarial.",
    socials: [
      { platform: "linkedin", url: "https://www.linkedin.com/in/fernando-monterrosa-mazariegos-516007293/", iconSrc: "/icons/linkedin.svg" }
    ],
  },
];