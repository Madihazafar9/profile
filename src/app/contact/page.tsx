// app/contact/page.tsx
import React from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ContactPage = () => {
  return (
    <>
      <Navbar />

      <main className="pt-24 px-8 min-h-screen bg-gray-950 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          
          {/* TEXT CONTENT */}
          <div>
            <h1 className="text-6xl font-bold mb-6">Contact Me</h1>

            <h4>
              <p className="text-gray-400 mb-6">
              <span className="text-2xl font-semibold">You can reach me via email or social links below:</span>
            </p>
            </h4>

            <ul className="text-cyan-400 flex flex-col gap-3 text-lg">
              <li>Email: madihazafer9@gmail.com</li>

              <li>
                <a
                  href="https://github.com/Madihazafar9"
                  target="_blank"
                  className="hover:underline"
                >
                  GitHub
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/madiha-zafar-600137397/"
                  target="_blank"
                  className="hover:underline"
                >
                  LinkedIn
                </a>
              </li>

              <li>
                <a
                  href="https://vercel.com/madihas-projects-bb9b0baf"
                  target="_blank"
                  className="hover:underline"
                >
                  Vercel
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/thetechlady99/"
                  target="_blank"
                  className="hover:underline"
                >
                  Instagram
                </a>
              </li>
<li> 
    <a
          href="https://pro.fiverr.com/?source=top_nav"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          Fiverr
        </a></li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61582893073077"
                  target="_blank"
                  className="hover:underline"
                >
                  Facebook
                </a>
              </li>
              <li> <a
          href="https://www.upwork.com/freelancers/~yourid"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          Upwork
        </a></li>
            </ul>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center">
            <Image
              src="/co.jpeg"
              alt="Contact illustration"
              width={800}
              height={800}
              className="rounded-xl shadow-lg"
            />
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default ContactPage;
