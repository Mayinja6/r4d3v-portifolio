import { useState } from "react";
import {
  facebookLink,
  twitterLink,
  instagramLink,
  linkedinLink,
} from "../data/About";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const socialLinks = [
    {
      link: twitterLink,
      icon: <i class="fa-brands fa-twitter"></i>,
    },
    {
      link: facebookLink,
      icon: <i class="fa-brands fa-facebook"></i>,
    },
    {
      link: instagramLink,
      icon: <i class="fa-brands fa-instagram"></i>,
    },
    {
      link: linkedinLink,
      icon: <i class="fa-brands fa-linkedin"></i>,
    },
  ];

  return (
    <header className="fixed w-full flex justify-center py-4 px-0 bg-gray-300 shadow-md z-[997]">
      <div className="container flex items-center justify-between mx-2">
        <h1 className="order-first text-2xl m-0 p-0 leading-none font-normal uppercase tracking-widest">
          <a href="/">R4D3V</a>
        </h1>

        <nav className="order-last md:order-2 navigation">
          <div className="DESKTOP_MENU p-0 hidden md:flex items-center space-x-1">
            <ul className="list-none m-0 p-0 flex items-center ">
              <li className="relative py-3 pr-0 pl-7 opacity-70 transition-all hover:opacity-100 ">
                <a href="/">Home</a>
              </li>
              <li className="relative py-3 pr-0 pl-7 opacity-70 transition-all hover:opacity-100 ">
                <a href="/about">About</a>
              </li>
              <li className="relative py-3 pr-0 pl-7 opacity-70 transition-all hover:opacity-100 ">
                <a href="/resume">Resume</a>
              </li>
              <li className="relative py-3 pr-0 pl-7 opacity-70 transition-all hover:opacity-100 ">
                <a href="/services">Services</a>
              </li>
              <li className="relative py-3 pr-0 pl-7 opacity-70 transition-all hover:opacity-100 ">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="MOBILE_MENU  flex md:hidden">
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="flex flex-col items-center justify-between min-h-[250px]">
                <li className="border-b border-[#34b7a7]  my-6 uppercase">
                  <a href="/about">Home</a>
                </li>
                <li className="border-b border-[#34b7a7]  my-6 uppercase">
                  <a href="/about">About</a>
                </li>
                <li className="border-b border-[#34b7a7]  my-6 uppercase">
                  <a href="/portfolio">Resume</a>
                </li>
                <li className="border-b border-[#34b7a7]  my-6 uppercase">
                  <a href="/contact">Services</a>
                </li>
                <li className="border-b border-[#34b7a7]  my-6 uppercase">
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="order-2 md:order-last">
          {socialLinks.map((link, index) => {
            return (
              <a
                rel="noreferrer"
                target="_blank"
                key={index}
                href={link.link}
                className="inline-block pl-1 opacity-70 transition-all pr-2 hover:text-th-primary"
              >
                {link.icon}
              </a>
            );
          })}
        </div>
      </div>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        margin: auto auto;
        left: 0;
        background: #e9e8e6;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </header>
  );
};

export default Header;
