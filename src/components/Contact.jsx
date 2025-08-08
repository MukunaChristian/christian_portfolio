"use client";

import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Open mailto link
    const mailtoLink = `mailto:christianmbuyimukuna@gmail.com?subject=${encodeURIComponent(formData.subject || `Contact from ${formData.name}`)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    )}`;
    window.location.href = mailtoLink;

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section
        id="contact"
        className="bg-white dark:bg-[#121212] py-16 md:py-20 lg:py-24 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-[#EAF9FA] dark:bg-[#1E3A39] rounded-lg p-12">
            <div className="w-16 h-16 bg-[#4ADE80] rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <polyline points="20,6 9,17 4,12"></polyline>
              </svg>
            </div>
            <h3
              className="font-semibold text-[24px] text-[#040404] dark:text-white mb-4"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              Thank you for reaching out!
            </h3>
            <p
              className="text-[16px] text-[#646873] dark:text-[#A0A0A0]"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              I'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="bg-white dark:bg-[#121212] py-16 md:py-20 lg:py-24 px-6 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-20 left-10 pointer-events-none opacity-20">
        <svg width="200" height="200" viewBox="0 0 200 200">
          <path
            d="M50,100 Q100,50 150,100 Q100,150 50,100"
            fill="none"
            stroke="#F5CDB3"
            className="dark:stroke-[#4A3529]"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Contact Info */}
          <div>
            <h2
              className="text-[clamp(2.25rem,7vw,4.8rem)] leading-[1.1] font-medium text-[#040404] dark:text-white mb-6"
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                letterSpacing: "-0.5px",
              }}
            >
              Let's work
              <br />
              together
            </h2>

            <p
              className="text-[16px] md:text-[18px] text-[#646873] dark:text-[#A0A0A0] leading-relaxed mb-8"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              Ready to bring your project to life? I'd love to hear about your
              ideas and discuss how we can create something amazing together.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#F5F5F5] dark:bg-[#2A2A2A] rounded-lg flex items-center justify-center">
                  <Mail
                    size={20}
                    className="text-[#F5CDB3] dark:text-[#D4A574]"
                  />
                </div>
                <div>
                  <p
                    className="font-medium text-[16px] text-[#040404] dark:text-white"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    christianmbuyimukuna@gmail.com
                  </p>
                  <p
                    className="text-[14px] text-[#646873] dark:text-[#A0A0A0]"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    Email me directly
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#F5F5F5] dark:bg-[#2A2A2A] rounded-lg flex items-center justify-center">
                  <Phone
                    size={20}
                    className="text-[#F5CDB3] dark:text-[#D4A574]"
                  />
                </div>
                <div>
                  <p
                    className="font-medium text-[16px] text-[#040404] dark:text-white"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    +27 68 380 6340
                  </p>
                  <p
                    className="text-[14px] text-[#646873] dark:text-[#A0A0A0]"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    Call or text me
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#F5F5F5] dark:bg-[#2A2A2A] rounded-lg flex items-center justify-center">
                  <MapPin
                    size={20}
                    className="text-[#F5CDB3] dark:text-[#D4A574]"
                  />
                </div>
                <div>
                  <p
                    className="font-medium text-[16px] text-[#040404] dark:text-white"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    Cape Town, South Africa
                  </p>
                  <p
                    className="text-[14px] text-[#646873] dark:text-[#A0A0A0]"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    Available worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[14px] font-medium text-[#040404] dark:text-white mb-2"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#F5F5F5] dark:bg-[#2A2A2A] border border-transparent rounded-lg text-[#040404] dark:text-white placeholder-[#646873] dark:placeholder-[#A0A0A0] focus:outline-none focus:ring-2 focus:ring-[#F5CDB3] dark:focus:ring-[#4A3529] focus:border-transparent transition-colors"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-[14px] font-medium text-[#040404] dark:text-white mb-2"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#F5F5F5] dark:bg-[#2A2A2A] border border-transparent rounded-lg text-[#040404] dark:text-white placeholder-[#646873] dark:placeholder-[#A0A0A0] focus:outline-none focus:ring-2 focus:ring-[#F5CDB3] dark:focus:ring-[#4A3529] focus:border-transparent transition-colors"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-[14px] font-medium text-[#040404] dark:text-white mb-2"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#F5F5F5] dark:bg-[#2A2A2A] border border-transparent rounded-lg text-[#040404] dark:text-white placeholder-[#646873] dark:placeholder-[#A0A0A0] focus:outline-none focus:ring-2 focus:ring-[#F5CDB3] dark:focus:ring-[#4A3529] focus:border-transparent transition-colors"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[14px] font-medium text-[#040404] dark:text-white mb-2"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[#F5F5F5] dark:bg-[#2A2A2A] border border-transparent rounded-lg text-[#040404] dark:text-white placeholder-[#646873] dark:placeholder-[#A0A0A0] focus:outline-none focus:ring-2 focus:ring-[#F5CDB3] dark:focus:ring-[#4A3529] focus:border-transparent transition-colors resize-none"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#040404] dark:bg-white text-white dark:text-black font-medium text-[16px] px-8 py-4 rounded-lg hover:bg-[#1A1A1A] dark:hover:bg-[#E5E5E5] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}



