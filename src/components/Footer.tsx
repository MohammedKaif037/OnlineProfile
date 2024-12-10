import React from 'react';
import { Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Code2 className="h-6 w-6 text-indigo-600" />
            <span className="text-xl font-bold text-gray-800">JavaDev</span>
          </div>

          <div className="text-gray-600 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </div>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <FooterLink href="#about">About</FooterLink>
            <FooterLink href="#experience">Experience</FooterLink>
            <FooterLink href="#projects">Projects</FooterLink>
            <FooterLink href="#contact">Contact</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
  >
    {children}
  </a>
);

export default Footer;