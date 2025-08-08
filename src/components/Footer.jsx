"use client";

import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/MukunaChristian",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/christian-mukuna-78849a201",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:christianmbuyimukuna@gmail.com",
      label: "Email",
    },
    {
      icon: Phone,
      href: "tel:+27683806340",
      label: "Phone",
    },
  ];

  return (
    <footer className="bg-white dark:bg-[#121212] border-t border-[#F2F2F2] dark:border-[#333333] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left - Brand/Name */}
          <div>
            <h3
              className="font-bold text-[18px] text-black dark:text-white mb-1"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              Christian Mukuna Mbuyi
            </h3>
            <p
              className="text-[14px] text-[#646873] dark:text-[#A0A0A0]"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              Full-Stack Developer & Software Engineer
            </p>
            <div className="flex items-center gap-1 mt-2">
              <MapPin
                size={14}
                className="text-[#646873] dark:text-[#A0A0A0]"
              />
              <p
                className="text-[12px] text-[#646873] dark:text-[#A0A0A0]"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                Cape Town, South Africa
              </p>
            </div>
          </div>

          {/* Center - Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-[#646873] dark:text-[#A0A0A0] hover:text-black dark:hover:text-white transition-colors duration-200 transform hover:scale-110"
                >
                  <Icon size={20} strokeWidth={1.5} />
                </a>
              );
            })}
          </div>

          {/* Right - Copyright */}
          <div className="text-center md:text-right">
            <p
              className="text-[14px] text-[#646873] dark:text-[#A0A0A0]"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              © {currentYear} Christian Mukuna Mbuyi
            </p>
            <p
              className="text-[12px] text-[#646873] dark:text-[#A0A0A0]"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              All rights reserved
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#F2F2F2] dark:border-[#333333] mt-8 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <p
              className="text-[12px] text-[#646873] dark:text-[#A0A0A0]"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              Built with React & Tailwind CSS ❤️
            </p>
            <span className="hidden sm:block text-[#646873] dark:text-[#A0A0A0]">
              •
            </span>
            <p
              className="text-[12px] text-[#646873] dark:text-[#A0A0A0]"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              Passionate about creating innovative software solutions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
