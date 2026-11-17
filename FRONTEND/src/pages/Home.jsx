import Welcome from "../components/Welcome";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";

export default function Home() {
  return (
    <>
      <Welcome />
      <Hero />
      <Services />
      <About />
    </>
  );
}