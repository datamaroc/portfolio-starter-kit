// src/components/Contact.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CalendlyWidget from "./CalendlyWidget";
import { user } from "@/data/user";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("messages").insert([formData]);

      if (error) {
        throw error;
      }

      toast({
        title: "Message Sent! ✅",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error ❌",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      link: user.social.github,
      username: user.social.github.split("/").pop(),
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      link: user.social.linkedin,
      username: user.name,
    },
  ];

  return (
    <section id="contact" className="py-10 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-lg text-muted-custom max-w-2xl mx-auto">
              Ready to start your next project? Let's discuss how I can help
              bring your ideas to life
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="service-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  Send Me a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-secondary-custom mb-2"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-background border-border"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-secondary-custom mb-2"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-background border-border"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-secondary-custom mb-2"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-background border-border"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-secondary-custom mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="bg-background border-border resize-none"
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Call to Action for Scheduling */}
              <Dialog>
                <Card className="service-card">
                  <CardContent className="p-8 text-center flex flex-col justify-center items-center h-full">
                    <h4 className="text-xl font-semibold mb-4 text-foreground">
                      Ready to Work Together?
                    </h4>
                    <p className="text-secondary-custom mb-6">
                      I'm always excited to take on new challenges and create
                      innovative solutions.
                    </p>
                    <DialogTrigger asChild>
                      <Button variant="outline">
                        <Mail className="w-4 h-4 mr-2" />
                        Schedule a Call
                      </Button>
                    </DialogTrigger>
                  </CardContent>
                </Card>
                <DialogContent className="h-[90vh] w-[90vw] max-w-4xl p-0">
                  <CalendlyWidget />
                </DialogContent>
              </Dialog>

              {/* Social Links */}
              <Card className="service-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-foreground">
                    Follow Me
                  </h3>
                  <div className="space-y-4">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-4 p-3 rounded-lg border border-border hover:border-primary transition-smooth hover:bg-accent/50"
                        >
                          <IconComponent className="w-6 h-6 text-primary" />
                          <div>
                            <p className="font-medium text-secondary-custom">
                              {social.title}
                            </p>
                            <p className="text-sm text-muted-custom">
                              {social.username}
                            </p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
