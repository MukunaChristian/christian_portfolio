import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaCode, FaMobile, FaDesktop, FaDatabase, FaBars, FaTimes } from 'react-icons/fa';
export default function Portfolio() {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["Software Developer", "ICT Graduate", "Tech Enthusiast"];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  useEffect(() => {
    const intervalId = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { name, email, message });
  };

  const projects = [
    {
      title: "Electrical Services",
      description: "A website for electrical services company showcasing their offerings and expertise.",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      link: "https://github.com/Host-It-Services/electrical_services"
    },
    {
      title: "Host It Services",
      description: "Web platform for Host It Services, offering various IT solutions and hosting services.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      link: "https://github.com/Host-It-Services/Host_It_Services_web"
    },
    {
      title: "Lab Trader",
      description: "An e-commerce platform specialized in laboratory equipment and supplies trading.",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "https://github.com/MukunaChristian/labtrader"
    },
    {
      title: "Link2Extreme Booking",
      description: "A booking system for extreme sports and adventure activities.",
      image: "https://images.unsplash.com/photo-1533731780465-f2d7a30eeb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "https://github.com/MukunaChristian/Link2ExtremeBooking"
    }
  ];

  const services = [
    { icon: FaCode, title: "Web Development", description: "Creating responsive and dynamic web applications using modern frameworks and technologies." },
    { icon: FaMobile, title: "Mobile App Development", description: "Developing cross-platform mobile applications for iOS and Android using React Native and Java." },
    { icon: FaDesktop, title: "Desktop Application Development", description: "Building efficient and user-friendly desktop applications using Java and other technologies." },
    { icon: FaDatabase, title: "Database Management", description: "Designing and managing databases, ensuring data integrity and optimal performance." }
  ];




  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-red-500 hover:text-red-600 transition-colors">
            Christian Mukuna Mbuyi
          </a>
          <button
            className="text-white text-2xl md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <div className={`md:flex space-x-4 md:static absolute w-full md:w-auto top-16 left-0 bg-black md:bg-transparent p-4 md:p-0 transition-transform transform md:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <a href="#about" className="block md:inline hover:text-red-500 transition-colors">About</a>
            <a href="#services" className="block md:inline hover:text-red-500 transition-colors">Services</a>
            <a href="#skills" className="block md:inline hover:text-red-500 transition-colors">Skills</a>
            <a href="#work" className="block md:inline hover:text-red-500 transition-colors">Work</a>
            <a href="#contact" className="block md:inline hover:text-red-500 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-12 md:py-32">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm <span className="text-red-500">Christian Mukuna Mbuyi</span></h1>
            <p className="text-xl mb-6">
              I&apos;m a <span className="text-red-500 font-bold animate-pulse">{roles[roleIndex]}</span>
            </p>
            <p className="mb-6">Passionate about creating innovative software solutions and always ready for new challenges.</p>
            <div className="flex space-x-4 mb-6">
              <a href="https://github.com/MukunaChristian" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:christianmbuyimukuna@gmail.com" className="text-white hover:text-red-500 transition-colors">
                <FaEnvelope size={24} />
              </a>
              <a href="tel:0683806340" className="text-white hover:text-red-500 transition-colors">
                <FaPhone size={24} />
              </a>
            </div>
            <a href="#contact" className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded transition-colors">Get In Touch</a>
          </div>
          <div className="md:w-1/2">
            <img
              src="/placeholder.svg?height=400&width=400"
              alt="Christian Mukuna Mbuyi"
              className="rounded-full mx-auto animate-bounce"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-24 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Christian Mukuna Mbuyi"
                className="rounded-lg mx-auto w-full max-w-md transform transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <p className="mb-4">
                I'm Christian Mukuna Mbuyi, a dedicated and forward-thinking software developer intern. I recently completed my diploma in ICT application development at Cape Peninsula University of Technology. Known for my diligence and quick learning abilities, I approach each day as a new adventure, fully prepared for any challenge that comes my way.
              </p>
              <p className="mb-4">
                I've contributed to the creation of software and applications for group projects, and I have experience in both desktop and mobile programming. My journey in tech began with my state diploma in commerce and administration, which is equivalent to a matric certificate, where I gained initial exposure to HTML, CSS, JavaScript, and Visual Studio.
              </p>
              <p>
                Currently enrolled in my final year of ICT at Cape Peninsula University of Technology, I'm expanding my skills in Java and Android programming, design patterns, object orientation, data structures, algorithms, software analysis, normalization, unit testing, Git, GitHub, React with TypeScript, and client-server programming using sockets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">My Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-zinc-800 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-zinc-700">
                <service.icon className="text-red-500 text-4xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-zinc-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 md:py-24 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {["HTML", "CSS", "JavaScript", "Python", "Java", "MySQL", "Android Studio", "React", "TypeScript", "Git", "GitHub", "Visual Studio"].map((skill, index) => (
              <div key={index} className="bg-zinc-800 p-4 rounded-lg text-center transform transition-all duration-300 hover:scale-110 hover:bg-red-500 hover:text-white">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-12 md:py-24 bg-zinc-900 animate-fadeIn">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">My Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-zinc-800 rounded-lg overflow-hidden relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-red-500 bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white text-center mb-4 px-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-red-500 px-6 py-2 rounded hover:bg-red-100 transition-colors"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-12 md:py-24 animate-fadeIn">
        <div className="container mx-auto px-4 max-w-md">
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded focus:outline-none focus:border-red-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded focus:outline-none focus:border-red-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded focus:outline-none focus:border-red-500"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded transition-colors">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-zinc-900">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Christian Mukuna Mbuyi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}