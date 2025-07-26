// src/components/Services.tsx
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/data/services";

const Services = () => {
  return (
    <section id="services" className="py-10 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-gradient">Services</span>
            </h2>
            <p className="text-lg text-muted-custom max-w-2xl mx-auto">
              Comprehensive solutions that bridge the gap between cutting-edge
              AI technology and practical business applications
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="service-card p-8 h-full">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center glow">
                          <IconComponent className="w-8 h-8 text-primary-foreground" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3 text-foreground">
                          {service.title}
                        </h3>
                        <p className="text-secondary-custom leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-muted-custom mb-6">
              Ready to transform your business with AI-powered solutions?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-smooth font-medium text-lg"
            >
              Let's discuss your project
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
