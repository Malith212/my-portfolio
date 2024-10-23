import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaBehance, FaGithub } from "react-icons/fa"; // Importing icons from React Icons
import profileImage from "../assets/45443D1A-2C07-4112-ABF3-1D8A8A46C0F9.jpeg"; // Profile image
import cv from "../assets/cv.pdf"; // Assuming your CV is in the assets folder as a PDF

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center bg-[white] px-2 overflow-hidden"
      id="hero"
    >
      {/* Background Abstract Circles */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-[#A3D9FF] rounded-full opacity-40 filter blur-xl -z-10"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-[#FFB3B3] rounded-full opacity-40 filter blur-xl -z-10"></div>

      <motion.div
        className="text-center w-full max-w-lg" // Ensure max width is constrained
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Profile Image Animation */}
        <motion.img
          src={profileImage}
          alt="Malith Weerarathne"
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full mx-auto mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />

        {/* Hero Text Animation */}
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        >
          Malith Weerarathne
        </motion.h1>

        <motion.p
          className="text-gray-600 text-sm sm:text-base md:text-lg px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
        >
          I’m a product designer focused on building seamless design systems.
        </motion.p>

        {/* Button Animation with Hover Effect */}
        <motion.div
          className="mt-6 sm:mt-8 flex justify-center space-x-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
        >
          <motion.a
            href="#projects"
            className="bg-gradient-to-r from-[#141E30] to-[#243B55] text-white py-2 px-6 mb-3 sm:mb-0 rounded text-sm sm:text-base hover:bg-black transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Explore My Work
          </motion.a>
        </motion.div>

        {/* Social Media Links */}
        <div className="mt-6 sm:mt-8 flex justify-center space-x-4">
          <motion.a
            href="https://www.linkedin.com/in/malith-weerarathne"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-[#2D3436] text-xl sm:text-2xl hover:text-blue-600 transition-colors duration-300"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://www.behance.net/malithweerarathne"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-[#2D3436] text-xl sm:text-2xl hover:text-blue-400 transition-colors duration-300"
          >
            <FaBehance />
          </motion.a>
          <motion.a
            href="https://github.com/malithweerarathne"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-[#2D3436] text-xl sm:text-2xl hover:text-blue-400 transition-colors duration-300"
          >
            <FaGithub />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
