// src/components/Skills.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";
import { skillCategories, certifications } from "@/data/skills";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My Tech <span className="text-gradient">Arsenal</span>
            </h2>
            <p className="text-lg text-muted-custom max-w-2xl mx-auto">
              A collection of the tools and technologies I use to build powerful
              and intelligent solutions.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card
                  key={index}
                  className="service-card p-6 text-center transform transition-transform duration-300 hover:-translate-y-2"
                >
                  <CardContent className="p-0">
                    <div className="flex justify-center mb-4">
                      <IconComponent className="w-8 h-8 mb-4 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">
                      {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Certifications Section */}
          <div className="mt-20">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Certifications & <span className="text-gradient">Courses</span>
              </h3>
              <p className="text-lg text-muted-custom max-w-2xl mx-auto">
                My commitment to continuous learning and professional growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="service-card hover-lift p-1">
                  <CardContent className="p-5 flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-muted-custom">{cert.issuer}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
