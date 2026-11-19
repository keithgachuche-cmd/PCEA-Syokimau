import Welcome from "../components/Welcome";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Sermons from "../components/Sermons";
import Give from "../components/Give";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Welcome />
      <Hero />
      <Services />
      <About />
      <Sermons />
      <Give />
      <Contact />
    </>
  );
}