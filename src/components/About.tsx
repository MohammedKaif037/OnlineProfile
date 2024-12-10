import React from 'react';
import { Code, Database, Cloud, Coffee } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="text-gray-600 leading-relaxed">
              I'm a passionate Java developer with 2+ years of experience in building enterprise-level applications. 
              My journey in software development started with a strong foundation in computer science, and I've since 
              grown into a developer who values clean code, best practices, and continuous learning.
            </p>
          </div>
          <div>
            <p className="text-gray-600 leading-relaxed">
              Currently focused on microservices architecture and cloud technologies, I bring a blend of technical 
              expertise and problem-solving skills to every project. I believe in writing maintainable code and 
              creating solutions that make a real impact.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <SkillCard 
            icon={<Code />}
            title="Backend Development"
            description="Java, Spring Boot, REST APIs"
          />
          <SkillCard 
            icon={<Database />}
            title="Databases"
            description="MySQL, PostgreSQL, MongoDB"
          />
          <SkillCard 
            icon={<Cloud />}
            title="Cloud & DevOps"
            description="AWS, Docker, Jenkins"
          />
          <SkillCard 
            icon={<Coffee />}
            title="Best Practices"
            description="Clean Code, TDD, CI/CD"
          />
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => (
  <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="text-indigo-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default About;