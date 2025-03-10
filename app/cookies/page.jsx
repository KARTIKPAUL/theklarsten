"use client";

import React from "react";

export default function CookiesPolicy() {
  return (
    <div className="container mx-auto py-10 px-6 md:px-12 lg:px-24 flex justify-center">
      <div className="bg-white shadow-lg rounded-lg p-10 max-w-4xl">
        <h1 className="text-4xl font-bold text-orange-500 mb-6 text-center">Cookies Policy</h1>
        <p className="text-gray-600 mb-4 text-center">Last Updated: 10/02/2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">1. Introduction</h2>
          <p className="text-gray-600">
            This Cookies Policy explains how TheKlasten uses cookies and similar technologies to recognize you when you visit our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">2. What Are Cookies?</h2>
          <p className="text-gray-600">
            Cookies are small data files stored on your device when you visit a website. They help improve user experience by remembering preferences and analyzing traffic.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">3. Types of Cookies We Use</h2>
          <ul className="list-disc pl-6 text-gray-600">
            <li><strong>Essential Cookies:</strong> Necessary for website functionality.</li>
            <li><strong>Analytics Cookies:</strong> Help us analyze website traffic and performance.</li>
            <li><strong>Advertising Cookies:</strong> Used to deliver personalized ads.</li>
            <li><strong>Preference Cookies:</strong> Store user preferences for a better experience.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">4. How to Manage Cookies</h2>
          <p className="text-gray-600">
            You can control and manage cookies through your browser settings. Disabling cookies may affect website functionality.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">5. Changes to This Policy</h2>
          <p className="text-gray-600">
            We may update this Cookies Policy from time to time. Any changes will be posted on this page with an updated 10/03/2025 date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">6. Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions about this Cookies Policy, please contact us at:
          </p>
          <p className="text-gray-600"><strong>Email:</strong> info@theklasten.com</p>
          <p className="text-gray-600"><strong>Address:</strong> Gondia, Maharashtra, India</p>
        </section>
      </div>
    </div>
  );
}

