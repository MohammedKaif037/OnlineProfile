import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Java Developer
              <span className="text-indigo-600"> with a passion for clean code</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              2+ years of experience building robust and scalable applications.
              Specialized in Spring Boot, Microservices, and Cloud Technologies.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://github.com/mohammedkaif037" icon={<Github />} />
              <SocialLink href="https://linkedin.com/in/mohammed-kaif" icon={<Linkedin />} />
              <SocialLink href="mailto:kaifmohammed037@gmail.com"icon={<Mail />} />
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=500"
              alt="Developer workspace"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 bg-gray-100 rounded-full hover:bg-indigo-100 transition-colors duration-300"
  >
    {icon}
  </a>
);

export default Hero;