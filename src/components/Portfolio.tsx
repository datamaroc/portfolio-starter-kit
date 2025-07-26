// src/components/Portfolio.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { projects, Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProjects = projects.filter((project) => project.isFeatured);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-muted-custom max-w-2xl mx-auto">
              A showcase of my latest work
            </p>
          </div>

          <Dialog>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => {
                const hasGitHub = project.github && project.github !== "#";
                const hasDemo = !!project.demo;

                return (
                  <Card
                    key={project.title}
                    className="service-card group overflow-hidden flex flex-col"
                  >
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent"></div>
                    </div>

                    <CardContent className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {project.title}
                      </h3>
                      <p className="text-secondary-custom text-sm leading-relaxed mb-4 flex-grow">
                        {project.shortDescription}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* --- NEW & IMPROVED BUTTON LOGIC --- */}
                      <div className="flex gap-4 mt-auto">
                        {hasDemo ? (
                          <>
                            <Button variant="default" size="sm" asChild>
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1"
                              >
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Live Demo
                              </a>
                            </Button>
                            <DialogTrigger asChild>
                              <Button
                                variant="outline"
                                size="sm"
                                className="flex-1"
                                onClick={() => setSelectedProject(project)}
                              >
                                Learn More
                              </Button>
                            </DialogTrigger>
                          </>
                        ) : hasGitHub ? (
                          <>
                            <Button variant="outline" size="sm" asChild>
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1"
                              >
                                <Github className="w-4 h-4 mr-2" />
                                Code
                              </a>
                            </Button>
                            <DialogTrigger asChild>
                              <Button
                                variant="default"
                                size="sm"
                                className="flex-1"
                                onClick={() => setSelectedProject(project)}
                              >
                                Learn More
                              </Button>
                            </DialogTrigger>
                          </>
                        ) : (
                          <DialogTrigger asChild>
                            <Button
                              variant="default"
                              size="sm"
                              className="w-full"
                              onClick={() => setSelectedProject(project)}
                            >
                              Learn More
                            </Button>
                          </DialogTrigger>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center mt-16">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-secondary/30 hover:bg-secondary/60 hover:text-primary transition-all duration-300 group"
              >
                <Link to="/projects">
                  View All Projects
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {selectedProject && (
              <DialogContent className="bg-card border-border text-foreground sm:max-w-[625px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-gradient mb-2">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="text-secondary-custom leading-relaxed">
                    {selectedProject.fullDescription}
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <h4 className="font-semibold text-foreground mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </DialogContent>
            )}
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
