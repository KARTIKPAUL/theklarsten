"use client"
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      feedback: "The quality of their uPVC windows exceeded our expectations. Our home is noticeably warmer and quieter since the installation.",
      image: "https://images.pexels.com/photos/10673058/pexels-photo-10673058.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 5,
      location: "Mumbai"
    },
    {
      name: "Rahul Mehta",
      feedback: "From consultation to installation, the process was seamless. The sliding doors have transformed our living space completely.",
      image: 'https://images.pexels.com/photos/9806682/pexels-photo-9806682.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4,
      location: "Delhi"
    },
    {
      name: "Priya Sharma",
      feedback: "We've seen a significant reduction in our energy bills since installing Klarsten windows throughout our property.",
      image: "https://images.pexels.com/photos/8316493/pexels-photo-8316493.png?auto=compress&cs=tinysrgb&w=600",
      rating: 4,
      location: "Bangalore"
    },
    {
      name: "Aditya Patel",
      feedback: "The noise reduction is amazing! Living near a busy street is no longer an issue since we installed these windows.",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 5,
      location: "Pune"
    },
    {
      name: "Neha Khanna",
      feedback: "Excellent customer service and the quality of the product is outstanding. Would highly recommend to anyone looking for uPVC solutions.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 5,
      location: "Chennai"
    },
    {
      name: "Vikram Singh",
      feedback: "The aesthetic appeal of our home has improved dramatically with the new bay windows. Extremely satisfied with the craftsmanship.",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4,
      location: "Hyderabad"
    }
  ];

  const renderStars = (rating) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<span key={i} className="text-yellow-500 text-xl">★</span>);
      } else {
        stars.push(<span key={i} className="text-gray-300 text-xl">★</span>);
      }
    }
    return stars;
  };

  // Calculate visible indices for carousel
  const getVisibleIndices = () => {
    const totalItems = testimonials.length;
    let indices = [];

    // For mobile: show 1 item
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      indices.push(activeIndex % totalItems);
    } 
    // For tablet: show 2 items
    else if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      indices.push(activeIndex % totalItems);
      indices.push((activeIndex + 1) % totalItems);
    } 
    // For desktop: show 3 items
    else {
      indices.push(activeIndex % totalItems);
      indices.push((activeIndex + 1) % totalItems);
      indices.push((activeIndex + 2) % totalItems);
    }
    
    return indices;
  };

  // Auto-rotate carousel
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000); // Change slide every 5 seconds
    }
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused, testimonials.length]);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const pauseCarousel = () => {
    setIsPaused(true);
  };

  const resumeCarousel = () => {
    setIsPaused(false);
  };

  return (
    <>
      <div className="relative h-[60vh] bg-[url('/image/about.jpg')] bg-center bg-cover">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30 flex items-center">
          <div className="container">
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl animate-fade-in">
              Testimonials
            </h1>
          </div>
        </div>
      </div>

      <div className="px-6 bg-white py-16 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              What Our Customers Say
            </h1>
            <div className="relative inline-block">
              <p className="text-lg text-gray-600 font-medium">
                Real Experiences from Satisfied Clients
              </p>
              <div className="absolute bottom-0 left-1/2 w-24 h-0.5 bg-amber-600 transform -translate-x-1/2 mt-2"></div>
            </div>
          </div>

          {/* Carousel container */}
          <div className="relative" onMouseEnter={pauseCarousel} onMouseLeave={resumeCarousel}>
            {/* Navigation buttons */}
            <button 
              onClick={handlePrev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white p-3 rounded-full shadow-lg z-10 text-amber-600 hover:text-amber-700 focus:outline-none lg:-translate-x-6"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="overflow-hidden px-8">
              <div className="flex transition-all duration-500 ease-in-out" 
                style={{ transform: `translateX(-${activeIndex * (100 / getVisibleIndices().length)}%)` }}>
                
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4 transition-opacity duration-300 ${
                      getVisibleIndices().includes(index) ? 'opacity-100' : 'opacity-0 hidden lg:block'
                    }`}
                  >
                    <div className="bg-white shadow-lg rounded-lg p-8 h-full flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
                      <div className="flex flex-col items-center">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full object-cover border-4 border-amber-100 mb-4"
                        />
                        <h2 className="text-xl font-semibold text-amber-600">
                          {testimonial.name}
                        </h2>
                        <p className="text-sm text-gray-500 mb-3">{testimonial.location}</p>
                        <div className="mb-4 flex">{renderStars(testimonial.rating)}</div>
                      </div>
                      <p className="text-gray-700 text-center italic flex-grow">
                      {testimonial.feedback}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={handleNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white p-3 rounded-full shadow-lg z-10 text-amber-600 hover:text-amber-700 focus:outline-none lg:translate-x-6"
              aria-label="Next testimonial"
            >
              <FaChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          {/* Dots indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-amber-600' : 'bg-gray-300 hover:bg-amber-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;