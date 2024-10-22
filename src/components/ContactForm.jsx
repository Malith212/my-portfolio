import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_qlpppxc", // Your Service ID
        "template_szcwx7n", // Your Template ID
        formData,
        "T4xt20ZdK91D2REf2" // Your User ID (Public Key)
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        alert("Your message has been sent successfully!"); // Success alert
        setFormData({ name: "", email: "", message: "" }); // Clear form
      })
      .catch((err) => {
        console.error("Failed to send email. Error:", err);
        alert("Failed to send your message. Please try again later."); // Error alert
      });
  };

  return (
    <section
      className="bg-gradient-to-r from-[#141E30] to-[#243B55] py-20"
      id="contact-form"
    >
      <div className="container mx-auto px-4">
        {/* Flex container for large screens */}
        <div className="md:flex md:items-center md:justify-between">

          {/* Left side text */}
          <div className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Get in Touch</h2>
            <p className="text-lg text-white font-normal mt-4">
              We’d love to hear from you! <br></br>Send us a message using the form, or
              email us.
            </p>
          </div>

          {/* Right Column: Contact Form */}
          <div className="md:w-1/2">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="mb-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div className="mb-6">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32 resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-[#141E30] to-[#243B55] text-white py-3 px-6 rounded-lg hover:bg-[#2D3436] transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
