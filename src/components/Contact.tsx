import React from 'react';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Get In Touch
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Let's Connect
              </h3>
              <p className="text-gray-600">
                I'm always interested in hearing about new projects and opportunities.
                Feel free to reach out if you'd like to collaborate or just have a chat!
              </p>

              <div className="space-y-4">
                <ContactInfo 
                  icon={<Mail />}
                  text="your.email@example.com"
                  href="mailto:your.email@example.com"
                />
                <ContactInfo 
                  icon={<Linkedin />}
                  text="LinkedIn Profile"
                  href="https://linkedin.com"
                />
                <ContactInfo 
                  icon={<Github />}
                  text="GitHub Profile"
                  href="https://github.com"
                />
                <ContactInfo 
                  icon={<MapPin />}
                  text="San Francisco, CA"
                  href="#"
                />
              </div>
            </div>

            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ 
  icon, 
  text, 
  href 
}: { 
  icon: React.ReactNode;
  text: string;
  href: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-3 text-gray-600 hover:text-indigo-600 transition-colors duration-300"
  >
    <span className="text-indigo-600">{icon}</span>
    <span>{text}</span>
  </a>
);

export default Contact;