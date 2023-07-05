import { Hero, About, Projects, Contact } from "@/components/organisms";

export default function Home() {
  return (
    <div className="relative flex h-full flex-col">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
