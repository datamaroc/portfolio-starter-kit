// src/components/About.tsx
import { Card } from "@/components/ui/card";
import { user } from "@/data/user";

const About = () => {
  return (
    <section id="about" className="py-10 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
          </div>

          {/* About Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              {user.about.long.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg text-secondary-custom leading-relaxed text-center sm:text-left"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Visual Element with Profile Image */}
            <div className="flex justify-center">
              <Card className="service-card p-8 max-w-sm w-full">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 ring-4 ring-primary/20">
                    <img
                      src={user.about.image}
                      alt={user.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">{user.title}</h3>
                  <p className="text-muted-custom">{user.about.short}</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
