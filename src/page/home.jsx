import { useState, useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaCode, FaMobile, FaDesktop, FaDatabase, FaBars, FaTimes } from 'react-icons/fa';
import heroImage from "../assets/chris.jpg"
import aboutImage from "../assets/chris2.jpg"
import ltxImage from "../assets/L2X.png"
import hjo from "../assets/logo.jpg"
import mwmpeLogo from "../assets/icon1.jpg"
import babycare from "../assets/Gold-cloud-logo.png"
import mb from "../assets/2.png"
import veggies from "../assets/veggie.jpg"





const roles = ["Software Developer", "ICT Graduate", "Tech Enthusiast", "Web developer"];

const services = [
  { icon: FaCode, title: "Web Development", description: "Creating responsive and dynamic web applications using modern frameworks and technologies." },
  { icon: FaMobile, title: "Mobile App Development", description: "Developing cross-platform mobile applications for iOS and Android using React Native and Java." },
  { icon: FaDesktop, title: "Desktop Application Development", description: "Building efficient and user-friendly desktop applications using Java and other technologies." },
  { icon: FaDatabase, title: "Database Management", description: "Designing and managing databases, ensuring data integrity and optimal performance." }
];

const projects = [
  {
    title: "Electrical Services",
    description: "A website for an electrical services company showcasing their offerings and expertise.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=2069&q=80",
    link: "https://tumbamuntutrading.co.za/"
  },
  {
    title: "Host It Services",
    description: "Web platform for Host It Services, offering various IT solutions and hosting services.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2072&q=80",
    link: "https://hostitservices.com/"
  },
  {
    title: "hjha",
    description: "A website for air condition.",
    image: hjo,
    link: "https://hjha.ao/"
  },
  {
    title: "Babysitter and Nannies Agency",
    description: "Babysitter and Nannies Agency in Cape Town",
    image: babycare,
    link: "https://mumandbabycareservices.co.za/"
  },
  {
    title: "MB Chemprojects",
    description: "Innovative Engineering Solutions Specializing in water treatment, process equipment, and engineering projects",
    image: mb,
    link: "https://chemprojects.co.za/"
  },
  {
    title: "Easy Veggies",
    description: "healthy, and convenient food products are accessed and enjoyed",
    image: veggies,
    link: "https://easyveggies.co.za/"
  },
  {
    title: "Mwimpe E-Commerce",
    description: "A skincare e-commerce website, offering a variety of skincare products with a focus on user-friendly shopping experiences.",
    image: mwmpeLogo,
    link: "https://mwimpebeauty.co.za/"
  },
  {
    title: "Link2Extreme",
    description: "A system for extreme sports and adventure activities.",
    image: ltxImage,
    link: "#"
  },
  {
    title: "Career Pilot App",
    description: "A responsive web application for managing career tasks and productivity goals.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=2072&q=80",
    link: "#"
  },
  {
    title: "Storage Rental System",
    description: "A storage management platform where users can store items while traveling or needing temporary storage solutions.",
    image: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=2070&q=80",
    link: "#"
  },

  {
    title: "Job Search System",
    description: "An application for job seekers and employers to post and find job opportunities, providing a comprehensive platform for job searching and recruitment.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=2070&q=80",
    link: "#"
  }
]
const skills = [
  { name: "HTML", level: 100 },
  { name: "CSS & SCSS & Tailwind", level: 100 },
  { name: "Java", level: 85 },
  { name: "JavaScript", level: 70 },
  { name: "Python", level: 60 },
  { name: "Git", level: 85 },
  { name: "GitHub", level: 85 },
  { name: "React & Next.js", level: 95 },
  { name: "TypeScript", level: 70 },
]

