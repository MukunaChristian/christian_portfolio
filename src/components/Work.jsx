"use client";

import { useState } from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";

export default function WorkSection() {
  const [selectedProject, setSelectedProject] = useState(null);

 

  const openProject = (project) => {
    // If the project has no link or is Link2Extreme, open the modal
    if (!project.link || project.link === "#") {
      setSelectedProject(project);
    } else {
      // Open the project in a new tab
      window.open(project.link, "_blank", "noopener,noreferrer");
    }
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section id="work" className="bg-white dark:bg-[#121212] py-16 md:py-20 lg:py-24 px-6 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-20 right-10 pointer-events-none opacity-30">
          <svg width="200" height="200" viewBox="0 0 200 200">
            <circle
              cx="100"
              cy="100"
              r="99"
              fill="none"
              stroke="#F5CDB3"
              className="dark:stroke-[#4A3529]"
              strokeWidth="1"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Section heading */}
          <div className="mb-12 lg:mb-16 text-center">
            <h2
              className="text-[clamp(2.25rem,7vw,4.8rem)] leading-[1.1] font-medium text-[#040404] dark:text-white mb-4"
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                letterSpacing: "-0.5px",
              }}
            >
              My Work
            </h2>
            <p
              className="text-[16px] md:text-[18px] text-[#646873] dark:text-[#A0A0A0] max-w-[600px] mx-auto"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              A collection of projects that showcase my passion for design and development
            </p>
          </div>

          {/* A4 Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {projects.map((project, index) => (
              <div
                key={index}
                onClick={() => openProject(project)}
                className="group cursor-pointer"
              >
                {/* A4 Box - Aspect ratio 1:1.414 (A4 proportions) */}
                <div className="relative bg-white dark:bg-[#1E1E1E] rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-[#F2F2F2] dark:border-[#333333] group-hover:border-[#F5CDB3] dark:group-hover:border-[#4A3529]"
                     style={{ aspectRatio: "1 / 1.414" }}>
                  
                  {/* Project Image */}
                  <div className="relative h-[60%] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white dark:bg-[#1E1E1E] rounded-full p-3 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                        {project.link && project.link !== "#" ? (
                          <ExternalLink 
                            size={20} 
                            className="text-black dark:text-white" 
                          />
                        ) : (
                          <ArrowUpRight 
                            size={20} 
                            className="text-black dark:text-white" 
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 h-[40%] flex flex-col justify-between">
                    <div>
                      <div className="mb-2">
                        <span
                          className="text-[12px] font-medium text-[#F5CDB3] dark:text-[#D4A574] uppercase tracking-wider"
                          style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                        >
                          {project.tags[0]} {/* Using first tag as category */}
                        </span>
                      </div>
                      
                      <h3
                        className="font-semibold text-[18px] text-[#040404] dark:text-white mb-2 leading-tight"
                        style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                      >
                        {project.title}
                      </h3>
                      
                      <p
                        className="text-[14px] text-[#646873] dark:text-[#A0A0A0] leading-relaxed line-clamp-2"
                        style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                      >
                        {project.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex flex-wrap gap-1">
                        {project.tags.slice(0, 2).map((tag, index) => (
                          <span
                            key={index}
                            className="text-[10px] px-2 py-1 bg-[#F5F5F5] dark:bg-[#2A2A2A] text-[#646873] dark:text-[#A0A0A0] rounded-full"
                            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <span
                        className="text-[12px] text-[#646873] dark:text-[#A0A0A0] font-medium"
                        style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                      >
                        {project.year}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal - Only shown for projects without links */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#1E1E1E] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="p-6 border-b border-[#F2F2F2] dark:border-[#333333] flex items-center justify-between">
              <div>
                <h3
                  className="font-semibold text-[24px] text-[#040404] dark:text-white"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  {selectedProject.title}
                </h3>
                <p
                  className="text-[14px] text-[#F5CDB3] dark:text-[#D4A574] uppercase tracking-wider"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  {selectedProject.tags[0]}
                </p>
              </div>
              
              <button
                onClick={closeProject}
                className="text-[#646873] dark:text-[#A0A0A0] hover:text-[#040404] dark:hover:text-white transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Project Image */}
              <div className="mb-6 rounded-lg overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-[400px] object-cover"
                />
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h4
                    className="font-semibold text-[18px] text-[#040404] dark:text-white mb-3"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    Project Overview
                  </h4>
                  <p
                    className="text-[16px] text-[#646873] dark:text-[#A0A0A0] leading-relaxed mb-6"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {selectedProject.description}
                  </p>

                  {selectedProject.link && selectedProject.link !== "#" && (
                    <div className="flex items-center gap-4">
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#040404] dark:bg-white text-white dark:text-black px-6 py-3 rounded-full hover:bg-[#1A1A1A] dark:hover:bg-[#E5E5E5] transition-colors"
                        style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                      >
                        <span className="font-medium text-[14px]">Visit Website</span>
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  )}
                </div>

                <div>
                  <h4
                    className="font-semibold text-[18px] text-[#040404] dark:text-white mb-3"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-[12px] px-3 py-1 bg-[#F5F5F5] dark:bg-[#2A2A2A] text-[#646873] dark:text-[#A0A0A0] rounded-full"
                        style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}