import React from "react";
import { motion } from "framer-motion"; // Importing Framer Motion for animations

const Skills = () => {
  const skills = [
    "React", "Next.js", "Figma", "Tailwind CSS", "JavaScript", "HTML5", "CSS3", "Framer Motion"
  ];

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
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    hover: { scale: 1.1, boxShadow: "0px 8px 24px rgba(0,0,0,0.2)", transition: { duration: 0.3 } },
  };

  return (
    <section className="bg-white py-20" id="skills">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-12">Skills & Tools</h2>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="p-4 bg-[#2D3436] text-white shadow-md rounded-lg cursor-pointer transition-transform"
              variants={itemVariants}
              whileHover="hover"
            >
              <h3 className="text-lg font-bold">{skill}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
