import {
  TbArrowUpRight,
  TbArrowUpRightCircle,
} from "react-icons/tb";
import {
  FaShieldAlt,
  FaLeaf,
  FaRegLightbulb,
  FaThermometerHalf,
} from "react-icons/fa";
import Image from "next/image";

// Product data array for cleaner code
const products = [
  {
    image:
      "https://images.pexels.com/photos/4786952/pexels-photo-4786952.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Casement Windows/Doors",
    description:
      "uPVC windows with side hinges that open wide for maximum ventilation and flexibility.",
  },
  {
    image:
      "https://images.pexels.com/photos/4786270/pexels-photo-4786270.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Sliding Windows/Doors",
    description:
      "Effortless glide mechanism for maximizing natural light and security.",
  },
  {
    image:
      "https://images.pexels.com/photos/29472836/pexels-photo-29472836/free-photo-of-child-looking-out-old-window-on-winter-day.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Tilt and Turn Windows",
    description:
      "Versatile dual mechanism for normal ventilation or full inward opening.",
  },
  {
    image:
      "https://images.pexels.com/photos/28293514/pexels-photo-28293514/free-photo-of-a-window-with-curtains-and-a-white-railing.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Awning Windows",
    description:
      "Top-hinged design ideal for ventilation even during rainy weather.",
  },
  {
    image:
      "https://images.pexels.com/photos/8316493/pexels-photo-8316493.png?auto=compress&cs=tinysrgb&w=600",
    title: "Fixed + Openable Windows",
    description:
      "Combination of fixed and operational windows for light & ventilation control.",
  },
  {
    image:
      "https://images.pexels.com/photos/29511900/pexels-photo-29511900/free-photo-of-man-looking-out-of-open-window-in-urban-scene.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Bay Windows",
    description:
      "Three-panel design creating spacious feel with 30-40 degree angles.",
  },
  {
    image:
      "https://images.pexels.com/photos/9806682/pexels-photo-9806682.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "French Windows",
    description: "Elegant classic design opening wide for maximum light entry.",
  },
  {
    image:
      "https://images.pexels.com/photos/30651687/pexels-photo-30651687/free-photo-of-elderly-man-gazing-thoughtfully-from-window.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Transom Windows",
    description:
      "Additional light and ventilation installed above doors or windows.",
  },
  {
    image:
      "https://images.pexels.com/photos/10673058/pexels-photo-10673058.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Sash Windows",
    description:
      "Traditional vertical sliding design with modern uPVC efficiency.",
  },
];

// Features data
const features = [
  {
    icon: <FaShieldAlt className="w-6 h-6 text-amber-600" />,
    title: "Enhanced Security",
    description:
      "Multi-point locking systems and reinforced frames provide superior security for your home.",
  },
  {
    icon: <FaLeaf className="w-6 h-6 text-amber-600" />,
    title: "Eco-Friendly",
    description:
      "Our uPVC is 100% recyclable and requires minimal environmental resources to produce.",
  },
  {
    icon: <FaRegLightbulb className="w-6 h-6 text-amber-600" />,
    title: "Energy Efficient",
    description:
      "Advanced thermal insulation reduces heating and cooling costs by up to 30%.",
  },
  {
    icon: <FaThermometerHalf className="w-6 h-6 text-amber-600" />,
    title: "Weather Resistant",
    description:
      "Withstands extreme weather conditions without warping, fading, or corroding.",
  },
];

// Featured product highlights
const highlightFeatures = [
  "Multi-chamber profile design for optimal thermal insulation",
  "Smooth gliding mechanism with stainless steel rollers",
  "Available in sizes up to 3m height for panoramic views",
  "Advanced security features with multi-point locking system",
  "Low maintenance with UV-resistant profiles",
];

