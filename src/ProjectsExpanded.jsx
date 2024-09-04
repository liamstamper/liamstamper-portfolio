import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { projectsData } from "./projects/ProjectsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const ProjectsExpanded = () => {
  const { id } = useParams();
  const location = useLocation();
  const project = projectsData.find((project) => project.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="bg-black transition-all duration-300 lg:hs-overlay-layout-open:ps-[260px] min-h-screen">
      <main id="content">
        <div className="w-full lg:mx-auto lg:w-3/4">
          <div className="py-8 lg:px-8">
            <div className="space-y-5 lg:space-y-8">
              {location.state?.fromRecentProjects ? (
                <HashLink
                  className="inline-flex items-center gap-x-1.5 text-sm hover:underline focus:outline-none focus:underline text-blue-500"
                  to="/#"
                >
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                  Back
                </HashLink>
              ) : (
                <HashLink
                  className="inline-flex items-center gap-x-1.5 text-sm hover:underline focus:outline-none focus:underline text-blue-500"
                  to="/#projects"
                >
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                  Back to Projects
                </HashLink>
              )}
              <h2 className="flex justify-between items-center text-white">
                <div className="font-bold text-3xl lg:text-5xl">
                  {project.title}
                </div>
                <div className="flex gap-3">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      Visit Site
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
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    >
                      View Repo
                    </a>
                  )}
                </div>
              </h2>

              <div className="flex flex-wrap gap-x-3 gap-y-3 items-center">
                <div className="flex flex-wrap items-center gap-x-3">
                  {project.tags.map((tag, index) => (
                    <div
                      key={index}
                      className="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-700 text-white"
                    >
                      {tag}
                    </div>
                  ))}
                  <p className="text-xs sm:text-sm text-neutral-200">
                    {project.date}
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-white">Overview</h3>
              <p className="text-lg text-neutral-200">{project.overview}</p>

              {project.images.length > 0 && (
                <figure>
                  <img
                    src={project.images[0]}
                    className="w-full h-172 bg-gray-300 rounded-xl object-cover"
                    alt="Project screenshot"
                  />
                  <figcaption className="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500">
                    {project.captions[0]}
                  </figcaption>
                </figure>
              )}

              {project.sections.slice(0, 2).map((section, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="text-2xl font-semibold text-white">
                    {section.title}
                  </h3>
                  <p className="text-lg text-neutral-200">{section.content}</p>
                </div>
              ))}
              <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-neutral-200">
                {project.bullets.map((bullet, index) => (
                  <li key={index} className="ps-2">
                    {bullet.quote}
                  </li>
                ))}
              </ul>
              <figure>
                <div className="grid lg:grid-cols-2 gap-3">
                  {project.images.length > 1 && (
                    <img
                      src={project.images[1]}
                      className="w-full h-96 bg-gray-300 rounded-xl object-cover"
                      alt="Project screenshot"
                    />
                  )}
                  {project.images.length > 2 && (
                    <img
                      src={project.images[2]}
                      className="w-full h-96 bg-gray-300 rounded-xl object-cover"
                      alt="Project screenshot"
                    />
                  )}
                </div>
                <figcaption className="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500">
                  {project.captions[1]}
                </figcaption>
              </figure>

              {project.sections.length > 2 && (
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-white">
                    {project.sections[2].title}
                  </h3>
                  <p className="text-lg text-neutral-200">
                    {project.sections[2].content}
                  </p>
                </div>
              )}

              <p className="text-lg text-neutral-200">
                {project.closingStatement}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectsExpanded;
