import React, { useState, useEffect } from "react";
import Logo from "./assets/logo.png";

const Header = () => {
  const [activeButton, setActiveButton] = useState("About");
  const buttons = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
  ];

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setActiveButton("About");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img className="block rounded-full h-10 w-auto" src={Logo} />
            </div>
          </div>
          <div className="flex space-x-4">
            {buttons.map((button, index) => (
              <a
                key={index}
                href={button.href}
                onClick={() => setActiveButton(button.label)}
                className={`px-3 py-2 uppercase text-xs rounded-full ${
                  activeButton === button.label
                    ? "bg-white text-black"
                    : "border border-white text-white"
                }`}
              >
                {button.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
