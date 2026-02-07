// app/page.tsx
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SkillCard from "../components/SkillCard";
import ProjectCard from "../components/ProjectCard";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "APIs",
  "Databases",
  "LLMs",
  "n8n",
  "SerpAPI",
];

const projects = [
  {
    title: "AI Content Generator",
    description: "Generates AI content using LLM and SerpAPI.",
    tech: "Next.js | TypeScript | n8n | AI",
    github: "https://github.com/username/ai-generator",
    demo: "#",
  },
  {
    title: "E-Commerce Website",
    description: "Fully responsive e-commerce platform.",
    tech: "Next.js | TypeScript | Tailwind CSS",
    github: "https://github.com/username/ecommerce",
    demo: "#",
  },
  {
    title: "Chatbot App",
    description: "AI chatbot integrated with OpenAI API.",
    tech: "React | TypeScript | Node.js | LLM",
    github: "https://github.com/username/chatbot",
    demo: "#",
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="pt-24 bg-gray-950 text-white">
        {/* ================= HOME ================= */}
        <section
          id="home"
          className="relative h-[120vh] flex items-center px-8 overflow-hidden"
        >
          <Image
            src="/home3.jpeg"
            alt="Home Background"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-black/70" />

          <div className="relative z-10 max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold">
              Hi, I'm Madiha ZAFER
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mt-3">
              AI Engineer | Full-Stack Developer
            </p>

            <p className="max-w-lg text-gray-400 mt-4">
              I build intelligent, scalable, and modern web solutions with AI
              integration.
            </p>

            <div className="mt-6">
              <a
                href="#projects"
                className="px-6 py-3 bg-cyan-400 text-black rounded-lg hover:bg-cyan-300 transition"
              >
                View Projects
              </a>
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section
          id="about"
          className="my-24 px-8 flex flex-col md:flex-row items-center gap-10"
        >
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-gray-400 leading-relaxed space-y-4">
              I am an AI Engineer and Full-Stack Developer passionate about
              building intelligent and scalable web applications. I specialize
              in AI and automation, leveraging modern technologies to create
              smart solutions for real-world problems.
              <br />
              <br />
              I have hands-on experience with n8n, Next.js, TypeScript, and
              Tailwind CSS, enabling me to develop modern front-end interfaces
              and robust back-end systems.
              <br />
              <br />
              My goal is to turn complex ideas into real-world solutions that
              empower users and businesses.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-end">
            <Image
              src="/img1.jpg"
              alt="About Image"
              width={450}
              height={350}
              className="rounded-xl shadow-lg"
            />
          </div>
        </section>

        {/* ================= SKILLS ================= */}
        <section id="skills" className="my-24 px-8">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section id="projects" className="my-24 px-8">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section
          id="contact"
          className="my-24 px-8 flex flex-col md:flex-row items-center gap-10"
        >
          <div className="md:w-1/2 flex justify-start">
            <Image
              src="/img.jpeg"
              alt="Contact Image"
              width={450}
              height={350}
              className="rounded-xl shadow-lg"
            />
          </div>

          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Contact Me</h2>

            <p className="text-gray-400 mb-6">
              Have a project in mind or want to collaborate? I’m always open to
              discussing new ideas and opportunities.
            </p>

            <h3 className="text-2xl font-semibold mb-4">
              You can reach me via email or social links below:
            </h3>

            <ul className="text-cyan-400 flex flex-col gap-3 text-lg mb-6">
              <li>Email: madihazafer9@gmail.com</li>

              <li>
                <a
                  href="https://github.com/Madihazafar9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  GitHub
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/madiha-zafar-600137397/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  LinkedIn
                </a>
              </li>

              <li>
                <a
                  href="https://vercel.com/madihas-projects-bb9b0baf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Vercel
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/thetechlady99/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Instagram
                </a>
              </li>

              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61582893073077"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Facebook
                </a>
              </li>
            </ul>

            <button className="px-6 py-3 bg-cyan-400 text-black rounded hover:bg-cyan-300 transition">
              Get in Touch
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
