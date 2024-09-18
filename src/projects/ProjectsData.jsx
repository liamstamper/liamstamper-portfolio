import GRImage1 from "../assets/gr-stocks/home.png";
import GRImage2 from "../assets/gr-stocks/login.png";
import GRImage3 from "../assets/gr-stocks/side.png";

import DoomImage1 from "../assets/doom-in-ascii/gameplay.png";
import DoomImage2 from "../assets/doom-in-ascii/menu.png";
import DoomImage3 from "../assets/doom-in-ascii/map.png";

import OpenPrairieImage1 from "../assets/open-prairie/home.png";
import OpenPrairieImage2 from "../assets/open-prairie/article.png";
import OpenPrairieImage3 from "../assets/open-prairie/author.png";

import APODImage1 from "../assets/nasa-apod/apod.png";
import APODImage2 from "../assets/nasa-apod/iotd.png";
import APODImage3 from "../assets/nasa-apod/cron.png";

import V2AImage1 from "../assets/video-to-ascii/home.png";

import VectorSpaceImage1 from "../assets/vector-space/speeches.png";

import CradleCodeImage1 from "../assets/cradle-code/home.png";
import CradleCodeImage2 from "../assets/cradle-code/signin.png";
import CradleCodeImage3 from "../assets/cradle-code/register.png";

