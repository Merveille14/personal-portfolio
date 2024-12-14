import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img5.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { FaReact, FaVuejs } from "react-icons/fa"; 
import { SiAdobe, SiTailwindcss } from "react-icons/si";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const [activeTab, setActiveTab] = useState("first");

  const projects = [
    {
      title: "Elegant Style Deals",
      description: (
        <>
          Trade-in offers with super value deals on all products.
          <br />
          <FaReact className="inline-block text-blue-500 text-xl" title="React" />
        </>
      ),
      imgUrl: projImg2,
    },
    {
      title: "Event Express",
      description: (
        <>
          Join unforgettable events like Gala, Concerts, and more.
          <br />
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center space-x-2">
              <FaVuejs className="text-green-500 text-xl" title="Vue.js" />
              <span>/</span>
              <SiTailwindcss className="text-teal-400 text-xl" title="Tailwind CSS" />
            </div>
          </div>

        </>
      ),
      imgUrl: projImg1,
    },
    {
      title: "Miss Luna Beauty Training",
      description: (
        <>
          Learn makeup, manicure, and wig styling at affordable prices.
          <br />
          <SiAdobe  className="inline-block text-red-600 text-xl" title="Photoshop" />
        </>
      ),
      imgUrl: projImg3,
    },
  ];

  const fourthProject = {
    title: "Digital Empowerment",
    description: (
      <>
        As the organizer of the Women in Computer Science at IFRI (WICSI) community, my aim is to promote the development of girls in digital technology by encouraging their inclusion, training, and success in this field.
        <br />
        <span className="font-bold text-yellow-500" title="Leadership">Leadership</span>
      </>
    ),
    imgUrl: projImg4,
  };

  return (
    <section className="project bg-gray-900 text-white py-20 relative" id="projects">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <p className="text-gray-400">
            Here are some of the projects I've worked on, showcasing a blend of creativity, technical expertise, and a focus on delivering impactful digital solutions.
          </p>
        </div>

        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setActiveTab("first")}
            className={`px-6 py-2 rounded-md ${activeTab === "first" ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-200 hover:bg-gray-600"}`}
          >
            Tab 1
          </button>
          <button
            onClick={() => setActiveTab("second")}
            className={`px-6 py-2 rounded-md ${activeTab === "second" ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-200 hover:bg-gray-600"}`}
          >
            Tab 2
          </button>
          <button
            onClick={() => setActiveTab("third")}
            className={`px-6 py-2 rounded-md ${activeTab === "third" ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-200 hover:bg-gray-600"}`}
          >
            Tab 3
          </button>
        </div>

        <div className="relative">
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                {activeTab === "first" && (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                      {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                    </div>
                    <div className="mt-12 flex justify-center">
                      <div className="w-full sm:w-3/4 md:w-1/2 lg:w-2/5 bg-gray-800 p-8 rounded-lg shadow-lg">
                        <ProjectCard {...fourthProject} />
                      </div>
                    </div>
                  </>
                )}
                {activeTab === "second" && (
                  <div className="p-6 bg-gray-800 rounded-md">
                    <p>
                      Currently, I'm working on the development of Hervens' scalable e-commerce platform, with advanced analytics and seamless integration with third-party services.
                    </p>
                  </div>
                )}
                {activeTab === "third" && (
                  <div className="p-6 bg-gray-800 rounded-md">
                    <p>
                      The future project includes the integration of artificial intelligence for predictive analysis and the exploration of optimized solutions for fertilizer management, whether natural or chemical. The aim is to improve agricultural productivity while promoting respect for the environment and the preservation of a sustainable natural environment.
                    </p>
                    <a
                      href="https://www.figma.com/proto/VxZqCSgZuMj1ldkGXXNkPb?node-id=0:1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 px-6 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600"
                    >
                      View Mock-Up
                    </a>
                  </div>
                )}
              </div>
            )}
          </TrackVisibility>
        </div>
      </div>
      <img
        className="absolute right-0 bottom-0 w-1/3 opacity-50"
        src={colorSharp2}
        alt="Colorful abstract shape for visual design"
      />
    </section>
  );
};
