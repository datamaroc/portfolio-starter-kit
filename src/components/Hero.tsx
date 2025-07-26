"use client";
// src/components/Hero.tsx
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { user } from "@/data/user";
import { useState } from "react"; // Import useState
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  // 1. Add state to manage the popup's visibility and position
  const [popup, setPopup] = useState({ visible: false, x: 0, y: 0 });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // 2. Update the click handler to manage the popup
  const handleEmailClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigator.clipboard.writeText(user.email);

    // Show the popup at the cursor's position
    setPopup({ visible: true, x: e.pageX, y: e.pageY });

    // Hide the popup after 1.5 seconds
    setTimeout(() => {
      setPopup((prev) => ({ ...prev, visible: false }));
    }, 1500);
  };

  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient relative">
      {/* 3. Render the popup when it's visible */}
      {popup.visible && (
        <div
          style={{ top: `${popup.y + 20}px`, left: `${popup.x + 20}px` }}
          className="fixed z-50 rounded-xl bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95"
        >
          Email Copied
        </div>
      )}

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-foreground">Hi, I'm </span>
              <span className="text-gradient">{user.name}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-secondary-custom font-medium mb-6">
              {user.title}
            </h2>
            <p className="text-lg md:text-xl text-muted-custom max-w-2xl mx-auto leading-relaxed">
              {user.about.short}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="text-lg px-8 py-3"
            >
              Get In Touch
            </Button>
            <Button
              variant="github"
              size="lg"
              onClick={() => navigate("/projects")}
              className="text-lg px-8 py-3"
            >
              View My Work
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href={user.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-hover text-2xl"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href={user.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-hover text-2xl"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <button
              onClick={handleEmailClick}
              className="icon-hover text-2xl"
              aria-label="Copy email to clipboard"
            >
              <Mail className="w-8 h-8" />
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center">
            <button
              onClick={() => scrollToSection("about")}
              className="animate-bounce icon-hover"
            >
              <ArrowDown className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
