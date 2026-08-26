import { Navbar } from "@/components/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Services } from "./sections/Services";
import { Clients } from "./sections/Clients";
import { Alliances } from "./sections/Alliances";
// Sección "Conoce a Nuestro Equipo" oculta temporalmente.
// El componente, el carrusel y las fotos siguen en el repo:
// src/app/sections/Team.tsx, src/components/TeamCarousel.tsx,
// src/constants/team.ts y public/images/team/.
// Para volver a mostrarla, descomenta este import y <Team/> más abajo.
// import { Team } from "./sections/Team";
import { Contact } from "./sections/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <Services/>
        <Clients/>
        <Alliances/>
        {/* <Team/> */}
        <Contact/>
      </main>
      <Footer/>
    </>
  );
};
