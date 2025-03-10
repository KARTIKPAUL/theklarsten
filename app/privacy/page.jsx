"use client";

import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto py-10 px-6 md:px-12 lg:px-24 flex justify-center">
      <div className="bg-white shadow-lg rounded-lg p-10 max-w-4xl">
        <h1 className="text-4xl font-bold text-orange-500 mb-6 text-center">Privacy Policy</h1>
        <p className="text-gray-600 mb-4 text-center">Last Updated: 10/02/2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">1. Introduction</h2>
          <p className="text-gray-600">
            Welcome to TheKlasten. We respect your privacy and are committed to protecting your personal
            information. This Privacy Policy explains how we collect, use, and safeguard your
            information when you visit our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">2. Information We Collect</h2>
          <ul className="list-disc pl-6 text-gray-600">
            <li><strong>Personal Information:</strong> Name, email address, phone number, etc., when you contact us or sign up for services.</li>
            <li><strong>Usage Data:</strong> Information about how you use our website, such as IP address, browser type, and pages visited.</li>
            <li><strong>Cookies and Tracking Technologies:</strong> To improve user experience and analyze website traffic.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">3. How We Use Your Information</h2>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Provide and improve our services.</li>
            <li>Communicate with you about updates or offers.</li>
            <li>Analyze website traffic and enhance user experience.</li>
            <li>Ensure website security and prevent fraud.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">4. Sharing Your Information</h2>
          <p className="text-gray-600">
            We do not sell or trade your personal information. However, we may share it with:
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Service providers who assist us in running our website.</li>
            <li>Legal authorities if required by law.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">5. Data Security</h2>
          <p className="text-gray-600">
            We implement security measures to protect your personal information from unauthorized
            access, alteration, or disclosure. However, no online transmission is 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">6. Your Rights</h2>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Access and update your personal data.</li>
            <li>Request data deletion (subject to legal obligations).</li>
            <li>Opt out of marketing communications.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">7. Third-Party Links</h2>
          <p className="text-gray-600">
            Our website may contain links to third-party websites. We are not responsible for their privacy policies or practices.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">8. Changes to This Policy</h2>
          <p className="text-gray-600">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">9. Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="text-gray-600"><strong>Email:</strong> info@theklasten.com</p>
          <p className="text-gray-600"><strong>Address:</strong> Gondia, Maharashtra, India</p>
        </section>
      </div>
    </div>
  );
}

