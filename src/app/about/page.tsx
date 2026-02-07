// app/about/page.tsx
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24 px-8 min-h-screen bg-gray-950 text-white flex flex-col items-center">
        {/* About Image */}
        <div className="w-full max-w-2xl mb-8">
          <img
            src="/img3.jpg" // <-- Replace with your image path
            alt="About Me"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* About Text */}
        <div className="max-w-2xl text-center">
          <h1 className="text-6xl font-bold mb-6">About Me</h1>
          <p className="text-gray-400">
I am an AI Engineer and Full-Stack Developer with a passion for building intelligent and scalable web applications. I specialize in AI and AI Automation, leveraging cutting-edge technologies to create smart solutions that solve real-world problems.

I have hands-on experience with n8n, Next.js, TypeScript, and Tailwind CSS, enabling me to develop highly responsive and modern front-end interfaces, as well as robust back-end systems. My skills extend to HTML, Java, and C, which give me a strong foundation in both web and software development.

As a Full-Stack Developer, I enjoy combining AI technologies with full-stack development to build applications that are efficient, user-friendly, and impactful. My goal is to turn complex ideas into real-world solutions that empower users and businesses alike.
            <br /><br />
            My goal is to combine AI technologies with full-stack development to create scalable, intelligent applications that can solve real-world problems.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
