import React from 'react';

interface ExperienceCardProps {
  role: string;
  company: string;
  duration: string;
  description: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ role, company, duration, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold text-gray-800">{role}</h3>
    <p className="text-gray-600">{company} | {duration}</p>
    <p className="text-gray-600 mt-2">{description}</p>
  </div>
);

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Experience
        </h2>
       
        <div className="space-y-8">
          <ExperienceCard
            role="Java Backend Developer"
            company="Airobosoft"
            duration="Jan 2024 - Present"
            description="Developed and maintained microservices for enterprise-level applications using Spring Boot and Hibernate."
          />
          <ExperienceCard
            role="Full Stack Developer"
            company="Freelance Projects"
            duration="2023 - Present"
            description="Created full-stack applications using MERN and Django, ensuring scalability and user-friendly interfaces."
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;