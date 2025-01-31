import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link to navigate to ProjectDetails page
import { FaLink } from 'react-icons/fa'; // Import link icon

function Projects() {
  const [activeCategory, setActiveCategory] = useState('All'); // State for active category
  const projects = [
    { title: 'Offerlearning', link: 'https://offerlearning.com/', image: '/project/offerlearning.jpeg', category: 'Commercial', id: 1 },
    { title: 'Padcorp', link: 'https://padcorp.shop/', image: '/project/padcorp.jpeg', category: 'Commercial', id: 2 },
    { title: 'VegoBike', link: 'https://play.google.com/store/apps/details?id=com.vegobike', image: '/project/vegobike.jpeg', category: 'Commercial', id: 3 },
    { title: 'Sasha Clothings', link: 'https://sashaclothings.in', image: '/project/sashaclothings.jpeg', category: 'Commercial', id: 4 },
    { title: 'AK Enterprises', link: 'https://akenterprisess.in', image: '/project/akenterprises.jpeg', category: 'Commercial', id: 5 },
    { title: 'Harkal Studios', link: 'https://harkalstudios.in', image: '/project/harkalstudios.jpeg', category: 'Commercial', id: 6 },
    { title: 'Pandvesdeltaforce', link: 'https://pandvesdeltaforce.com', image: '/project/pandvesdeltaforce.jpeg', category: 'Commercial', id: 7 },
    { title: 'Owlsale Windo', link: 'https://play.google.com/store/apps/details?id=com.owlsalewindo.customer', image: '/project/owlsalewindo.jpeg', category: 'Commercial', id: 8 },
    { title: 'OK Bikes', link: 'https://okbikes.eptiqos.com/', image: '/project/okbikes.jpeg', category: 'Commercial', id: 9 },
    
    // New projects and categories
    { title: 'Electrodigit', link: '#', image: '/project/electrodigit.jpeg', category: 'MES', id: 10 },
    { title: 'Matchwell Engineering', link: '#', image: '/project/matchwell.jpeg', category: 'MES', id: 11 },
    { title: 'AVS Engineering', link: '#', image: '/project/avsengineering.jpeg', category: 'MES', id: 12 },
    { title: 'Integration of OFS with ERP', link: '#', image: '/project/integrationofs.jpeg', category: 'Automation', id: 13 },
    { title: 'Inventory Management', link: '#', image: '/project/inventorymanagement.jpeg', category: 'ERP', id: 14 },
    { title: 'Powerica', link: '#', image: '/project/powerica.jpeg', category: 'OFS', id: 15 },
  ];

  // Filter projects by category
  const filteredProjects = activeCategory === 'All' ? projects : projects.filter(project => project.category === activeCategory);

  return (
    <section className="relative bg-blue-500 text-white py-16 px-6 min-h-screen flex flex-col">
      <div className="text-center space-y-8 w-full">
        <h2 className="text-4xl font-extrabold animate-fadeInUp sticky top-0 z-10 bg-blue-500 py-2">
          Our Projects
        </h2>

        {/* Category Menu */}
        <div className="flex flex-wrap justify-center space-x-4 mb-8">
          {['All', 'IoT', 'Automation', 'MES', 'ERP', 'Commercial', 'OFS'].map((category) => (
            <button
              key={category}
              className={`px-6 py-2 text-lg font-semibold rounded-full transition-all duration-300 
                        ${activeCategory === category ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'} 
                        hover:bg-blue-500 hover:text-white focus:outline-none mb-2`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProjects.slice(0, 9).map((project) => (
            <Link
              to={`/projectdetails/${project.id}`} // Use Link to navigate to ProjectDetails page
              key={project.id}
              className="block text-center bg-white text-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover mb-4 rounded-md shadow-md transition-all duration-500 transform hover:scale-105"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <div className="flex justify-center space-x-4">
                <FaLink className="text-gray-700 text-2xl hover:text-blue-600 cursor-pointer" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
