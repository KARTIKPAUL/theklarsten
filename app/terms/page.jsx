"use client";

import React from "react";

export default function TermsConditions() {
  return (
    <div className="container mx-auto py-10 px-6 md:px-12 lg:px-24 flex justify-center">
      <div className="bg-white shadow-lg rounded-lg p-10 max-w-4xl">
        <h1 className="text-4xl font-bold text-orange-500 mb-6 text-center">Terms & Conditions</h1>
        <p className="text-gray-600 mb-4 text-center">Last Updated: 10/02/2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">1. Introduction</h2>
          <p className="text-gray-600">
            Welcome to TheKlasten. By accessing our website, you agree to comply with and be bound by these Terms & Conditions. Please read them carefully.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">2. Use of the Website</h2>
          <ul className="list-disc pl-6 text-gray-600">
            <li>You must be at least 18 years old to use this website.</li>
            <li>You agree to use this website only for lawful purposes.</li>
            <li>Unauthorized use may result in legal action.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">3. Intellectual Property</h2>
          <p className="text-gray-600">
            All content on this website, including text, graphics, and logos, is the property of TheKlasten and protected by copyright laws. You may not reproduce or distribute any content without permission.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">4. Limitation of Liability</h2>
          <p className="text-gray-600">
            We do not guarantee that our website will be error-free or uninterrupted. We are not liable for any damages arising from the use of this website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">5. Changes to Terms</h2>
          <p className="text-gray-600">
            We reserve the right to modify these Terms & Conditions at any time. Changes will be posted on this page with an updated "Last Updated" date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">6. Governing Law</h2>
          <p className="text-gray-600">
            These Terms & Conditions are governed by the laws of India. Any disputes shall be resolved in the courts of Maharashtra, India.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">7. Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions about these Terms & Conditions, please contact us at:
          </p>
          <p className="text-gray-600"><strong>Email:</strong> info@theklasten.com</p>
          <p className="text-gray-600"><strong>Address:</strong> Gondia, Maharashtra, India</p>
        </section>
      </div>
    </div>
  );
}

