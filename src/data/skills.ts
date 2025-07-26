// src/data/skills.ts
import {
  Code,
  Database,
  BrainCircuit,
  BarChart,
  Cloud,
  Globe,
  Server,
} from "lucide-react";

export const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        "JavaScript",
        "Python",
        "Java",
        "C++",
        "HTML/CSS",
        "SQL",
      ],
    },
    {
      title: "Frameworks & Libraries",
      icon: Server,
      skills: [
        "React",
        "Node.js",
        "Express",
        "Flask",
        "Django",
        "TensorFlow",
      ],
    },
    {
      title: "Tools & Technologies",
      icon: Cloud,
      skills: [
        "Git & GitHub",
        "Docker",
        "MongoDB",
        "PostgreSQL",
        "Firebase",
        "GCP",
      ],
    },
  ];

  export const certifications = [
    { title: "Introduction to Web Development", issuer: "Coursera" },
    { title: "Python for Everybody", issuer: "University of Michigan" },
    { title: "Google IT Support Professional Certificate", issuer: "Google" },
  ];