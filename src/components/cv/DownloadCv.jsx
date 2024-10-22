import React from 'react';

const DownloadCv = () => {
  return (
    <section className="py-10 text-right mt-20"> {/* Add mt-20 or similar value */}
      <a
        href="/path-to-your-cv.pdf" // Make sure to replace with the correct path
        download
        className="bg-gradient-to-r from-[#141E30] to-[#243B55] text-white py-2 px-4 rounded hover:bg-[#2D3436] transition-colors duration-300"
      >
        Download CV
      </a>
    </section>
  );
};

export default DownloadCv;
