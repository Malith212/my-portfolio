import React from "react";
import CV from "../../assets/cv.pdf";

const DownloadCv = () => {
  return (
    <section className="py-10 text-right mt-20">
      <a
        href={CV}
        download="Malith_Weerarathne_CV.pdf" 
        className="inline-block bg-gradient-to-r from-[#141E30] to-[#243B55] text-white py-3 px-6 rounded-lg shadow-lg hover:from-[#0F2027] hover:to-[#2C5364] transition-all duration-300 ease-in-out transform hover:-translate-y-1"
      >
        Download CV
      </a>
    </section>
  );
};

export default DownloadCv;
