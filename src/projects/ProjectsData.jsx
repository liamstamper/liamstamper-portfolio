import GRImage1 from "../assets/gr-stocks/gr-stocks-home.png";
import GRImage2 from "../assets/gr-stocks/gr-stocks-login.png";
import GRImage3 from "../assets/gr-stocks/gr-stocks-side.png";

import DoomImage1 from "../assets/doom-in-ascii/gameplay.png";
import DoomImage2 from "../assets/doom-in-ascii/menu.png";
import DoomImage3 from "../assets/doom-in-ascii/map.png";

export const projectsData = [
  {
    id: "gr-stocks",
    title: "Gr Stocks",
    link: "https://gr-stocks.vercel.app/",
    repo: "https://github.com/liamstamper/gr-stocks",
    tags: ["React", "Tailwind", "API"],
    date: "September 2024",
    images: [GRImage1, GRImage2, GRImage3],
    captions: ["A look at the Home Page", "Login Page for the Application"],
    overview:
      "Gr Stocks is a comprehensive Google Finance clone that provides stock market data, financial news, and in-depth analytics. The application closely mirrors the core functionality of Google Finance, offering a streamlined and user-friendly interface that simplifies the process of tracking stock performance. ",
    sections: [
      {
        title: "Features",
        content:
          "As we've grown, we've seen how Preline has helped companies such as Spotify, Microsoft, Airbnb, Facebook, and Intercom bring their designers closer together to create amazing things. We've also learned that when the culture of sharing is brought in earlier, the better teams adapt and communicate with one another.",
      },
      {
        title: "Technologies",
        content:
          "This project is built using the React library. I used an API from Alpha Vantage to get real-time stock market data. I used Tailwind CSS to style the application and icons from Google Fonts.",
      },
      {
        title: "Achievements",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
    ],
    bullets: [
      {
        line: " allows us to collaborate in real time and is a really great way for leadership on the team to stay up-to-date with what everybody is working on.",
        author: "Stewarand Design",
      },
      {
        line: "a new way of sharing. It's a persistent way for everyone to see and absorb each other's work.",
        author: "David ScEventbrite",
      },
    ],
    closingStatement:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: "video-to-ascii",
    title: "Video to Ascii",
    link: "https://gr-stocks.vercel.app/",
    repo: "https://github.com/liamstamper/gr-stocks",
    tags: ["React", "Google Finance", "API"],
    date: "September 2024",
    images: [GRImage1, GRImage2, GRImage3],
    captions: ["A look at the Home Page", "Login Page for the Application"],
    overview:
      "Gr Stocks is a comprehensive Google Finance clone that provides stock market data, financial news, and in-depth analytics. The application closely mirrors the core functionality of Google Finance, offering a streamlined and user-friendly interface that simplifies the process of tracking stock performance. ",
    sections: [
      {
        title: "Features",
        content:
          "As we've grown, we've seen how Preline has helped companies such as Spotify, Microsoft, Airbnb, Facebook, and Intercom bring their designers closer together to create amazing things. We've also learned that when the culture of sharing is brought in earlier, the better teams adapt and communicate with one another.",
      },
      {
        title: "Technologies",
        content:
          "This project is built using the React library. I used an API from Alpha Vantage to get real-time stock market data. I used Tailwind CSS to style the application and icons from Google Fonts.",
      },
      {
        title: "Achievements",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
    ],
    bullets: [
      {
        line: " allows us to collaborate in real time and is a really great way for leadership on the team to stay up-to-date with what everybody is working on.",
        author: "Stewarand Design",
      },
      {
        line: "a new way of sharing. It's a persistent way for everyone to see and absorb each other's work.",
        author: "David ScEventbrite",
      },
    ],
    closingStatement:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
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
    link: "https://gr-stocks.vercel.app/",
    repo: "https://github.com/liamstamper/gr-stocks",
    tags: ["Python", "API", "Automation"],
    date: "September 2024",
    images: [GRImage1, GRImage2, GRImage3],
    captions: ["Here is some gameplay", "The game menu and map representation"],
    overview:
      "Nasa Apod Desktop is a Python script to fetch the latest NASA astronomy picture of the day (APOD) and set it as your mac backround. In the readme I included instructions for scheduling the script to run daily with cron.",
    sections: [
      {
        title: "Features",
        content:
          "As we've grown, we've seen how Preline has helped companies such as Spotify, Microsoft, Airbnb, Facebook, and Intercom bring their designers closer together to create amazing things. We've also learned that when the culture of sharing is brought in earlier, the better teams adapt and communicate with one another.",
      },
      {
        title: "Technologies",
        content:
          "This project is built using the React library. I used an API from Alpha Vantage to get real-time stock market data. I used Tailwind CSS to style the application and icons from Google Fonts.",
      },
      {
        title: "Achievements",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
    ],
    bullets: [
      {
        line: " allows us to collaborate in real time and is a really great way for leadership on the team to stay up-to-date with what everybody is working on.",
        author: "Stewarand Design",
      },
      {
        line: "a new way of sharing. It's a persistent way for everyone to see and absorb each other's work.",
        author: "David ScEventbrite",
      },
    ],
    closingStatement:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: "vector-space-speeches",
    title: "Vector Space Speech Analysis",
    link: "https://gr-stocks.vercel.app/",
    repo: "https://github.com/liamstamper/gr-stocks",
    tags: ["Python", "Vector Space"],
    date: "September 2024",
    images: [GRImage1, GRImage2, GRImage3],
    captions: ["Here is some gameplay", "The game menu and map representation"],
    overview:
      "Gr Stocks is a comprehensive Google Finance clone that provides stock market data, financial news, and in-depth analytics. The application closely mirrors the core functionality of Google Finance, offering a streamlined and user-friendly interface that simplifies the process of tracking stock performance. ",
    sections: [
      {
        title: "Features",
        content:
          "As we've grown, we've seen how Preline has helped companies such as Spotify, Microsoft, Airbnb, Facebook, and Intercom bring their designers closer together to create amazing things. We've also learned that when the culture of sharing is brought in earlier, the better teams adapt and communicate with one another.",
      },
      {
        title: "Technologies",
        content:
          "This project is built using the React library. I used an API from Alpha Vantage to get real-time stock market data. I used Tailwind CSS to style the application and icons from Google Fonts.",
      },
      {
        title: "Achievements",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
    ],
    bullets: [
      {
        line: " allows us to collaborate in real time and is a really great way for leadership on the team to stay up-to-date with what everybody is working on.",
        author: "Stewarand Design",
      },
      {
        line: "a new way of sharing. It's a persistent way for everyone to see and absorb each other's work.",
        author: "David ScEventbrite",
      },
    ],
    closingStatement:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: "open-prairie-magazine",
    title: "Open Prarie Magazine",
    link: "https://gr-stocks.vercel.app/",
    repo: "https://github.com/liamstamper/gr-stocks",
    tags: ["React", "Tailwind"],
    date: "September 2024",
    images: [GRImage1, GRImage2, GRImage3],
    captions: ["Here is some gameplay", "The game menu and map representation"],
    overview:
      "Open Prairie Magazine is a a litterary magazine built in React. It is styled with Tailwind and data ",
    sections: [
      {
        title: "Features",
        content:
          "As we've grown, we've seen how Preline has helped companies such as Spotify, Microsoft, Airbnb, Facebook, and Intercom bring their designers closer together to create amazing things. We've also learned that when the culture of sharing is brought in earlier, the better teams adapt and communicate with one another.",
      },
      {
        title: "Technologies",
        content:
          "This project is built using the React library. I used an API from Alpha Vantage to get real-time stock market data. I used Tailwind CSS to style the application and icons from Google Fonts.",
      },
      {
        title: "Achievements",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
    ],
    bullets: [
      {
        line: " allows us to collaborate in real time and is a really great way for leadership on the team to stay up-to-date with what everybody is working on.",
        author: "Stewarand Design",
      },
      {
        line: "a new way of sharing. It's a persistent way for everyone to see and absorb each other's work.",
        author: "David ScEventbrite",
      },
    ],
    closingStatement:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];
