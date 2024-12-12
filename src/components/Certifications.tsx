import React from 'react';

interface CertificationCardProps {
  title: string;
  link: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ title, link }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-indigo-600 text-lg font-semibold hover:underline"
    >
      {title}
    </a>
  </div>
);

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'Python Essentials 1-Cisco',
      link: 'https://www.credly.com/badges/680070f8-3f7e-4e8a-9982-9a0ecdcca2ef/linked_in_profile',
    },
    {
      title: 'Python Essentials 2-Cisco',
      link: 'https://www.credly.com/badges/01a99118-9812-4c2e-a2ab-771a2fb1b7fc/linked_in_profile',
    },
    {
      title: 'Introduction to Digital Transformation with Google Cloud',
      link: 'https://www.coursera.org/account/accomplishments/verify/643FT8J8P7DZ',
    },
    {
      title: 'SQL',
      link: '#',
    },
    {
      title: 'Generative AI-Microsoft',
      link: 'https://drive.google.com/file/d/1TM1E_ET2EdvxHRRH2nNns0H8dM94zGQP/view?usp=drive_link',
    },
    {
      title: 'AI Introduction-DevTown',
      link: 'https://www.cert.devtown.in/verify/1ueSt7',
    },
    {
      title: 'Developer Essentials For Python',
      link: 'https://www.udemy.com/certificate/UC-640b599c-8bc9-4e4b-abc1-f8acd6c675ff/',
    },
    {
      title: 'Guide To Prompt Engineering',
      link: 'https://www.udemy.com/certificate/UC-fe601a8b-d66d-4012-a90b-c88aa9aa6d16/',
    },
  ];

  return (
    <section id="certifications" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Certifications
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} title={cert.title} link={cert.link} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
