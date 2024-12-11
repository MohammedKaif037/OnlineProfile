import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    <p className="text-gray-600 mt-2">{description}</p>
  </div>
);

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Projects
        </h2>
       
        <div className="grid md:grid-cols-3 gap-6">
          <ProjectCard
            title="Job Portal"
            description="A web application for job seekers and recruiters built with Django."
          />
          <ProjectCard
            title="E-commerce Store"
            description="A scalable e-commerce platform using MERN stack."
          />
          <ProjectCard
            title="Weather Dashboard"
            description="A real-time weather app fetching data from OpenWeather API."
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;