import React from 'react';
import { Code, Database, Cloud, Coffee } from 'lucide-react';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="text-indigo-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          About Me
        </h2>
       
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="text-gray-600 leading-relaxed">
              I am Mohammed Kaif, a passionate Java Backend Developer with over 2 years of experience specializing in enterprise-level application development. I have a solid foundation in Java/J2EE, Spring Boot, and microservices architecture. I enjoy solving complex problems and delivering robust, scalable solutions.
            </p>
          </div>
          <div>
            <p className="text-gray-600 leading-relaxed">
              My expertise includes RESTful APIs, Hibernate, and working with databases like MySQL and Oracle. I believe in continuous learning and writing maintainable, clean code to make an impact through technology.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          <SkillCard
            icon={<Code />}
            title="Backend Development"
            description="Java, Spring Boot, REST APIs, Hibernate"
          />
          <SkillCard
            icon={<Database />}
            title="Databases"
            description="MySQL, Oracle, Cassandra"
          />
          <SkillCard
            icon={<Cloud />}
            title="Cloud & Tools"
            description="Docker, Kubernetes, Jenkins, IBM MQ"
          />
          <SkillCard
            icon={<Coffee />}
            title="Best Practices"
            description="Clean Code, TDD, Agile Development"
          />
        </div>
      </div>
    </section>
  );
};

export default About;