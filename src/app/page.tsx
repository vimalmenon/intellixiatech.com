import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Contact } from "@/components/contact";
import { ThemeToggle } from "@/components/theme-toggle";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-900 dark:bg-white" id="home">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Contact />
      <ThemeToggle />
    </main>
  );
}
