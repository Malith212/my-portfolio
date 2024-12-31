import React, { useState } from "react";
import Select from "react-select";
import project1Image from "../assets/Beatflow.png";
import project2Image from "../assets/Burger app.png";
import baristaAppImage from "../assets/barista.jpeg";
import portfolioImage from "../assets/portfolio .png";
import vehiclehub from "../assets/Vehicle Hub.png";

const projectsData = {
  "UX Case Studies": [
    {
      image: baristaAppImage,
      title: "Barista Mobile App UX Case Study",
      description:
        "Introducing the Barista Mobile App design – an intuitive app concept aimed at enhancing the customer experience for Barista Coffee Lanka. This project focuses on simplifying online orders, secure payments, and personalized user engagement, all while reflecting the warmth of Barista's brand.",
      link: "https://www.behance.net/gallery/214266953/Barista-Mobile-App-Concept-Design-",
    },
    {
      image: project1Image,
      title: "BeatFlow Music App UX Case Study",
      description:
        "As a passionate UX designer, I am excited to share the transformation journey of BeatFlow, a mobile application designed to deliver a seamless and enjoyable music discovery and listening experience. With a focus on personalized content, BeatFlow aims to differentiate itself in the competitive music streaming industry.",
      link: "https://www.behance.net/gallery/198874923/BEATFLOW",
    },
    {
      image: project2Image,
      title: "A Food Delivery App UX Case Study",
      description:
        "As an avid foodie and a dedicated UX designer, I am thrilled to share my latest project - the redesign of Gourmet Grub, a food delivery app that promises quick delivery and a mouth-watering selection of dishes. With the aim to entice and engage users at first glance, my goal was to deliver a visual and interactive feast.",
      link: "https://www.behance.net/gallery/198840951/Burger-App",
    },
  ],
  "Frontend Projects": [
    {
      image: portfolioImage,
      title: "My Portfolio Site",
      description:
        "After weeks of development, I'm excited to share my new portfolio site! Built with React.js, styled with Tailwind CSS, designed in Figma, and powered by EmailJS for easy contact. 🌐",
      link: "https://malitweerarathne.netlify.app/",
    },
  ],
  "Full Stack Projects": [
    {
      image: vehiclehub,
      title: "The Vehicle Hub Project 🚗",
      description:
        "A comprehensive platform that automates vehicle rental management, streamlining reservations, billing, and reporting. Enhanced with an intuitive UI, it improves customer experience and operational efficiency.\n\n**Tech Stack:** React, .NET, Tailwind CSS, MsSQL\n\n**My Role:**\n- Created reports (vehicle utilization, feedback, revenue).\n- Integrated Stripe for secure payments.\n- Developed data-driven admin dashboard insights.",
      link: "https://github.com/NavodhSFernando/vehicle-hub",
    },
  ],
  "Other Projects": [],
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("UX Case Studies");

  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption.value);
  };

  const categoryOptions = Object.keys(projectsData).map((category) => ({
    value: category,
    label: category,
  }));

  const selectedProjects = projectsData[selectedCategory] || [];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "#fff",
      borderColor: "#243B55",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      padding: "4px",
      ":hover": {
        borderColor: "#141E30",
      },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#f7f7f7",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#141E30" : "#fff",
      color: state.isFocused ? "#fff" : "#243B55",
      padding: "10px",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#2D3436",
    }),
  };

  return (
    <section
      className="bg-gradient-to-r from-[#141E30] to-[#243B55] text-white py-10 md:py-20"
      id="projects"
    >
      <div className="container mx-auto px-4 md:px-0">
        <h2 className="text-2xl md:text-4xl font-extrabold mb-8 text-left">
          My Work
        </h2>

        {/* React Select for category filtering */}
        <div className="mb-6 text-left">
          <Select
            options={categoryOptions}
            defaultValue={categoryOptions[0]}
            onChange={handleCategoryChange}
            styles={customStyles}
            placeholder="Select a Category"
            className="w-full md:w-1/3"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {selectedProjects.length > 0 ? (
            selectedProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white shadow-xl rounded-lg overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-105"
              >
                <div className="relative h-64 md:h-80">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 md:p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-[#2D3436] mb-2 md:mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 text-left text-sm md:text-base mb-3 md:mb-4">
                      {project.description}
                    </p>
                  </div>
                  <a
                    href={project.link}
                    className="inline-block bg-gradient-to-r from-[#141E30] to-[#243B55] text-white py-2 px-4 rounded hover:bg-[#2D3436] transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-left">
              No projects available in this category.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
