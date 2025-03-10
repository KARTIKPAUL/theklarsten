"use client"
import React from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-[url('/image/about.jpg')] bg-center bg-cover">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30 flex items-center">
          <div className="container text-center">
            <h1 className="text-5xl font-extrabold tracking-tight text-white md:text-7xl lg:text-8xl animate-fade-in">
              Contact Us
            </h1>
          </div>
        </div>
      </div>

      {/* Contact Details Section */}
      <section className="py-16 bg-gray-100">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white shadow-lg p-8 rounded-lg">
            <h2 className="text-[#E35A1E] text-3xl font-bold">Get in Touch With Us</h2>
            <p className="text-lg text-gray-600 mt-2">We are here to help and answer any question you might have.</p>
            <div className="mt-6 space-y-6">
              <div className="flex items-center space-x-4">
                <FaPhoneAlt className="text-[#E35A1E] text-2xl" />
                <div>
                  <p className="text-lg font-semibold">+07182 356207</p>
                  <p className="text-gray-500">Mon - Sun | 9:00 AM - 7:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-[#E35A1E] text-2xl" />
                <div>
                  <p className="text-lg font-semibold">The Klasten</p>
                  <p className="text-gray-500">Gondia, Maharashtra, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-[#E35A1E] text-2xl" />
                <div>
                  <p className="text-lg font-semibold">
                    <a href="mailto:info@theklasten.com" className="hover:underline">
                      info@theklasten.com
                    </a>
                  </p>
                  <p className="text-gray-500">Drop us a line anytime!</p>
                </div>
              </div>
            </div>
            <div className="flex space-x-6 mt-6 text-2xl">
              <a href="#" className="text-[#E1306C] hover:text-[#DD2A7B]"><FaInstagram /></a>
              <a href="#" className="text-[#0077B5] hover:text-[#004182]"><FaLinkedin /></a>
              <a href="#" className="text-[#25D366] hover:text-[#128C7E]"><FaWhatsapp /></a>
              <a href="#" className="text-[#FF0000] hover:text-[#C4302B]"><FaYoutube /></a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-lg p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-900">Send Us a Message</h3>
            <p className="text-gray-600 mt-2">We’d love to hear from you. Fill out the form below.</p>
            <form className="mt-6 space-y-4">
              <input type="text" placeholder="Your Name" className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#E35A1E]" required />
              <input type="email" placeholder="Your Email" className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#E35A1E]" required />
              <input type="text" placeholder="Your Phone" className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#E35A1E]" required />
              <textarea placeholder="Your Message" className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#E35A1E]" required></textarea>
              <button type="submit" className="w-full bg-[#E35A1E] text-white rounded-lg py-3 hover:bg-[#0084C2] transition duration-300">Submit</button>
            </form>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <div className="bg-gray-100 py-10">
        <div className="container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3708.562124743895!2d80.24007587504941!3d21.641979980165313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2baeb0d6f1954b%3A0x19eeb24cfbd6a0b!2sGondia%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1736103783540!5m2!1sen!2sin"
            className="w-full h-[50vh] lg:h-[60vh] rounded-lg shadow-lg"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;