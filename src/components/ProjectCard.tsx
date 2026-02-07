// components/ProjectCard.tsx
import React from "react";

export interface ProjectCardProps {
  title: string;
  description: string;
  tech: string;
  github: string;
  demo?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tech,
  github,
  demo,
}) => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow hover:scale-105 transition">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300 mb-2">{description}</p>
      <p className="text-cyan-400 mb-4">{tech}</p>

      <div className="flex gap-4">
        <a href={github} target="_blank" className="underline">
          GitHub
        </a>

        {demo && (
          <a href={demo} target="_blank" className="underline">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
