import React from "react";
import { FaReact, FaNodeJs, FaPython, FaJsSquare } from "react-icons/fa";
import { SiTailwindcss, SiMysql } from "react-icons/si";

const aboutMe = [
  {
    title: "Background",
    description:
      "Iowa City based Full-Stack Developer with internship and startup experience. Currently a research assistant at the University of Iowa working on medical image processing in Python. In 2023, I was the lead developer and a co-founder at SeatStock, where I built React/Tailwind frontend components and integrated with a Django PostgreSQL backend for ticket inventory and payment processing.",
    size: "col-span-2 row-span-1", // Wide card
  },
  {
    title: "Skills",
    size: "col-span-1 row-span-1", // Regular card
    icons: [
      { icon: FaJsSquare, name: "JavaScript" },
      { icon: FaReact, name: "React" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
      { icon: FaPython, name: "Python" },
      { icon: FaNodeJs, name: "Node.js" },
      { icon: SiMysql, name: "MySQL" },
    ],
  },
  {
    title: "Interests",
    description:
      "I am very excited about contributing to open-source projects and learning new technologies. I am currently learning Haskell and C.",
    size: "col-span-1 row-span-1", // Regular card
  },
  {
    title: "Education",
    education: [
      {
        institution: "The University of Iowa - Bachelor's in Computer Science",
        date: "August 2021 - December 2024",
        description:
          "Minor in Mathematics. Event Chair for ACM, IowaHackathon 2023 Award Winner.",
      },
    ],
    size: "col-span-2 row-span-1", // Wide card
  },
];

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-5xl font-bold text-gray-100 mb-10">About Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {aboutMe.map((section, index) => (
          <div
            key={index}
            className={`bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700 text-gray-300 ${section.size}`}
          >
            <h2 className="text-3xl font-semibold text-gray-100 mb-4">
              {section.title}
            </h2>
            {section.description && (
              <p className="mt-2 leading-relaxed text-gray-300">
                {section.description}
              </p>
            )}
            {section.icons && (
              <div className="mt-6 flex flex-wrap gap-6">
                {section.icons.map((skill, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <skill.icon className="text-4xl text-gray-100" />
                    <span className="text-lg">{skill.name}</span>
                  </div>
                ))}
              </div>
            )}
            {section.education && (
              <div className="mt-6 space-y-6">
                {section.education.map((edu, idx) => (
                  <div key={idx}>
                    <h3 className="font-semibold text-gray-100">
                      {edu.institution}{" "}
                      <span className="text-sm text-gray-400">
                        ({edu.date})
                      </span>
                    </h3>
                    <p className="mt-1 text-gray-300">{edu.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
