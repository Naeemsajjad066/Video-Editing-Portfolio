import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  useEffect(() => {
    // Ensure CSS variables exist early for the pointer glow
    const onMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--cursor-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
      <nav className="container mx-auto container-padding flex h-16 items-center justify-between">
        <a href="#hero" className="font-heading text-lg font-semibold story-link" aria-label="Go to hero">
          <span className="text-foreground">Aftab</span>
          <span className="text-primary">Rasheed</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a className="hover:text-primary transition-colors" href="#intro-video">Intro Video</a>
          <a className="hover:text-primary transition-colors" href="#services">Services</a>
          <a className="hover:text-primary transition-colors" href="#portfolio">Portfolio</a>
          <a className="hover:text-primary transition-colors" href="#testimonials">Testimonials</a>
          <a className="hover:text-primary transition-colors" href="#contact">Contact</a>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild variant="hero" size="sm">
            <a href="#contact" aria-label="Hire me">Hire Me</a>
          </Button>
        </div>
      </nav>
      <div className="pointer-glow" aria-hidden="true" />
    </header>
  );
};

export default Navbar;
