import { FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaDribbble } from "react-icons/fa";

const Topbar = () => {
    return(
        <>
        <div className="container mx-auto py-3 hidden justify-between items-center lg:flex border-b-2">
          <div className="flex items-center space-x-8">
            <div className="text-sm flex items-center space-x-2 text-gray-600">
              <FaPhone className="text-orange-600" />
              <span>+07182 356207</span>
            </div>
            <div className="text-sm flex items-center space-x-2 text-gray-600">
              <FaMapMarkerAlt className="text-orange-600" />
              <span>
              Gondia, Maharashtra - 441614
              </span>
            </div>
          </div>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 duration-200 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-sky-600 duration-200 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-orange-600 duration-200 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="www.theklarsten.com"
              className="text-gray-600 hover:text-black-600 duration-200 transition"
            >
              <FaDribbble />
            </a>
          </div>
        </div>
        </>
    )
}

export default Topbar;
