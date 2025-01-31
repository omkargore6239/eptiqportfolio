import React from 'react';
import Slider from 'react-slick';

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
    pauseOnHover: true,
    cssEase: 'ease-out',
  };

  return (
    <section className="relative bg-blue-500 text-white w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-10 md:py-16 pt-24">
      
      {/* Left Side - Text Content */}
      <div className="md:w-1/2 space-y-5 md:space-y-6">
        <h5 className="text-2xl md:text-3xl font-semibold items-center text-center leading-tight">
          <span className="text-cyan-200">Welcome to</span> <br /> Eptiq Technologies
        </h5>
        <p className="text-sm md:text-lg font-light md:font-semibold">
          Eptiq Technologies is committed to delivering high-quality technology solutions that drive digital 
          transformation across industries. Our expertise in Manufacturing Execution Systems (MES), Enterprise 
          Resource Planning (ERP), Industrial IoT, and Automation allows businesses to streamline operations, 
          enhance productivity, and achieve operational excellence.
        </p>
        <p className="text-sm md:text-lg font-light leading-relaxed">
          Our MES solutions provide real-time data insights, production tracking, and inventory management, helping 
          manufacturers reduce downtime and increase efficiency. ERP solutions unify business processes by 
          integrating finance, human resources, procurement, and supply chain into a single, seamless platform. 
          With Industrial IoT, we enable smart automation, predictive maintenance, and data-driven decision-making 
          for enhanced operational performance.
        
          Businesses today need scalable and flexible solutions that adapt to changing market demands. Our cloud-based 
          technologies provide robust security and seamless collaboration across departments. By integrating AI-powered 
          analytics, we help enterprises optimize workflows, automate repetitive tasks, and improve overall 
          efficiency. Our automation solutions bring precision and reliability to complex industrial processes, 
          allowing businesses to focus on innovation and growth.
        </p>
        {/* <p className="text-sm md:text-lg font-light leading-relaxed">
          Eptiq Technologies is at the forefront of digital transformation, delivering customized solutions for 
          businesses of all sizes. Whether it’s implementing ERP systems for better resource planning, deploying IoT 
          devices for smarter operations, or automating production lines, our mission is to help organizations stay 
          ahead in an increasingly competitive landscape.
        </p> */}

        {/* CTA Button */}
        <div className="mt-6">
          <a
            href="#projects"
            className="bg-white hover:bg-slate-300 text-black px-6 py-3 rounded-full text-sm md:text-lg font-semibold transition"
          >
            Explore Our Projects
          </a>
        </div>
      </div>

      {/* Right Side - Image Slider (Adjusts Based on Content Length) */}
      <div className="md:w-1/3 w-full flex items-center justify-center mt-8 md:mt-0">
        <div className="w-full max-w-lg">
          <Slider {...settings}>
            <div>
              <img
                src="/public/office/office 1.jpg"
                alt="Manufacturing Execution System"
                className="w-full h-auto md:h-[400px] lg:h-[500px] object-cover rounded-lg"
              />
            </div>
            <div>
              <img
                src="/public/office/Office 2.jpg"
                alt="ERP Management"
                className="w-full h-auto md:h-[400px] lg:h-[500px] object-cover rounded-lg"
              />
            </div>
            <div>
              <img
                src="/public/office/Office 3.jpg"
                alt="Automation & Robotics"
                className="w-full h-auto md:h-[400px] lg:h-[500px] object-cover rounded-lg"
              />
            </div>
          </Slider>
        </div>
      </div>

    </section>
  );
}

export default HeroPage;
