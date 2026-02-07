// components/Footer.tsx
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-6 mt-20 text-center">
      <p className="mb-3">
        © {new Date().getFullYear()} Madiha ZAFER. All Rights Reserved.
      </p>

      <div className="flex flex-wrap justify-center gap-6 text-cyan-400">

        <a
          href="https://github.com/Madihazafar9"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          GitHub
        </a>

        <a
          href="https://vercel.com/madihas-projects-bb9b0baf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          Vercel
        </a>

        <a
          href="https://www.instagram.com/thetechlady99/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          Instagram
        </a>
             <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61582893073077"
                  target="_blank"
                  className="hover:underline"
                >
                  Facebook
                </a>
              </li>
        <a
          href="https://www.upwork.com/freelancers/~yourid"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          Upwork
        </a>

        <a
          href="https://pro.fiverr.com/?source=top_nav"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          Fiverr
        </a>

        <a
          href="https://www.linkedin.com/in/madiha-zafar-600137397/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          LinkedIn
        </a>

        <a
          href="mailto:madiha@example.com"
          className="hover:text-white transition"
        >
          Email
        </a>

      </div>
    </footer>
  );
};

export default Footer;