export const projectsData = [
  {
    id: "cradle-code",
    title: "Cradle Code",
    link: "https://cradlecode.vercel.app/",
    repo: "https://github.com/liamstamper/cradlecode",
    tags: ["React", "Tailwind", "Firebase"],
    date: "September 2024",
    images: [CradleCodeImage1],
    captions: ["The sites homepage"],
    overview:
      "Cradle Code is a learn to code site built in React styled with Tailwind. (In-Progress)",
    sections: [
      {
        title: "Features",
        content:
          "This project features a sleek interface for users to go through easy to follow tutorials, try practice problems and track their progress. It uses firebase for authentication and database.",
      },
    ],
  },
  {
    id: "gr-stocks",
    title: "Gr Stocks",
    link: "https://gr-stocks.vercel.app/",
    repo: "https://github.com/liamstamper/gr-stocks",
    tags: ["React", "Tailwind", "API", "MongoDB"],
    date: "September 2024",
    images: [GRImage1, GRImage2, GRImage3],
    captions: ["A look at the Home Page", "Login Page for the Application"],
    overview:
      "Gr Stocks is a comprehensive Google Finance clone. The application closely mirrors the core functionality of Google Finance, offering a user-friendly interface to view track and compare stocks. ",
    sections: [
      {
        title: "Features",
        content:
          "Leveraging the Alpha Vantage API, Gr Stocks offers real-time stock market data. Users can create customized watchlists and track their cutom investment portfolio. The site features a side bar with intuitive navigation. Users can also view individual stocks with customizable graphs. ",
      },
      {
        title: "Technologies",
        content:
          "This project is built using the React library. I used an API from Alpha Vantage to get real-time stock market data. I used Tailwind CSS to style the application and icons from Google Fonts.",
      },
    ],
    bullets: [
      {
        line: "User Authentication: For user auth the application uses Firebase with Google Auth for authenticity.",
      },
      {
        line: "Database: The project uses a Firebase MongoDb database to store the users watchlist and portfolio`.",
      },
      {
        line: "Styling: The project uses Tailwind CSS with icons and fonts from Google Fonts.",
      },
    ],
  },
  {
    id: "video-to-ascii",
    title: "Video to Ascii",
    repo: "https://github.com/liamstamper/video-to-ascii",
    tags: ["C++", "OpenCV"],
    date: "September 2024",
    images: [V2AImage1],
    captions: [],
    overview:
      "This project captures video from your webcam and converts each frame into ASCII art, displaying it in the terminal in real-time.",
    sections: [
      {},
      {
        title: "Technologies",
        content:
          "I chose to use C++ for this project to push my comfort level a little. I used OpenCV (which I have some expereince with but this was a new challange) for capturing webcam input and processing video frames.ASCII I wrote my own custom algorithm that maps pixel brightness to ASCII characters for visual representation. The animation is then displayed in the terminal for simplicity.",
      },
    ],
    bullets: [],
  },
  {
    id: "doom-in-ascii",
    title: "Doom in Ascii",
    repo: "https://github.com/liamstamper/ascii-doom",
    tags: ["Python", "Ray-Casting", "Game Development"],
    date: "September 2024",
    images: [DoomImage1, DoomImage2, DoomImage3],
    captions: ["Here is some gameplay", "The game menu and map representation"],
    overview:
      "Doom in Ascii is a small game developement project based on the techniques of the classic game Doom. Building this project I exploreed ray-casting and game design techniques.",
    sections: [
      {
        title: "Features",
        content:
          "The game replicates the experience of Doom in a terminal environment, where 3D raycasting is rendered using ASCII characters for walls, enemies, and other elements. The game includes basic enemy AI with randomized movement in four directions, allowing enemies to chase the player within the maze-like levels. Players can navigate using standard WASD controls and interact with enemies and the environment. A HUD displays the player's health and level, while a gun and hand representation are visible on the screen to mimic the Doom gameplay style. Players can toggle a minimap during gameplay, helping them navigate the ASCII-rendered levels. This minimap shows the player’s location and the positions of enemies.",
      },
      {
        title: "Technologies",
        content: "",
      },
      {
        title: "Achievements",
        content:
          "One of the coolest parts of the project was developing the raycasting engine from scratch. It took some trial and error to fine-tune the depth perception and wall shading, but it was worth it when everything started coming together. I added simple enemy behavior where enemies roam the map with randomized movements. Although basic, this feature adds another layer to the gameplay. Iexpanded the project to support multiple map sizes. Each map offers a unique layout keeing the game interesting. Most recently I added a HUD that displays the player's health and current level.",
      },
    ],
    bullets: [
      {
        line: "Python & Curses Library: The game is built entirely in Python, utilizing the curses library to handle terminal-based rendering and controls. The curses library allows the game to manage colors, player input, and the display of ASCII graphics.",
      },
      {
        line: "Raycasting Algorithm: A simple raycasting algorithm is implemented to create a 3D perspective in a 2D ASCII environment. This algorithm calculates the distance from the player to walls and renders them with different shading based on the distance.",
      },
    ],
  },
  {
    id: "nasa-apod-desktop",
    title: "Nasa Apod Desktop",
    repo: "https://github.com/liamstamper/nasa-apod-desktop",
    tags: ["Python", "API", "Automation"],
    date: "June 2024",
    images: [APODImage1, APODImage2, APODImage3],
    captions: ["My desktop", "Another APOD and a look at cron scheduling"],
    overview:
      "Nasa Apod Desktop is a Python script to fetch the latest NASA astronomy picture of the day (APOD) and set it as your mac backround. In the readme I then gave instructions for scheduling the script to run daily with a couple lines of code using cron.",
    sections: [
      {
        title: "Features",
        content:
          "As we've grown, we've seen how Preline has helped companies such as Spotify, Microsoft, Airbnb, Facebook, and Intercom bring their designers closer together to create amazing things. We've also learned that when the culture of sharing is brought in earlier, the better teams adapt and communicate with one another.",
      },
      {
        title: "Technologies",
        content:
          "This project is built solely using Python, hover I did get expererience using a couple new technologies.",
      },
    ],
    bullets: [
      {
        line: "Cron - This allowed me to schedule the script to run and fetch the new APOD.",
      },
      {
        line: "APIs - It was a new experience to work with public APIs in Python. It very motivating to figure it out and get some practice.",
      },
    ],
    closingStatement:
      "Overall this was a fun small project. I thought this was a cool use of Python and a fun public API from Nasa.",
  },
  {
    id: "vector-space-speeches",
    title: "Vector Space Speech Analysis",
    repo: "https://github.com/liamstamper/vector-space-speeches",
    tags: ["Python", "Text Analysis", "Vector Space"],
    date: "September 2024",
    images: [VectorSpaceImage1],
    captions: ["A look the data"],
    overview:
      'In this project I implemented text normilization and vector space analysis on a dataset of presidential speeches to predict who four "mystery speeches" belonged to. ',
    sections: [
      {
        title: "Features",
        content:
          "This project uses efficent text preprocessing and normilization techniques. Then I used term frequency inverse document frequency (TF-IDF) to find the most important words in the dataset and finally using cosine similarity I identified the closed match to the unkown speeches.",
      },
    ],
  },
  {
    id: "open-prairie-magazine",
    title: "Open Prarie Magazine",
    link: "https://open-prairie-magazine.vercel.app/",
    repo: "https://github.com/liamstamper/openprarie-magazine",
    tags: ["React", "Tailwind"],
    date: "September 2024",
    images: [OpenPrairieImage1, OpenPrairieImage2, OpenPrairieImage3],
    captions: [
      "The magazine's homepage",
      "A look at an article and an author description",
    ],
    overview:
      "Open Prairie Magazine is a a litterary magazine built in React styled with Tailwind.",
    sections: [
      {
        title: "Features",
        content:
          "The site enphasizes reusability in its design. It features multiple article and article card conpomponents. It has sections organized by type of writing and intuitive homepage navigation. This project was great expereince in using React functionally. It also help me get more comfortable styling in Tailwind and building more advanced componenets.",
      },
    ],
  },
];
