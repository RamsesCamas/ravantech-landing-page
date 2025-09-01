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
    imageSrc: "/images/team/ana.jpg",
    imageAlt: "Foto de Viviana Rojo",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ligula elit, ultricies in ullamcorper at, consequat vel neque.",
    socials: [
      { platform: "linkedin", url: "https://www.linkedin.com/", iconSrc: "/icons/linkedin.svg" },
      { platform: "github", url: "https://github.com/", iconSrc: "/icons/github.svg" }
    ],
  },
  {
    id: "2",
    name: "Ramsés Camas",
    role: "CTO",
    imageSrc: "/images/team/ana.jpg",
    imageAlt: "Foto de Ramsés Camas",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ligula elit, ultricies in ullamcorper at, consequat vel neque.",
    socials: [
      { platform: "linkedin", url: "https://www.linkedin.com/", iconSrc: "/icons/linkedin.svg" },
      { platform: "github", url: "https://github.com/", iconSrc: "/icons/github.svg" }
    ],
  },
  {
    id: "3",
    name: "Daniel Ríos",
    role: "Coordinador de Desarrollo Tecnológico",
    imageSrc: "/images/team/ana.jpg",
    imageAlt: "Foto de Daniel Ríos",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ligula elit, ultricies in ullamcorper at, consequat vel neque.",
    socials: [
      { platform: "linkedin", url: "https://www.linkedin.com/", iconSrc: "/icons/linkedin.svg" },
      { platform: "github", url: "https://github.com/", iconSrc: "/icons/github.svg" }
    ],
  },
  {
    id: "4",
    name: "Iván Rincón",
    role: "CEO",
    imageSrc: "/images/team/ana.jpg",
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
    imageSrc: "/images/team/ana.jpg",
    imageAlt: "Foto de Luis Hernández",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ligula elit, ultricies in ullamcorper at, consequat vel neque.",
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
    imageSrc: "/images/team/ana.jpg",
    imageAlt: "Foto de Alejandro Camas",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ligula elit, ultricies in ullamcorper at, consequat vel neque.",
    socials: [
      { platform: "linkedin", url: "https://www.linkedin.com/", iconSrc: "/icons/linkedin.svg" },
      { platform: "github", url: "https://github.com/", iconSrc: "/icons/github.svg" }
    ],
  },
  {
    id: "7",
    name: "Fernando Monterrosa",
    role: "Director de Relaciones Comerciales",
    imageSrc: "/images/team/ana.jpg",
    imageAlt: "Foto de Fernando Monterrosa",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ligula elit, ultricies in ullamcorper at, consequat vel neque.",
    socials: [
      { platform: "linkedin", url: "https://www.linkedin.com/in/fernando-monterrosa-mazariegos-516007293/", iconSrc: "/icons/linkedin.svg" }
    ],
  },
];
