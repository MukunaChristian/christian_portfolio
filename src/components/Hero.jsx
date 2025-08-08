import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import mb from "../assets/mbuyi.jpeg"

// Sample roles data
const roles = [
  "Full-Stack Developer",
  "Software Engineer",
  "Web Developer",
  "Problem Solver",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-[#121212] dark:to-[#1a1a1a] relative flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            {/* Greeting */}
            <div className="mb-6">
              <span className="inline-block bg-black dark:bg-white text-white dark:text-black text-sm font-medium px-4 py-2 rounded-full mb-4">
                👋 Welcome to my portfolio
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block text-gray-900 dark:text-white">
                Hi, I'm
              </span>
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Christian Mukuna Mbuyi
              </span>
            </h1>

            {/* Rotating Role */}
            <div className="mb-8">
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
                I'm a{" "}
                <span className="relative">
                  <span className="text-black dark:text-white font-bold">
                    {roles[roleIndex]}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse"></span>
                </span>
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Passionate about creating innovative software solutions and always
              ready for new challenges. Let's build something amazing together.
            </p>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6 mb-8">
              {[
                {
                  href: "https://github.com/MukunaChristian",
                  icon: Github,
                  label: "GitHub",
                },
                {
                  href: "https://www.linkedin.com/in/christian-mukuna-78849a201",
                  icon: Linkedin,
                  label: "LinkedIn",
                },
                {
                  href: "mailto:christianmbuyimukuna@gmail.com",
                  icon: Mail,
                  label: "Email",
                },
                { href: "tel:+27683806340", icon: Phone, label: "Phone" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-black font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105 text-center"
              >
                Get In Touch
              </a>
              <a
                href="#work"
                className="border-2 border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-xl text-center"
              >
                View My Work
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-20 animate-pulse"></div>

              {/* Main image container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full p-4">
                  <img
                    src={mb}
                    alt="Christian Mukuna Mbuyi"
                    className="w-full h-full object-cover rounded-full shadow-2xl hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-full opacity-80 animate-bounce"></div>
              <div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500 rounded-full opacity-80 animate-bounce"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
