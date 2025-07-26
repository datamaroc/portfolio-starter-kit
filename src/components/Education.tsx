// src/components/Education.tsx
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/education";

const Education = () => {
  return (
    <section id="education" className="py-10 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-lg text-muted-custom max-w-2xl mx-auto">
              My academic and professional qualifications that shape my
              expertise.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="relative">
            {/* The vertical line */}
            <div className="absolute left-4 sm:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-primary/30 to-secondary/30"></div>

            {education.map((item, index) => (
              <div key={index} className="relative mb-12">
                <div
                  className="flex items-center sm:justify-normal"
                  style={{
                    flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                  }}
                >
                  <div className="sm:w-1/2"></div>
                  <div
                    className={`sm:w-1/2 ${
                      index % 2 === 0 ? "sm:pl-8" : "sm:pr-8"
                    }`}
                  >
                    <div className="absolute left-4 sm:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
                      <div className="w-5 h-5 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                    </div>
                    <Card className="service-card hover-lift">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <GraduationCap className="text-primary mt-1 h-6 w-6 flex-shrink-0" />
                          <div>
                            <p className="text-xs text-primary font-semibold mb-1">
                              {item.year}
                            </p>
                            <h3 className="text-lg font-bold text-foreground">
                              {item.degree}
                            </h3>
                            <p className="text-sm text-secondary-custom font-medium mb-2">
                              {item.school}
                            </p>
                            <p className="text-sm text-muted-custom">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
