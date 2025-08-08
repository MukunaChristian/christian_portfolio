"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClick = () => setIsMobileMenuOpen(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    // { label: "Skills", href: "#skills" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-[#121212]/90 backdrop-blur-md border-b border-[#F2F2F2] dark:border-[#333333]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4">
        <div className="flex items-center justify-between">
          {/* Left group - Logo/Name */}
          <div className="flex items-center">
            <a
              href="#"
              className="text-black dark:text-white font-bold text-[18px] md:text-[20px] hover:opacity-80 transition-all duration-300 cursor-pointer"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              Christian Mukuna Mbuyi
            </a>
          </div>

          {/* Right group - Navigation items (desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="relative text-black/80 dark:text-white/80 font-medium text-[15px] hover:text-black dark:hover:text-white transition-all duration-300 cursor-pointer group"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Hamburger menu (mobile) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-100 dark:hover:bg-[#1E1E1E] transition-colors duration-200 rounded-lg"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X
                size={24}
                className="text-black dark:text-white"
                strokeWidth={2}
              />
            ) : (
              <Menu
                size={24}
                className="text-black dark:text-white"
                strokeWidth={2}
              />
            )}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-[#F2F2F2] dark:border-[#333333]">
            <nav className="flex flex-col gap-1">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={handleMenuClick}
                  className="text-black/80 dark:text-white/80 font-medium text-[15px] hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-[#1E1E1E] transition-all duration-200 cursor-pointer py-3 px-4 rounded-lg"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
