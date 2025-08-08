import { Code, Smartphone, Monitor, Database, Globe } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Creating responsive and dynamic web applications using modern frameworks and technologies.",
    features: [
      "React & Next.js",
      "Responsive Design",
      "Modern UI/UX",
      "Performance Optimization",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Developing cross-platform mobile applications for iOS and Android using React Native and Java.",
    features: [
      "React Native",
      "Cross-Platform",
      "Native Performance",
      "App Store Deployment",
    ],
  },
  {
    icon: Monitor,
    title: "Desktop Application Development",
    description:
      "Building efficient and user-friendly desktop applications using Java and other technologies.",
    features: [
      "Java Applications",
      "Cross-Platform",
      "User-Friendly UI",
      "System Integration",
    ],
  },
  {
    icon: Database,
    title: "Database Management",
    description:
      "Designing and managing databases, ensuring data integrity and optimal performance.",
    features: [
      "Database Design",
      "SQL Optimization",
      "Data Security",
      "Performance Tuning",
    ],
  },
  {
    icon: Globe,
    title: "WordPress Development",
    description:
      "Custom WordPress themes, plugins, and full website development with modern best practices.",
    features: [
      "Custom Themes",
      "Plugin Development",
      "WooCommerce",
      "Site Optimization",
    ],
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className={`py-16 md:py-24 bg-gray-50 dark:bg-[#1a1a1a] transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My Services
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I offer comprehensive development services to bring your ideas to
            life with modern technologies and best practices.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className={`group bg-white dark:bg-[#2a2a2a] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="text-2xl text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center text-sm text-gray-500 dark:text-gray-400"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Ready to start your next project?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 group"
          >
            Let's Work Together
            <svg
              className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/10 to-blue-600/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
