import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";

import GrStocksThumbnail from "../assets/thumbnails/gr-stocks.png";
import OpenPrairieThumbnail from "../assets/thumbnails/openprairie.png";
import CradleCode from "../assets/thumbnails/cradlecode.png";
const Projects = () => {
  return (
    <div
      id="projects"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 "
    >
      <h1 className="text-4xl font-bold text-white mb-8">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          thumbnail={GrStocksThumbnail}
          title="Gr Stocks"
          description="A Google Finance clone in React and Tailwind. Uses firebase for authentication."
          link="projects/gr-stocks"
        />

        <ProjectCard
          thumbnail={OpenPrairieThumbnail}
          title="Open Prairie Magazine"
          description="React tailwind magazine build."
          link="/projects/open-prairie-magazine"
        />

        <ProjectCard
          thumbnail={CradleCode}
          title="Cradle Code"
          description="Learn to code application build in react. Uses firebase authentication and database."
          link="/projects/cradle-code"
        />
      </div>
      <Link
        to="/moreprojects"
        className="text-white text-sm mt-8 flex underline justify-center"
      >
        View more &rarr;
      </Link>
    </div>
  );
};

export default Projects;
