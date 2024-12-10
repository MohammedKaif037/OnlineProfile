import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Work Experience
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <ExperienceCard
              title="Senior Java Developer"
              company="Tech Solutions Inc."
              period="2023 - Present"
              description={[
                "Led development of microservices-based applications using Spring Boot",
                "Implemented CI/CD pipelines using Jenkins and Docker",
                "Mentored junior developers and conducted code reviews"
              ]}
            />

            <ExperienceCard
              title="Java Developer"
              company="Digital Innovations Ltd."
              period="2021 - 2023"
              description={[
                "Developed and maintained REST APIs using Spring Framework",
                "Worked with MySQL and MongoDB for data persistence",
                "Participated in Agile development processes"
              ]}
            />

            <ExperienceCard
              title="Junior Developer"
              company="StartUp Tech"
              period="2020 - 2021"
              description={[
                "Assisted in developing Java-based web applications",
                "Learned and implemented best coding practices",
                "Collaborated with team members using Git and JIRA"
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ 
  title, 
  company, 
  period, 
  description 
}: { 
  title: string;
  company: string;
  period: string;
  description: string[];
}) => (
  <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
      <div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-indigo-600">{company}</p>
      </div>
      <span className="text-gray-500 text-sm mt-2 md:mt-0">{period}</span>
    </div>
    <ul className="list-disc list-inside text-gray-600 space-y-2">
      {description.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default Experience;