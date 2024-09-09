import React from "react";
import { FaReact, FaNodeJs, FaPython, FaJsSquare } from "react-icons/fa";
import { SiTailwindcss, SiMysql } from "react-icons/si";

const aboutMe = [
  {
    title: "Background",
    description:
      "Iowa City based software developer with experience in web development and machine learning. This year I've worked as a research assistant at the University of Iowa doing medical image processing in Python. In 2023 I was lead developer for a startup called SeatStock. There I built frontend components in React with Tailwind and worked on integrating the backend to handle ticket inventory management and payment processing.",
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
      "I am very excited about contributing to open source projects and learning new technologies. I am currently learning Typescript and Haskell.",
    size: "col-span-1 row-span-1", // Regular card
  },
  {
    title: "Education",
    education: [
      {
        institution: "The University of Iowa - Bachelor's in Computer Science",
        date: "August 2021 - December 2024",
        description:
          "Minor in Mathematics. Event Planner for the Association for Computing Machinery (ACM), IowaHackathon 2023 Award Winner. ",
      },
    ],
    size: "col-span-2 row-span-1", // Wide card
  },
];

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-white mb-8">About Me</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {aboutMe.map((section, index) => (
          <div
            key={index}
            className={`bg-gray-900 p-6 rounded-lg border border-gray-700 text-white ${section.size}`}
          >
            <h2 className="text-2xl font-bold">{section.title}</h2>
            {section.description && (
              <p className="mt-2 text-gray-400">{section.description}</p>
            )}
            {section.icons && (
              <div className="mt-4 flex flex-wrap gap-4">
                {section.icons.map((skill, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <skill.icon className="text-3xl text-white" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            )}
            {section.education && (
              <div className="mt-4 space-y-4">
                {section.education.map((edu, idx) => (
                  <div key={idx}>
                    <h3 className="">
                      {edu.institution}{" "}
                      <span className="text-gray-400 text-sm">
                        ({edu.date})
                      </span>
                    </h3>
                    <p className="text-gray-400">{edu.description}</p>
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
