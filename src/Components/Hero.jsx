import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-solid-svg-icons";

import Resume from "../assets/Liam-Stamper.pdf";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-40">
      <h1 class="block font-bold text-white text-4xl md:text-5xl lg:text-8xl">
        Liam Stamper
      </h1>
      <div class="mt-5 max-w-3xl">
        <p class="text-lg text-center text-white">
          Computer Science student at The University of Iowa. 2024 Undergraduate
          Research Assistant. JavaScript Developer in 2023 and Web Development
          Intern during Summer 2022.
        </p>
      </div>
      <div class="mt-8 gap-3 flex justify-center">
        <a
          class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          href={Resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          My Resume
          <svg
            class="shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </a>
        <Link
          class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
          to={{
            pathname: "/projects/gr-stocks",
            state: { fromRecentProjects: true },
          }}
        >
          <FontAwesomeIcon icon={faFolder} size="xl" /> Recent Work
        </Link>
      </div>

      <div className="flex space-x-4 border-[.2px] border-gray-600 p-3 mt-7 rounded-xl">
        <a
          href="https://github.com/liamstamper"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 hover-bounce"
        >
          <FontAwesomeIcon icon={faGithub} size="xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/liamstamper"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 hover-bounce"
        >
          <FontAwesomeIcon icon={faLinkedin} size="xl" />
        </a>
        <a
          href="mailto:liam.stamper@gmail.com"
          className="text-white hover:text-gray-300 hover-bounce"
        >
          <FontAwesomeIcon icon={faEnvelope} size="xl" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
