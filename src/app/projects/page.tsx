// app/projects/page.tsx
import React from "react";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    id: "1",
    title: "Portfolio Website",
    description: "Personal portfolio built with Next.js and Tailwind CSS.",
    tech: "Next.js, TypeScript, Tailwind",
    github: "https://github.com/Madihazafar9/profile.git",
  },
  {
    id: "2",
    title: "AI Chatbot",
    description: "AI powered chat application using OpenAI API.",
    tech: "Next.js, TypeScript, Tailwind",
    github: "https://github.com/Madihazafar9/madiha-gpt.git",
  },
  {
    id: "3",
    title: "E-Commerce Store",
    description: "Full stack e-commerce app with cart and checkout.",
    tech: "Next.js, MongoDB, Stripe",
    github: "https://github.com/Madihazafar9/skin-care.git",

  },
  {
    id: "4",
    title: "Project",
    description: "Is project ka short description",
    tech: "Next.js, TypeScript, Tailwind",
    github: "https://github.com/Madihazafar9/madiha.git",
    
  },
  {
    id: "5",
    title: "Project",
    description: "Another project description",
    tech: "React, Firebase",
    github: "https://github.com/Madihazafar9/madiha1.git",
  },
   {
    id: "6",
    title: "Project",
    description: "Yet another project description",
    tech: "",
    github: "https://github.com/yourname/another-project",
  },
   {
    id: "7",
    title: "Project",
    description: "Third project description",
    tech: "React, Firebase",
    github: "https://github.com/Madihazafar9/madiha4.git",
  },
   {
    id: "8",
    title: "Project",
    description: "Fourth project description",
    tech: "React, Firebase",
    github: "https://github.com/Madihazafar9/my-web.git",
  },  {
    id: "9",
    title: "Project",
    description: "Another project description",
    tech: "React, Firebase",
    github: "https://github.com/Madihazafar9/new1.git",
  },
];

const ProjectsPage = () => {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">
        My Projects
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tech={project.tech}
            github={project.github}
            
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
