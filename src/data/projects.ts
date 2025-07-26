export interface Project {
  title: string;
  shortDescription: string;
  fullDescription: string;
  tech: string[];
  github: string;
  demo?: string;
  image: string;
  isFeatured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Project 1: Personal Portfolio",
    shortDescription: "A customizable portfolio template for students to showcase their work and skills.",
    fullDescription: "This project is a personal portfolio website built with React, TypeScript, and Tailwind CSS. It is designed to be easily customizable, allowing students to add their own projects, skills, and personal information. The portfolio is fully responsive and features a modern design with a dark mode.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    github: "https://github.com/your-username/your-portfolio-repo",
    demo: "https://your-portfolio-url.com",
    image: "/projects/portfolio.png", // Replace with your project image in the /public/projects folder
    isFeatured: true,
  },
  {
    title: "Project 2: Web Application",
    shortDescription: "A web application for managing tasks and projects.",
    fullDescription: "This project is a web application built with React, TypeScript, and Node.js. It allows users to create, manage, and track their tasks and projects. The application features a modern design, user authentication, and real-time updates.",
    tech: ["React", "TypeScript", "Node.js", "Express"],
    github: "https://github.com/your-username/your-web-app-repo",
    demo: "https://your-web-app-url.com",
    image: "/projects/web.png", // Replace with your project image in the /public/projects folder
    isFeatured: true,
  },
  {
    title: "Project 3: Mobile App",
    shortDescription: "A mobile application for tracking fitness goals and activities.",
    fullDescription: "This project is a mobile application built with React Native and TypeScript. It allows users to track their fitness goals, log their workouts, and monitor their progress over time. The app features a user-friendly interface, real-time data synchronization, and integration with popular fitness APIs.",
    tech: ["React Native", "TypeScript", "Node.js", "Express"],
    github: "https://github.com/your-username/your-mobile-app-repo",
    demo: "https://your-mobile-app-url.com",
    image: "/projects/mobile.png", // Replace with your project image in the /public/projects folder
    isFeatured: true,
  }
];