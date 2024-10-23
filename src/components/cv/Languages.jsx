import React from 'react';

const Languages = () => {
  const languagesData = [
    { id: 1, language: "English", proficiency: "Proficient" },
    { id: 2, language: "Sinhala", proficiency: "Native" },
    { id: 3, language: "French", proficiency: "Average" },
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Languages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {languagesData.map((lang) => (
            <div
              key={lang.id}
              className="bg-gradient-to-r from-[#141E30] to-[#243B55] text-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-lg font-bold">{lang.language}</h3>
              <p className="text-white text-esm font-thin">{lang.proficiency}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
