import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="E-Commerce Microservices"
            description="A scalable e-commerce platform built with Spring Boot microservices, featuring order management, inventory, and payment processing."
            tags={['Java', 'Spring Boot', 'MySQL', 'Docker']}
            githubLink="https://github.com"
            demoLink="https://demo.com"
          />

          <ProjectCard
            title="Task Management API"
            description="RESTful API for task management with authentication, authorization, and real-time notifications using WebSocket."
            tags={['Java', 'Spring Security', 'MongoDB', 'WebSocket']}
            githubLink="https://github.com"
            demoLink="https://demo.com"
          />

          <ProjectCard
            title="Cloud File Storage"
            description="Secure file storage solution with AWS S3 integration, featuring file versioning and sharing capabilities."
            tags={['Java', 'AWS', 'React', 'PostgreSQL']}
            githubLink="https://github.com"
            demoLink="https://demo.com"
          />
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ 
  title, 
  description, 
  tags, 
  githubLink, 
  demoLink 
}: { 
  title: string;
  description: string;
  tags: string[];
  githubLink: string;
  demoLink: string;
}) => (
  <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex space-x-4">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-300"
        >
          <Github className="h-5 w-5 mr-1" />
          <span>Code</span>
        </a>
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-300"
        >
          <ExternalLink className="h-5 w-5 mr-1" />
          <span>Demo</span>
        </a>
      </div>
    </div>
  </div>
);

export default Projects;