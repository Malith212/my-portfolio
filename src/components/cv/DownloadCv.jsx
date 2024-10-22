import React from 'react';

const DownloadCv = () => {
  return (
    <section className="py-10 text-right">
      <h2 className="text-2xl font-bold mb-4">Download My CV</h2>
      <a
        href="/path-to-your-cv.pdf"
        download
        className="bg-gradient-to-r from-[#141E30] to-[#243B55] text-white py-2 px-4 rounded hover:bg-[#2D3436] transition-colors duration-300"
      >
        Download CV
      </a>
    </section>
  );
};

export default DownloadCv;