export default function Portfolio() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [visibleSections, setVisibleSections] = useState([]);

  const sectionRefs = {
    about: useRef(null),
    services: useRef(null),
    skills: useRef(null),
    work: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => [...new Set([...prev, entry.target.id])]);
          } else {
            setVisibleSections((prev) => prev.filter((id) => id !== entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  

  const handleMenuClick = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:christianmbuyimukuna@gmail.com?subject=Contact from ${name}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-white text-black">
     <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-black hover:text-gray-700 transition-colors">
          Christian Mukuna Mbuyi
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black hover:text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Menu Items */}
        <div
          className={`${
            isMobileMenuOpen ? 'block' : 'hidden'
          } md:flex md:space-x-8 space-y-4 md:space-y-0 absolute md:relative top-full left-0 right-0 bg-white md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ease-in-out transform md:transform-none`}
        >
          {['About', 'Services', 'Skills', 'Work', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block md:inline py-2 px-4 md:px-0 text-black hover:text-gray-600 transition-colors"
              onClick={handleMenuClick}  
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>

      <main>
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I&apos;m <span className="text-black">Christian Mukuna Mbuyi</span></h1>
              <p className="text-xl mb-6">
                I&apos;m a <span className="text-black font-bold animate-pulse">{roles[roleIndex]}</span>
              </p>
              <p className="mb-6">Passionate about creating innovative software solutions and always ready for new challenges.</p>
              <div className="flex space-x-4 mb-6">
                {[
                  { href: "https://github.com/MukunaChristian", icon: FaGithub },
                  { href: "https://www.linkedin.com/in/christian-mukuna-78849a201", icon: FaLinkedin },
                  { href: "mailto:christianmbuyimukuna@gmail.com", icon: FaEnvelope },
                  { href: "tel:+27683806340", icon: FaPhone }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-gray-600 transition-colors"
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>

              <a href="#contact" className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded transition-colors">
                Get In Touch
              </a>
            </div>
            <div className="md:w-1/2">
              <img
                src={heroImage}
                alt="Christian Mukuna Mbuyi"
                className="rounded-full mx-auto w-64 h-64 object-cover animate-fade-in-scale"
              />
            </div>
          </div>
        </section>

        <section id="about" ref={sectionRefs.about} className={`py-12 md:py-24 transition-opacity duration-1000 ${visibleSections.includes('about') ? 'opacity-100' : 'opacity-0'}`}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img
                  src={aboutImage}
                  alt="Christian Mukuna Mbuyi"
                  className="rounded-lg mx-auto w-full max-w-md transform transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="md:w-1/2 md:pl-8 space-y-4">
                <p>
                  Hello, I&apos;m Christian Mukuna Mbuyi, a driven software developer intern with a recent diploma in ICT Application Development from the Cape Peninsula University of Technology. Known for my diligence and ability to quickly learn and adapt, I tackle each project as a new challenge, fully committed to delivering high-quality solutions.
                </p>
                <p>
                  My development journey started with a state diploma in commerce and administration, which gave me foundational exposure to HTML, CSS, JavaScript, and Visual Studio. Over time, I&apos;ve built upon these basics through hands-on experience in software and application development across various group projects, expanding my knowledge and expertise in desktop and mobile programming.
                </p>
                <p>
                  Throughout my academic career, I&apos;ve developed strong skills in Java, Android programming, design patterns, and object-oriented principles. I am proficient in data structures, algorithms, software analysis, normalization, and unit testing. Additionally, I am skilled in Git, GitHub, React with TypeScript, and client-server programming using sockets. My aim is to continue growing as a developer and make a meaningful impact in the tech industry.
                </p>
              </div>

            </div>
          </div>
        </section>

        <section id="services" ref={sectionRefs.services} className={`py-12 md:py-24 bg-gray-50 transition-opacity duration-1000 ${visibleSections.includes('services') ? 'opacity-100' : 'opacity-0'}`}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">My Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105">
                  <service.icon className="text-black text-4xl mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" ref={sectionRefs.skills} className={`py-12 md:py-24 transition-opacity duration-1000 ${visibleSections.includes('skills') ? 'opacity-100' : 'opacity-0'}`}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-black h-2.5 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: visibleSections.includes('skills') ? `${skill.level}%` : '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" ref={sectionRefs.work} className={`py-8 md:py-16 bg-gray-50 transition-opacity duration-1000 ${visibleSections.includes('work') ? 'opacity-100' : 'opacity-0'}`}>
  <div className="container mx-auto px-4">
    <h2 className="text-2xl font-semibold mb-6 text-center">My Work</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <div key={index} className="relative group overflow-hidden rounded-md shadow-md">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
            <p className="text-white text-center mb-3 px-3 text-sm">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-200 text-black font-medium py-1.5 px-3 rounded transition-colors text-sm"
            >
              View Project
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



        <section id="contact" className="py-12 md:py-24 transition-opacity duration-1000">
      <div className="container mx-auto px-4 max-w-md">
        <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded transition-colors">
            Send Message
          </button>
        </form>
      </div>
    </section>
      </main>

      <footer className="py-6 bg-white border-t border-black">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Christian Mukuna Mbuyi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
