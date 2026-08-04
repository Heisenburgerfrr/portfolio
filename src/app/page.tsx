import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Project />
      <Timeline />
      <Contact />
    </div>
  );
}
