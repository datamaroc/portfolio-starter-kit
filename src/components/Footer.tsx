// src/components/Footer.tsx
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { user } from "@/data/user";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Github, href: user.social.github, label: "GitHub" },
    {
      icon: Linkedin,
      href: user.social.linkedin,
      label: "LinkedIn",
    },
    { icon: Mail, href: `mailto:${user.email}`, label: "Email" },
  ];

  return (
    <footer className="bg-card border-t border-border py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold text-gradient mb-4">
                {user.name}
              </h3>
              <p className="text-secondary-custom leading-relaxed">
                {user.title} passionate about creating intelligent solutions
                that make a difference.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-secondary-custom hover:text-primary transition-smooth"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Connect
              </h4>
              <p className="text-secondary-custom mb-4">
                Let's discuss your next project
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center icon-hover"
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-muted-custom text-sm mb-4 md:mb-0">
                © {currentYear} {user.name}. All rights reserved.
              </p>

              {/* <p className="text-muted-custom text-sm flex items-center">
                Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> using
                React & TypeScript
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
