import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  techStack: string;
  demoLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link, techStack, demoLink }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    <p className="text-gray-600 mt-2">{description}</p>
    <p className="text-gray-500 mt-2">Technologies used: {techStack}</p>
    <div className="mt-4">
      <a href={link} target="_blank" className="text-blue-600 hover:underline">Source Code</a>
      {demoLink && (
        <a href={demoLink} target="_blank" className="text-blue-600 hover:underline ml-4">Live Demo</a>
      )}
    </div>
  </div>
);

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="Django Job Portal"
            description="This is a web application for listing job postings, built with Django with Database Interaction."
            link="https://github.com/MohammedKaif037/JobApp"
            techStack="HTML, Bootstrap, Django, SQLite, JavaScript"
          />
          <ProjectCard
            title="Ecommerce Store"
            description="This is a web application for online shopping with categorized product listings."
            link="https://github.com/MohammedKaif037/Ecommerce-Store"
            techStack="HTML, Bootstrap, Django, SQLite, JavaScript"
          />
          <ProjectCard
            title="Movie Web Application"
            description="A functional movie web application with browsing and search for movies."
            link="https://github.com/MohammedKaif037/MovieApp"
            techStack="HTML, CSS, Bootstrap, JavaScript, TMDB API"
            demoLink="http://projectx.great-site.net/"
          />
          <ProjectCard
            title="AniList API App"
            description="This Django app uses the AniList GraphQL API to provide anime information."
            link="https://github.com/MohammedKaif037/AniList-API-APP"
            techStack="HTML, CSS, Bootstrap, JavaScript, AniList API"
          />
          <ProjectCard
            title="Job Board"
            description="A job board app that allows users to search and filter job listings."
            link="https://github.com/MohammedKaif037/JobConnect"
            techStack="HTML, CSS, Bootstrap, JavaScript, Adzuna API"
            demoLink="https://mohammedkaif037.github.io/JobConnect/"
          />
          <ProjectCard
            title="CodeInterpreter"
            description="A web-based tool for executing code in Java, Python, or C."
            link="https://github.com/MohammedKaif037/AppV"
            techStack="HTML, CSS, JavaScript, CodeX API"
            demoLink="https://mohammedkaif037.github.io/AppV/"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
