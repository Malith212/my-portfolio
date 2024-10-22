import React from "react";

const Education = () => {
  const educationDetails = [
    {
      year: "2022 - Present",
      degree: "B.Sc. (Hons) in Information Technology and Management",
      institution: "Faculty of Information Technology, University of Moratuwa",
      details: "CGPA: 3.60 (up to L2S1)",
    },
    {
      year: "2021 - 2022",
      degree: "CMJD Professional | Comprehensive Master Java Developer",
      institution: "IJSE - Institute of Software Engineering",
    },
    {
      year: "2018 - 2020",
      degree: "G.C.E. Advanced Level Examination",
      institution: "Sri Sumangala College, Panadura",
      details: "3A’s | Z-Score 1.8086",
    },
    {
      year: "2018 - 2021",
      degree: "AAT Passed Finalist",
      institution: "",
    },
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationDetails.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
            >
              <p className="text-lg font-semibold text-gray-600 mb-2">
                {item.year}
              </p>
              <h3 className="text-xl font-bold mb-1">{item.degree}</h3>
              <p className="text-sm text-gray-500 mb-1">{item.institution}</p>
              {item.details && (
                <p className="text-sm text-gray-400">{item.details}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
