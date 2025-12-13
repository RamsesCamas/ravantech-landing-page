export type Service = {
  id: number;
  title: string;
  description: string;
  model: string;
};

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Asistentes con IA generativa",
    description: "Desarrollamos asistentes inteligentes capaces de crear, responder y adaptarse a tus necesidades.",
    model: "/models/WebsiteBrain.glb",
  },
  {
    id: 2,
    title: "Experiencias inmersivas digitales",
    description: "Creamos entornos virtuales que cautivan y sumergen a tus usuarios.",
    model: "/models/VR_Headset.glb",
  },
  {
    id: 3,
    title: "Automatización de procesos con IA",
    description: "Reducimos costos y errores automatizando tareas operativas con soluciones de IA a medida.",
    model: "/models/WebsiteBrain.glb",
  },
  {
    id: 4,
    title: "Consultoría en transformación digital",
    description: "Impulsamos tu negocio hacia el futuro con estrategias tecnológicas a medida.",
    model: "/models/WebsiteController.glb",
  },
  {
    id: 5,
    title: "Escaneo y digitalización 3D",
    description: "Transformamos objetos físicos en modelos digitales precisos y listos para usar.",
    model: "/models/VR_Headset.glb",
  },
  {
    id: 6,
    title: "Capacitación en innovación tecnológica",
    description: "Formamos a tu equipo en las herramientas y tendencias que definen el futuro.",
    model: "/models/WebsiteController.glb",
  },
];