import React from "react";

export default function Footer() {
  return (
    <footer className="bg-violet-900 text-gray-300 py-8 px-6 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-semibold text-white">SwapSmart</h2>
          <p className="text-sm mt-1">© 2025 SwapSmart. All rights reserved.</p>
        </div>

        <nav className="flex space-x-6 text-sm">
          <a
            href="#about"
            className="hover:text-white transition-colors duration-300"
          >
            About
          </a>
          <a
            href="https://about.me/Dileepruthin/getstarted"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            Contact
          </a>
          <a
            href="https://github.com/Dileepruthin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href="https://www.instagram.com/_ruth.in?igsh=OXJ6dXU3ODdremNz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            Instagram
            </a>
          <a
            href="https://www.linkedin.com/in/d-ruthin-a360792b2/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            Linkedin
          </a>
        </nav>
      </div>
    </footer>
  );
}
