import { Navbar } from "@/components/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Services } from "./sections/Services";
import { Clients } from "./sections/Clients";
import { Alliances } from "./sections/Alliances";
import { Team } from "./sections/Team";
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
        <Team/>
        <Contact/>
      </main>
      <Footer/>
    </>
  );
};
