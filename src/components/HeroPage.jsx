import React from 'react';
import Slider from 'react-slick';
import { FaLaptopCode, FaMobileAlt, FaCloud, FaCheckCircle } from 'react-icons/fa';

function HeroPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    easing: 'ease-in-out',
    pauseOnHover: true,
    cssEase: 'ease-out',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };

  return (
    <section className="relative bg-blue-500 to-white text-white w-full min-h-screen flex flex-col md:flex-row items-center justify-center py-12 px-6 md:px-12 mt-16 sm:mt-0">
      <div className="text-center md:text-left md:w-1/2 space-y-6 md:space-y-8">
        <h2 className="text-5xl md:text-6xl font-extrabold animate-fadeInUp text-shadow-lg">
          <span className="text-cyan-200">Welcome to</span> Eptiq Technologies
        </h2>
        <p className="text-lg md:text-xl font-light md:font-semibold text-shadow-md">
          <span className="font-bold text-yellow-200">Empowering Businesses</span> with Cutting-Edge Digital Solutions
        </p>
        <div className="flex flex-wrap gap-4 text-lg md:text-xl font-medium text-white">
          <div className="flex items-center gap-2 bg-white bg-opacity-20 p-3 rounded-lg shadow-md">
            <FaLaptopCode className="text-yellow-400 text-3xl" /> Web Development
          </div>
          <div className="flex items-center gap-2 bg-white bg-opacity-20 p-3 rounded-lg shadow-md">
            <FaMobileAlt className="text-yellow-400 text-3xl" /> Mobile App Development
          </div>
          <div className="flex items-center gap-2 bg-white bg-opacity-20 p-3 rounded-lg shadow-md">
            <FaCloud className="text-yellow-400 text-3xl" /> Cloud Solutions
          </div>
        </div>
        <ul className="text-left space-y-2">
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-green-400 text-2xl" /> 4+ Years of Industry Experience
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-green-400 text-2xl" /> 30+ Successful Projects Delivered
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-green-400 text-2xl" /> Trusted by Clients Worldwide
          </li>
        </ul>
      </div>

      {/* Image Slider */}
      <div className="slider-container mt-10 md:mt-0 md:w-1/2 w-full">
        <Slider {...settings}>
          <div>
            <img
              src="/office/Office1.png"
              alt="Office 1"
              className="w-full h-[60vh] md:h-auto object-contain rounded-lg "
            />
          </div>
          <div>
            <img
              src="/office/Office2.png"
              alt="Office 2"
              className="w-full h-[60vh] md:h-auto object-contain rounded-lg "
            />
          </div>
          <div>
            <img
              src="/office/Office3.png"
              alt="Office 3"
              className="w-full h-[60vh] md:h-auto object-contain rounded-lg"
            />
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default HeroPage;
