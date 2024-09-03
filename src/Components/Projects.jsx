import GrStocksThumbnail from "../assets/gr-stocks-sidebar.png";
import VideoToAsciiThumbnail from "../assets/videotoascii.png";
import OpenPrairieThumbnail from "../assets/openprairie.png";
import APODThumbnail from "../assets/nasaapod.png";
import VectorSpaceThumbnail from "../assets/vectorspace.png";
import DoomAsciiThumbnail from "../assets/doomascii.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-white mb-8">Selected Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="space-y-4">
          <div className="relative group h-[325px]">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={GrStocksThumbnail}
              alt="Gr Stocks Image"
            />
            <div className="absolute inset-0 bg-slate-900 bg-opacity-50 opacity-100 transition-opacity duration-300 flex flex-col items-start justify-end p-4">
              <div className="text-white text-left transition-transform duration-300 group-hover:translate-y-[-10px]">
                <h2 className="text-lg font-bold">Gr Stocks</h2>
                <p className="text-sm">
                  A Google Finance clone built in React.{" "}
                </p>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href="#"
                  className="inline-flex items-center text-sm text-white px-3 py-1.5 border border-transparent rounded-lg transition-all duration-300 hover:border-white group-hover:bg-opacity-25"
                >
                  Learn more &rarr;
                </a>
              </div>
            </div>
          </div>
          <div className="relative group h-[524px]">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={VideoToAsciiThumbnail}
              alt="VideoToAscii Image"
            />
            <div className="absolute inset-0 bg-slate-900 bg-opacity-50 opacity-100 transition-opacity duration-300 flex flex-col items-start justify-end p-4">
              <div className="text-white text-left transition-transform duration-300 group-hover:translate-y-[-10px]">
                <h2 className="text-lg font-bold">Video To Ascii</h2>
                <p className="text-sm">Webcam to ASCII built in C++</p>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href="#"
                  className="inline-flex items-center text-sm text-white px-3 py-1.5 border border-transparent rounded-lg transition-all duration-300 hover:border-white group-hover:bg-opacity-25"
                >
                  Learn more &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="relative group h-[490px]">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={DoomAsciiThumbnail}
              alt="Gallery Masonry Image"
            />
            <div className="absolute inset-0 bg-slate-900 bg-opacity-50 opacity-100 transition-opacity duration-300 flex flex-col items-start justify-end p-4">
              <div className="text-white text-left transition-transform duration-300 group-hover:translate-y-[-10px]">
                <h2 className="text-lg font-bold">Doom In Ascii</h2>
                <p className="text-sm">Brief description of the project.</p>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href="#"
                  className="inline-flex items-center text-sm text-white px-3 py-1.5 border border-transparent rounded-lg transition-all duration-300 hover:border-white group-hover:bg-opacity-25"
                >
                  Learn more &rarr;
                </a>
              </div>
            </div>
          </div>
          <div className="relative group h-[358px]">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={VectorSpaceThumbnail}
              alt="Gallery Masonry Image"
            />
            <div className="absolute inset-0 bg-slate-900 bg-opacity-50 opacity-100 transition-opacity duration-300 flex flex-col items-start justify-end p-4">
              <div className="text-white text-left transition-transform duration-300 group-hover:translate-y-[-10px]">
                <h2 className="text-lg font-bold">Vectors Space Speeches</h2>
                <p className="text-sm">
                  Presidential speech similarity analysis with a vector space
                  model built in Python
                </p>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href="#"
                  className="inline-flex items-center text-sm text-white px-3 py-1.5 border border-transparent rounded-lg transition-all duration-300 hover:border-white group-hover:bg-opacity-25"
                >
                  Learn more &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="relative group h-h-[260px]">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={OpenPrairieThumbnail}
              alt="Open Pairie Magazine Image"
            />
            <div className="absolute inset-0 bg-slate-900 bg-opacity-50 opacity-100 transition-opacity duration-300 flex flex-col items-start justify-end p-4">
              <div className="text-white text-left transition-transform duration-300 group-hover:translate-y-[-10px]">
                <h2 className="text-lg font-bold">Open Prairie Magazine</h2>
                <p className="text-sm">Brief description of the project.</p>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href="#"
                  className="inline-flex items-center text-sm text-white px-3 py-1.5 border border-transparent rounded-lg transition-all duration-300 hover:border-white group-hover:bg-opacity-25"
                >
                  Learn more &rarr;
                </a>
              </div>
            </div>
          </div>
          <div className="relative group h-[563px]">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={APODThumbnail}
              alt="Gallery Masonry Image"
            />
            <div className="absolute inset-0 bg-slate-900 bg-opacity-50 opacity-100 transition-opacity duration-300 flex flex-col items-start justify-end p-4">
              <div className="text-white text-left transition-transform duration-300 group-hover:translate-y-[-10px]">
                <h2 className="text-lg font-bold">Nasa Apod Desktop</h2>
                <p className="text-sm">
                  Python to set NASA's Astronomy Picture of the Day (APOD) as
                  your wallpaper
                </p>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href="#"
                  className="inline-flex items-center text-sm text-white px-3 py-1.5 border border-transparent rounded-lg transition-all duration-300 hover:border-white group-hover:bg-opacity-25"
                >
                  Learn more &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
