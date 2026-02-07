// app/skills/page.tsx
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SkillCard from "../../components/SkillCard";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "AI Automation",
  "n8n",
  "Prompt Engineering",
];


const SkillsPage = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24 px-8 min-h-screen bg-gray-950 text-white flex flex-col items-center">
        <h1 className="text-6xl font-bold mb-12">My Skills</h1>

        {/* Flex container for image + skills */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 w-full max-w-6xl">
          
          {/* Left Image */}
          <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
            <img
              src="/skill.jpeg" // <-- Replace with your image path
              alt="Skills Illustration"
              className="rounded-lg shadow-lg w-90 h-auto object-cover"
            />
          </div>

          {/* Right Skills Grid */}
          <div className="md:w-1/3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 justify-items-center">
            {skills.map((skill) => (
              <SkillCard key={skill} skill={skill} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SkillsPage;
