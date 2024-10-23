import React from "react";
import { motion } from "framer-motion"; // Importing Framer Motion for animations

const Skills = () => {
  // Defining skills for each category
  const frontendSkills = [
    "React",
    "Next.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Framer Motion",
  ];
  const backendSkills = ["Node.js", "Express", "MongoDB", "Firebase"];
  const designSkills = ["Figma", "Adobe XD", "Sketch"];

  // Variants for animation
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      scale: 1.1,
      boxShadow: "0px 8px 24px rgba(0,0,0,0.2)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="bg-white py-20" id="skills">
      <div className="container mx-auto text-center px-4">
        {/* Skills and Tools Header with underline */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 tracking-tight text-center relative">
          Skills & Tools
          <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 block w-24 h-1 bg-gradient-to-r from-[#141E30] to-[#243B55] rounded"></span>
        </h2>

        {/* Frontend, Backend, and Design Skills containers */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Frontend Skills */}
          <motion.div
            className="p-6 bg-whie rounded-lg shadow-md"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h3 className="text-xl font-bold mb-4">Frontend</h3>
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {frontendSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="p-4 bg-gradient-to-r from-[#141E30] to-[#243B55] text-white shadow-md rounded-lg cursor-pointer"
                  variants={itemVariants}
                  whileHover="hover"
                >
                  <h4 className="text-lg font-bold">{skill}</h4>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Backend Skills */}
          <motion.div
            className="p-6 bg-white rounded-lg shadow-md"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h3 className="text-xl font-bold mb-4">Backend</h3>
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {backendSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="p-4 bg-gradient-to-r from-[#141E30] to-[#243B55] text-white shadow-md rounded-lg cursor-pointer"
                  variants={itemVariants}
                  whileHover="hover"
                >
                  <h4 className="text-lg font-bold">{skill}</h4>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Design Tools */}
          <motion.div
            className="p-6 bg-white rounded-lg shadow-md"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h3 className="text-xl font-bold mb-4">Design Tools</h3>
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {designSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="p-4 bg-gradient-to-r from-[#141E30] to-[#243B55] text-white shadow-md rounded-lg cursor-pointer"
                  variants={itemVariants}
                  whileHover="hover"
                >
                  <h4 className="text-lg font-bold">{skill}</h4>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
