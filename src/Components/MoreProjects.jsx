import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import GrStocksThumbnail from "../assets/thumbnails/gr-stocks.png";
import VideoToAsciiThumbnail from "../assets/thumbnails/videotoascii.png";
import OpenPrairieThumbnail from "../assets/thumbnails/openprairie.png";
import APODThumbnail from "../assets/thumbnails/nasaapod.png";
import VectorSpaceThumbnail from "../assets/thumbnails/vectorspace.png";
import DoomAsciiThumbnail from "../assets/thumbnails/doomascii.png";
import ProjectCard from "./ProjectCard";

const MoreProjects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">
        <HashLink
          className="my-5 inline-flex items-center gap-x-1.5 text-sm hover:underline focus:outline-none focus:underline text-blue-500"
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
        <h1 className="text-4xl font-bold text-white mb-8">More Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            thumbnail={VideoToAsciiThumbnail}
            title="Video to ASCII"
            description="Convert video from your webcam into ASCII art in real-time using C++ and OpenCV."
            link="/projects/video-to-ascii"
          />

          <ProjectCard
            thumbnail={APODThumbnail}
            title="NASA APOD Desktop"
            description="Python script to set NASA's Astronomy Picture of the Day as your desktop wallpaper."
            link="/projects/nasa-apod-desktop"
          />

          <ProjectCard
            thumbnail={VectorSpaceThumbnail}
            title="Vector Space Speech Analysis"
            description="Text normalization and vector space analysis to identify presidential speeches using Python."
            link="/projects/vector-space-speeches"
          />
          <ProjectCard
            thumbnail={DoomAsciiThumbnail}
            title="Doom in Ascii"
            description="A Doom style game in Python using Ascii characters."
            link="/projects/doom-in-ascii"
          />
        </div>
      </div>
    </div>
  );
};

export default MoreProjects;
