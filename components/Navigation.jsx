"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { TbArrowUpRight } from "react-icons/tb";
import { FiMenu, FiX } from "react-icons/fi";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/products", label: "Products" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/gallery", label: "Gallery" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden flex justify-between items-center p-4">
        <button 
          onClick={() => setOpen(!isOpen)} 
          className="text-2xl z-50 relative"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      
      {/* Navigation Container */}
      <nav
        className={`lg:mt-0 flex gap-x-6 transform transition-all 
          max-md:fixed max-md:top-0 max-md:right-0 max-md:w-3/4 
          max-md:h-screen max-md:bg-white max-md:shadow-lg 
          ${isOpen ? "max-md:translate-x-0" : "max-md:translate-x-full"}`}
      >
        {/* Desktop Navigation Items */}
        <div className="hidden lg:flex items-center gap-x-6">
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${
                pathname === href 
                  ? "text-black font-semibold" 
                  : "text-gray-700 hover:text-black"
              } transition-colors`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation Items */}
        <div className="flex flex-col items-start pl-5 mt-10 w-full pr-10 lg:hidden h-full">
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-lg py-2 ${
                pathname === href 
                  ? "text-black font-semibold" 
                  : "text-gray-700 hover:text-black"
              }`}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Contact Button - Desktop */}
      <div className="hidden lg:inline-flex">
        <Link
          href="/contact"
          className="flex items-center px-5 py-2 font-medium text-gray-800 bg-white border border-gray-600 rounded-full shadow hover:bg-gray-100"
        >
          Contact Us <TbArrowUpRight className="w-5 h-5 ml-2" />
        </Link>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0  ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />
    </>
  );
}