// Testimonials data
const testimonials = [
  {
    quote:
      "The quality of their uPVC windows exceeded our expectations. Our home is noticeably warmer and quieter since the installation.",
    name: "Sarah Johnson",
    location: "Homeowner, Mumbai",
  },
  {
    quote:
      "From consultation to installation, the process was seamless. The sliding doors have transformed our living space completely.",
    name: "Rahul Mehta",
    location: "Architect, Delhi",
  },
  {
    quote:
      "We've seen a significant reduction in our energy bills since installing Klarsten windows throughout our property.",
    name: "Priya Sharma",
    location: "Property Developer, Bangalore",
  },
];


export default function Product() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/10673058/pexels-photo-10673058.jpeg?auto=compress&cs=tinysrgb&w=600" // Move to public/images
            alt="Our Products"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30" />
        </div>
        <div className="container relative h-full flex items-center">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
            Products
          </h1>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container">
          <SectionHeader
            title="Our uPVC Windows & Doors"
            subtitle="Crafted with Precision, Designed for Durability"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <SectionHeader
            title="Why Choose Our uPVC Products"
            subtitle="Superior Quality for Enduring Performance"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 relative h-100">
                <Image
                  src="https://images.pexels.com/photos/29511900/pexels-photo-29511900/free-photo-of-man-looking-out-of-open-window-in-urban-scene.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Premium Sliding Door System"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <FeaturedProductContent />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <TestimonialsSection /> */}

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}

// Reusable Components
const SectionHeader = ({ title, subtitle }) => (
  <div className="max-w-3xl mx-auto mb-16 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
      {title}
    </h2>
    <div className="relative inline-block">
      <p className="text-lg text-gray-600 font-medium">{subtitle}</p>
      <div className="absolute bottom-0 left-1/2 w-24 h-0.5 bg-amber-600 transform -translate-x-1/2 mt-2" />
    </div>
  </div>
);

const ProductCard = ({ image, title, description }) => (
  <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="overflow-hidden rounded-t-xl relative h-64">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
    </div>
    <div className="p-6 bg-white">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
      <div className="mt-4">
        <button className="flex items-center text-amber-600 hover:text-amber-700 font-medium transition-colors">
          Learn More
          <TbArrowUpRightCircle className="ml-1 text-lg" />
        </button>
      </div>
    </div>
  </div>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FeaturedProductContent = () => (
  <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center bg-gray-900">
    <span className="text-amber-500 font-medium mb-2">Featured Product</span>
    <h3 className="text-3xl font-bold text-white mb-4">
      Premium Sliding Door System
    </h3>
    <p className="text-gray-300 mb-6">
      Our signature sliding door system combines elegant design with
      advanced thermal insulation. Perfect for creating seamless
      transitions between indoor and outdoor spaces while
      maintaining energy efficiency and security.
    </p>
    <ul className="space-y-3 mb-8">
      {highlightFeatures.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-300">
          <span className="w-6 h-6 rounded-full bg-amber-600 flex items-center justify-center mr-3 flex-shrink-0">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </span>
          {feature}
        </li>
      ))}
    </ul>
    <button className="flex items-center justify-center px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors w-full sm:w-auto">
      Request a Quote
      <TbArrowUpRight className="ml-2" />
    </button>
  </div>
);

const TestimonialsSection = () => (
  <section className="py-16 bg-gray-50">
    <div className="container">
      <SectionHeader
        title="What Our Customers Say"
        subtitle="Real Experiences from Satisfied Clients"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-amber-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-gray-600 italic mb-4">
              {testimonial.quote}
            </blockquote>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                <span className="text-gray-700 font-bold">
                  {testimonial.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-medium text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-16 bg-gray-900">
    <div className="container">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Space?
        </h2>
        <p className="text-gray-300 mb-8 text-lg">
          Contact our team today to discuss your uPVC window and door
          requirements. We offer free consultations and competitive quotes.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-4 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium">
            Request a Quote
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-medium">
            View Our Gallery
          </button>
        </div>
      </div>
    </div>
  </section>
);

