import React from "react";

interface Certification {
  title: string;
  link: string;
}

const certifications: Certification[] = [
  {
    title: "Python Essentials 1-Cisco",
    link: "https://www.credly.com/badges/680070f8-3f7e-4e8a-9982-9a0ecdcca2ef/linked_in_profile",
  },
  {
    title: "Python Essentials 2-Cisco",
    link: "https://www.credly.com/badges/01a99118-9812-4c2e-a2ab-771a2fb1b7fc/linked_in_profile",
  },
  {
    title: "Introduction to Digital Transformation with Google Cloud",
    link: "https://www.coursera.org/account/accomplishments/verify/643FT8J8P7DZ",
  },
  {
    title: "SQL",
    link: "#",
  },
  {
    title: "Generative AI-Microsoft",
    link: "https://drive.google.com/file/d/1TM1E_ET2EdvxHRRH2nNns0H8dM94zGQP/view?usp=drive_link",
  },
  {
    title: "AI Introduction-DevTown",
    link: "https://www.cert.devtown.in/verify/1ueSt7",
  },
  {
    title: "Developer Essentials For Python",
    link: "https://www.udemy.com/certificate/UC-640b599c-8bc9-4e4b-abc1-f8acd6c675ff/",
  },
  {
    title: "Guide To Prompt Engineering",
    link: "https://www.udemy.com/certificate/UC-fe601a8b-d66d-4012-a90b-c88aa9aa6d16/",
  },
];

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="bg-light py-5">
      <div className="container">
        <h2 className="text-center">Certifications</h2>
        <div className="section text-center">
          <div className="row">
            {certifications.map((certification, index) => (
              <div key={index} className="col-md-6 mb-3">
                <div className="card p-3">
                  <a
                    href={certification.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {certification.title}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
