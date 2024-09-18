import { Link } from "react-router-dom";

const ProjectCard = ({ thumbnail, title, description, link }) => {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden p-6 flex flex-col justify-between h-full">
      <div>
        <img
          className="w-full h-64 object-cover rounded-lg"
          src={thumbnail}
          alt={`${title} Thumbnail`}
        />
        <div className="pt-4">
          <h2 className="font-bold text-white text-xl mb-1">{title}</h2>
          <p className="text-gray-400 text-sm mb-4">{description}</p>
        </div>
      </div>
      <div className="mt-auto">
        <Link
          to={link}
          className="text-blue-500 font-medium text-sm hover:underline"
        >
          Learn more &rarr;
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
