"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FiBriefcase,
  FiUsers,
  FiDollarSign,
  FiClock,
  FiArrowRight,
} from "react-icons/fi";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function Careers() {
  return (
    <>
      <div className="relative h-[60vh] bg-[url('/image/about.jpg')] bg-center bg-cover">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30 flex items-center">
          <div className="container text-center">
            <h1 className="text-5xl font-extrabold tracking-tight text-white md:text-7xl lg:text-8xl animate-fade-in">
              Careers
            </h1>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Shape the Future with{" "}
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                TheKlasten
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join a team of innovators and creators building solutions that
              matter. Grow your career in a supportive, dynamic environment that
              values your potential.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why You will Love Working Here
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="w-14 h-14 bg-orange-100 rounded-xl mb-6 flex items-center justify-center text-orange-500 text-2xl">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Openings Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Current Opportunities
            </h2>
            <div className="space-y-6">
              {openings.map((opening, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {opening.title}
                      </h3>
                      <div className="flex items-center gap-4 mt-2 text-gray-600">
                        <span className="flex items-center gap-2">
                          <FiClock /> {opening.type}
                        </span>
                        <span className="flex items-center gap-2">
                          <FiUsers /> {opening.team}
                        </span>
                        <span className="flex items-center gap-2">
                        {opening.salary}
                        </span>
                      </div>
                    </div>
                    <button className="flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300">
                      Apply Now <FiArrowRight />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Application Section */}
          <motion.section
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-12"
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Start Your Journey
            </h2>
            <form className=" mx-auto space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Position</label>
                <select className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all">
                  <option>Select Position</option>
                  {openings.map((opening, index) => (
                    <option key={index}>{opening.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Cover Letter</label>
                <textarea
                  rows="4"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="Tell us why you're the perfect fit..."
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Resume/CV</label>
                <div className="flex items-center justify-center w-full border-2 border-dashed border-gray-200 rounded-lg p-8 text-center">
                  <span className="text-gray-500">
                    Drag and drop file or click to upload
                  </span>
                  <input type="file" className="hidden" />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300"
              >
                Submit Application
              </button>
            </form>
          </motion.section>
        </div>
      </div>
    </>
  );
}

const benefits = [
  {
    icon: <FiBriefcase />,
    title: "Career Growth",
    description:
      "Professional development programs and mentorship opportunities to accelerate your career",
  },
  {
    icon: <FiClock />,
    title: "Flexible Work",
    description:
      "Hybrid work model and flexible hours to support work-life balance",
  },
  {
    icon: <FiUsers />,
    title: "Diverse Team",
    description:
      "Collaborate with talented professionals from around the world",
  },
  {
    icon: <FiDollarSign />,
    title: "Competitive Pay",
    description: "Attractive compensation package with performance bonuses",
  },
];

const openings = [
  {
    title: "Senior Software Engineer",
    type: "Full-time",
    team: "Product Development",
    salary: "₹120k - ₹150k",
  },
  {
    title: "UX Designer",
    type: "Contract",
    team: "Design Team",
    salary: "₹90k - ₹110k",
  },
  {
    title: "Product Manager",
    type: "Full-time",
    team: "Leadership",
    salary: "₹140k - ₹180k",
  },
];
