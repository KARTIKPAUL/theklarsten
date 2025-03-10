"use client"
import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";

export default function About() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-[url('/image/about.jpg')] bg-center bg-cover">
        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="container">
            <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl animate-fade-in">
              About Us
            </h1>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <section className="container py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 md:text-5xl bg-gradient-to-r from-[#e2581b] to-[#0084c2] bg-clip-text text-transparent">
            Innovative Design Solutions
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed md:text-xl">
            At KLARSTEN, we merge cutting-edge technology with artistic vision to create 
            transformative architectural solutions. Our designs breathe life into spaces 
            while maintaining functionality and sustainability.
          </p>
        </div>
      </section>

      {/* Image + Text Section */}
      <section className="container mb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl transform rotate-2 scale-95 group-hover:rotate-1 transition-all"></div>
            <Image
              src="/image/gallery1123.jpg"
              width={800}
              height={200}
              alt="Modern Architecture"
              className="rounded-2xl relative transform transition duration-500 hover:scale-105"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl font-bold md:text-4xl">
              Precision Engineering Meets Creative Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              With decades of expertise, we have redefined modern construction through:
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <TbArrowUpRight className="text-blue-600" />
                </div>
                <span className="font-medium">Advanced Thermal Efficiency</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <TbArrowUpRight className="text-purple-600" />
                </div>
                <span className="font-medium">Sustainable Material Innovation</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <TbArrowUpRight className="text-blue-600" />
                </div>
                <span className="font-medium">Custom Architectural Solutions</span>
              </li>
            </ul>
            <button className="group flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full transition-all hover:bg-gray-800 hover:gap-3">
              Explore Our Process
              <TbArrowUpRight className="text-xl transition-transform group-hover:rotate-45" />
            </button>
          </div>
        </div>
      </section>

      {/* uPVC Expertise Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-600 bg-clip-text text-transparent">
              Why Choose uPVC?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              KLARSTEN specializes in high-quality uPVC windows and doors that combine timeless design with exceptional performance. Our products offer unparalleled durability while enhancing property aesthetics with superior functionality, security, and energy efficiency.
            </p>
            <div className="space-y-6">
              <div className="p-6 bg-white rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-3">Crafted with Precision</h3>
                <p className="text-gray-600">
                  Every product undergoes a meticulous manufacturing process combining cutting-edge technology with expert craftsmanship. Engineered for strength and low maintenance, our solutions ensure long-term value for both residential and commercial projects.
                </p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-3">uPVC Advantages</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <TbArrowUpRight className="text-blue-500" />
                    Unmatched durability against harsh weather conditions
                  </li>
                  <li className="flex items-center gap-2">
                    <TbArrowUpRight className="text-purple-500" />
                    Superior energy efficiency with advanced thermal breaks
                  </li>
                  <li className="flex items-center gap-2">
                    <TbArrowUpRight className="text-blue-500" />
                    Low maintenance and corrosion-resistant
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-purple-600 rounded-2xl transform -rotate-2 scale-95 group-hover:rotate-1 transition-all"></div>
            <Image
              src="/image/gallery1123.jpg"
              width={800}
              height={600}
              alt="uPVC Windows"
              className="rounded-2xl relative transform transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 md:text-5xl bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
            Smart Design Choices
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Advanced Features</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <TbArrowUpRight className="text-blue-500" />
                  Exceptional energy efficiency ratings
                </li>
                <li className="flex items-center gap-2">
                  <TbArrowUpRight className="text-purple-500" />
                  Wide range of styles and colors
                </li>
                <li className="flex items-center gap-2">
                  <TbArrowUpRight className="text-blue-500" />
                  Smart contemporary aesthetics
                </li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Technical Excellence</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <TbArrowUpRight className="text-purple-500" />
                  High-clarity glass options
                </li>
                <li className="flex items-center gap-2">
                  <TbArrowUpRight className="text-blue-500" />
                  Enhanced security features
                </li>
                <li className="flex items-center gap-2">
                  <TbArrowUpRight className="text-purple-500" />
                  Custom sizing and configurations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 md:text-5xl">Creative Minds</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Our team of visionaries combines technical expertise with artistic passion
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src={`/image/profile${item}.jpg`}
                    width={600}
                    height={800}
                    alt="Team member"
                    className="w-full h-96 object-cover transform transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                
                <div className="p-6 absolute bottom-0 left-0 right-0">
                  <h3 className="text-xl font-bold text-white mb-2">Lead Designer</h3>
                  <p className="text-gray-200">Specializing in Sustainable Architecture</p>
                  
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-4">
                      <button className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition">
                        <TbArrowUpRight className="text-white text-xl" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}