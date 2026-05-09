// app/projects/page.tsx
import React from "react";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    id: "1",
    title: "Portfolio Website",
    description: "Personal portfolio built with Next.js and Tailwind CSS.",
    tech: "Next.js, TypeScript, Tailwind",
    github: "https://github.com/Madihazafar9/1-portfolio-website.git",
    demo:"https://1-portfolio-website-one.vercel.app/"//vercel.com/new/madihas-projects-bb9b0baf/success?auto-redirect=true&developer-id=&external-id=&redirect-url=&branch=main&deploymentUrl=1-portfolio-website-h5kqf427z-madihas-projects-bb9b0baf.vercel.app&projectName=1-portfolio-website&s=https%3A%2F%2Fgithub.com%2FMadihazafar9%2F1-portfolio-website&gitOrgLimit=&hasTrialAvailable=1&totalProjects=1&flow-id=XVmNQ7ikoXOJLM7PVC1vm  },
  },
    {
    id: "2",
    title: "AI Chatbot",
    description: "AI powered chat application using OpenAI API.",
    tech: "Next.js, TypeScript, Tailwind",
    github: "https://github.com/Madihazafar9/madiha-gpt.git",
    demo:"https://madiha-gpt-cmvs.vercel.app/"
  },
  {
    id: "3",
    title: "E-Commerce Store",
    description: "Full stack e-commerce app with cart and checkout.",
    tech: "Next.js, NeonDB, Tailwind CSS ,TypeScript",
    github: "https://github.com/Madihazafar9/e-commerce-store.git",
      demo:"https://e-commerce-store-two-olive.vercel.app/"
  },
  {
    id: "4",
    title: "Sticker Store",
    description: "Full Stack sticker store built with Next.js and Tailwind CSS.",
    tech: "Next.js, TypeScript, Tailwind",
    github: "https://github.com/Madihazafar9/sticker.git",
    demo: "https://sticker-two-olive.vercel.app/"
  },
  {
    id: "5",
    title: "AI Automation workflow",
    description: "AI automation workflow using n8n and SerpAPI.",
    tech: "n8n,typescript ,SerpAPI,next.js, tailwind css.",
    github: "https://github.com/Madihazafar9/e-lalian.git",
    demo: "https://e-lalian.vercel.app/"
  },
   {
    id: "6",
    title: "E-Commerece store",
    description: "a store with database and authentication built with next.js and tailwind css.",
    tech: "",
    github: "https://github.com/Madihazafar9/ecom-lalian.git",
    demo: "https://ecom-lalian.vercel.app/"
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
