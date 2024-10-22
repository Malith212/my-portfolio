import React from "react";
import Navbar from "../components/Navbar";
import DownloadCV from "../components/cv/DownloadCv";
import Education from "../components/cv/Education";
import Certificates from "../components/cv/Certificates";
import Languages from "../components/cv/Languages";
import Achievements from "../components/cv/Achievements";
import ExtracurricularActivities from "../components/cv/ Extracurricular";
import Footer from "../components/Footer";

function Cv() {
    return (
      <div className="font-sans">
        <Navbar />
        <section className="container mx-auto py-10 px-4">
          <DownloadCV />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Education />
            <Certificates />
            <ExtracurricularActivities />
            <Languages />
            <Achievements />
          </div>
        </section>
        <Footer />
      </div>
    );
  }
  
  export default Cv;
