// components/Navbar.tsx
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center py-4 px-8 bg-gray-900 text-white fixed top-0 z-50">
      <h1 className="text-xl font-bold">Madiha ZAFER</h1>
      <ul className="flex gap-6">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/skills">Skills</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
