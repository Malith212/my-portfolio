import React from 'react';

const Extracurricular = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Extracurricular Activities</h2>
        <div className="grid grid-cols-1 gap-6">

        <div className="bg-gradient-to-r from-[#141E30] to-[#243B55] text-white p-4 border rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-white">Main Batch Representative of ITM Degree, Faculty of Information Technology, University of Moratuwa</h3>
            <p className="text-white">2024-2025</p>
          </div>
          
          {/* FIT Moments */}
          <div className="bg-gradient-to-r from-[#141E30] to-[#243B55] text-white p-4 border rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-white">FIT Moments</h3>
            <p className="text-white">2022 - Present</p>
            <ul className="list-disc pl-5 text-sm text-white mt-2">
              <li>Assistant Lead of the Photography and Videography pillar (2023 - 2024)</li>
              <li>Photography and Videography Pillar member (2022 - 2023)</li>
            </ul>
          </div>
          
          {/* IEEE Student Branch */}
          <div className=" bg-gradient-to-r from-[#141E30] to-[#243B55] text-white p-4 border rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-white">IEEE Student Branch University of Moratuwa</h3>
            <p className="text-white">2022 - 2023</p>
            <ul className="list-disc pl-5 text-sm text-white mt-2">
              <li>Assistant Lead of the Media Committee (Jun 2022 - Jun 2023)</li>
            </ul>
          </div>
          
          {/* ITM Degree Batch Representative */}


        </div>
      </div>
    </section>
  );
};

export default Extracurricular;
