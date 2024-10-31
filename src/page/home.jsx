import { Img } from 'react-image';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { Github, Linkedin, Instagram, Facebook, Menu, X } from 'lucide-react'

// eslint-disable-next-line react/prop-types
const Button = ({ children, className, ...props }) => (
  <button
    className={`px-4 py-2 rounded-full transition-colors ${className}`}
    {...props}
  >
    {children}
  </button>
)

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 relative z-10">
        <Link href="/" className="text-2xl font-bold">Your Name</Link>
        <div className="md:hidden">
          <Button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        <div className={`${menuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-full left-0 right-0 bg-black md:bg-transparent p-6 md:p-0 space-y-4 md:space-y-0 md:space-x-4`}>
          <Link href="#about" className="hover:text-red-500 transition-colors">About</Link>
          <Link href="#services" className="hover:text-red-500 transition-colors">Services</Link>
          <Link href="#work" className="hover:text-red-500 transition-colors">Work</Link>
          <Link href="#contact" className="hover:text-red-500 transition-colors">Contact</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12">
        <div className="text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Name</h1>
          <p className="text-xl mb-6">Web Developer & Designer</p>
          <Button className="bg-white text-black hover:bg-red-500 hover:text-white transition-colors">
            Get In Touch
          </Button>
        </div>
        <div className="relative w-48 h-48 md:w-64 md:h-64">
          <Img
            src="/placeholder.svg?height=300&width=300"
            alt="Your Name"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12 bg-gray-900">
        <div className="relative w-full h-64 md:w-1/2 md:h-auto mb-8 md:mb-0">
          <Img
            src="/placeholder.svg?height=400&width=400"
            alt="About Me"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="md:max-w-md text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="mb-4">
            Hello! I&apos;m a passionate web developer and designer with a keen eye for detail and a love for creating beautiful, functional websites.
          </p>
          <Button className="border border-white text-white hover:bg-red-500 hover:border-red-500 transition-colors">
            Download CV
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="p-6 md:p-12">
        <h2 className="text-3xl font-bold mb-8 text-center">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Web Design', 'Web Development', 'UI/UX Design'].map((service) => (
            <div key={service} className="border border-white p-6 rounded-lg hover:border-red-500 transition-colors transform hover:scale-105">
              <h3 className="text-xl font-bold mb-2">{service}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="p-6 md:p-12 bg-gray-900">
        <h2 className="text-3xl font-bold mb-8 text-center">My Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="relative group overflow-hidden rounded-lg">
              <Img
                src={`/placeholder.svg?height=300&width=400&text=Project+${item}`}
                alt={`Project ${item}`}
                width={400}
                height={300}
                layout="responsive"
              />
              <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Button className="bg-white text-black hover:bg-red-500 hover:text-white transition-colors">
                  View Project
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="p-6 md:p-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
        <form className="max-w-md mx-auto space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-2 bg-transparent border border-white rounded" />
          <input type="email" placeholder="Your Email" className="w-full p-2 bg-transparent border border-white rounded" />
          <textarea placeholder="Your Message" className="w-full p-2 bg-transparent border border-white rounded h-32"></textarea>
          <Button type="submit" className="w-full bg-white text-black hover:bg-red-500 hover:text-white transition-colors">
            Send Message
          </Button>
        </form>
      </section>

      {/* Footer with Social Icons */}
      <footer className="text-center p-6">
        <div className="flex justify-center space-x-4 mb-4">
          <Link href="#" className="bg-white text-black p-2 rounded-full hover:bg-red-500 hover:text-white transition-colors">
            <Github className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="#" className="bg-white text-black p-2 rounded-full hover:bg-red-500 hover:text-white transition-colors">
            <Linkedin className="w-6 h-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="#" className="bg-white text-black p-2 rounded-full hover:bg-red-500 hover:text-white transition-colors">
            <Instagram className="w-6 h-6" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="#" className="bg-white text-black p-2 rounded-full hover:bg-red-500 hover:text-white transition-colors">
            <Facebook className="w-6 h-6" />
            <span className="sr-only">Facebook</span>
          </Link>
        </div>
        <div className="w-full h-px bg-white mb-4"></div>
        <p>&copy; 2023 Your Name. All rights reserved.</p>
      </footer>
    </div>
  )
}