"use client";

import React from "react";

export default function Careers() {
  return (
    <div className="container mx-auto py-10 px-6 md:px-12 lg:px-24 flex justify-center">
      <div className="bg-white shadow-lg rounded-lg p-10 text-center">
        <h1 className="text-4xl font-bold text-orange-500 mb-6">Join Our Team</h1>
        <p className="text-gray-600 text-lg mb-8">
          Be a part of TheKlasten! Explore career opportunities and grow with us.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Work With Us?</h2>
          <p className="text-gray-600 mb-4">
            At TheKlasten, we value innovation, creativity, and a strong work ethic. We offer a dynamic
            work environment, competitive benefits, and opportunities for professional growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">Growth Opportunities</h3>
              <p className="text-gray-600">We support learning and career advancement through training and mentorship.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">Work-Life Balance</h3>
              <p className="text-gray-600">Enjoy a flexible work environment with a focus on well-being.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">Collaborative Culture</h3>
              <p className="text-gray-600">Join a supportive team where your ideas matter.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">Competitive Benefits</h3>
              <p className="text-gray-600">We provide market-leading salary packages and perks.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Current Openings</h2>
          <p className="text-gray-600 mb-6">
            Explore our latest job openings and find the perfect role for you.
          </p>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-left">
            <h3 className="text-xl font-semibold text-orange-500 mb-2">Software Developer</h3>
            <p className="text-gray-600 mb-2">Location: Remote | Full-Time</p>
            <p className="text-gray-600 mb-4">We are looking for an experienced developer to join our team.</p>
            <a href="#" className="text-blue-600 hover:underline font-medium">Apply Now</a>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Apply</h2>
          <p className="text-gray-600 mb-4">
            Send your resume and cover letter to <strong>careers@theklasten.com</strong> or fill out the
            form below.
          </p>
          <form className="bg-gray-100 p-6 rounded-lg shadow-md text-left">
            <input type="text" placeholder="Your Name" className="w-full border p-3 mb-4 rounded-lg" required />
            <input type="email" placeholder="Your Email" className="w-full border p-3 mb-4 rounded-lg" required />
            <input type="text" placeholder="Position Applied For" className="w-full border p-3 mb-4 rounded-lg" required />
            <textarea placeholder="Your Message" className="w-full border p-3 mb-4 rounded-lg" required></textarea>
            <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition duration-300">
              Submit Application
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

