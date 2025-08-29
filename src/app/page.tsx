import { Navbar } from "@/components/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Services } from "./sections/Services";
import { Clients } from "./sections/Clients";
import { Alliances } from "./sections/Alliances";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Clients/>
      <Alliances/>
    </div>
  );
};