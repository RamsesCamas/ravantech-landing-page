import { Navbar } from "@/components/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Services } from "./sections/Services";
import { Clients } from "./sections/Clients";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      {/* <Clients/> */}
    </div>
  );
};