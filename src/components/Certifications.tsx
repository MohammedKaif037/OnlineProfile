import React from 'react';

const Certifications = () => {
  const certifications = [
    { name: "Python Essentials 1-Cisco", link: "https://www.credly.com/badges/680070f8-3f7e-4e8a-9982-9a0ecdcca2ef/linked_in_profile" },
    { name: "Python Essentials 2-Cisco", link: "https://www.credly.com/badges/01a99118-9812-4c2e-a2ab-771a2fb1b7fc/linked_in_profile" },
    { name: "Introduction to Digital Transformation with Google Cloud", link: "https://www.coursera.org/account/accomplishments/verify/643FT8J8P7DZ" },
    { name: "SQL", link: "#" },
    { name: "Generative AI-Microsoft", link: "https://drive.google.com/file/d/1TM1E_ET2EdvxHRRH2nNns0H8dM94zGQP/view?usp=drive_link" },
    { name: "AI Introduction-DevTown", link: "https://www.cert.devtown.in/verify/1ueSt7" },
    { name: "Developer Essentials For Python", link: "https://www.udemy.com/certificate/UC-640b599c-8bc9-4e4b-abc1-f8acd6c675ff/" },
    { name: "Guide To Prompt Engineering", link: "https://www.udemy.com/certificate/UC-fe601a8b-d66d-4012-a90b-c88aa9aa6d16/" },
  ];

  return (
    <section id="certifications" className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <div key={index} className="card p-4 shadow hover:shadow-md transition-shadow duration-200">
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {cert.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
