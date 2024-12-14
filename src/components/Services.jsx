import { FaLaptopCode, FaMobileAlt, FaProjectDiagram, FaUserTie, FaIndustry, FaPencilRuler, FaBullhorn, FaPalette } from 'react-icons/fa'; // Import icons from react-icons

function Services() {
  const services = [
    { title: 'Web Development', description: 'Crafting responsive and interactive websites tailored to meet unique business needs.', icon: <FaLaptopCode className="text-blue-600 text-4xl" /> },
    { title: 'App Development', description: 'Designing user-friendly mobile applications for Android and iOS platforms.', icon: <FaMobileAlt className="text-blue-600 text-4xl" /> },
    { title: 'ERP System', description: 'Providing comprehensive enterprise resource planning solutions for seamless operations.', icon: <FaProjectDiagram className="text-blue-600 text-4xl" /> },
    { title: 'Hire Developers', description: 'Connecting businesses with experienced developers to deliver high-quality projects.', icon: <FaUserTie className="text-blue-600 text-4xl" /> },
    { title: 'MES (Manufacturing Execution System)', description: 'Optimizing manufacturing workflows for increased efficiency and productivity.', icon: <FaIndustry className="text-blue-600 text-4xl" /> },
    { title: 'UX Consulting', description: 'Offering expert guidance to improve user experience and interface design.', icon: <FaPencilRuler className="text-blue-600 text-4xl" /> },
    { title: 'Digital Marketing', description: 'Boosting your online presence with targeted marketing strategies and campaigns.', icon: <FaBullhorn className="text-blue-600 text-4xl" /> },
    { title: 'Graphic Designing', description: 'Creating visually stunning graphics that effectively communicate your brand message.', icon: <FaPalette className="text-blue-600 text-4xl" /> },
  ];

  return (
    <section className="relative bg-gradient-to-r border from-white to-blue-500 text-white w-full min-h-screen flex items-center justify-center py-16 px-6">
      <div className="text-center space-y-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold animate-fadeInUp">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 border rounded-lg shadow-lg bg-white text-gray-800 space-y-4 hover:scale-105 transition-all duration-300">
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
