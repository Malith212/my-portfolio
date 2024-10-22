import React from "react";

const KnowledgeSharing = () => {
  return (
    <section className="bg-white text-[#2D3436] py-20" id="knowledge-sharing">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 tracking-tight text-center">
          Knowledge Sharing
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8">
          {/* Left Side Text */}
          <div className="w-full md:w-1/2 text-left mb-8 md:mb-0">
            <h3 className="text-xl md:text-2xl font-bold mb-4">TrackMaster Project 🚀</h3>
            <p className="text-gray-700 text-base md:text-lg mb-4">
              As first-year undergraduates at the Faculty of IT, University of Moratuwa, we developed a smart camera bag called "TrackMaster" for our hardware project. The problem we addressed is the lack of a camera bag that combines location tracking, a security lock, and a portable dry box facility.
            </p>
            <p className="text-gray-700 text-base md:text-lg mb-4">
              Our solution is an all-in-one camera bag that offers photographers convenience, security, and protection. It includes real-time location tracking, a security lock, and a dry box to ensure camera equipment stays safe and dry.
            </p>
          </div>

          {/* Right Side YouTube Video */}
          <div className="w-full md:w-1/2">
            <div className="relative pb-[56.25%] h-0 overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/3I3kS1folKw?si=lUMxlzt79WnS9uMA"
                title="YouTube video player"
                frameBorder="0"
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeSharing;
