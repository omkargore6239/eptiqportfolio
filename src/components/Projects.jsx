import { FaLink } from 'react-icons/fa'; // Import link icon

function Projects() {
  const projects = [

    { title: 'Offerlearning', link: 'https://offerlearning.com/', image: '/project/offerlearning.jpg' },
    { title: 'Padcorp', link: 'https://padcorp.shop/', image: '/project/padcorp.jpg' },
    { title: 'VegoBike', link: 'https://play.google.com/store/apps/details?id=com.vegobike', image: '/project/vegobike.jpg' },
    { title: 'Sasha Clothings', link: 'https://sashaclothings.in', image: '/project/sashaclothings.jpg' },
    { title: 'AK Enterprises', link: 'https://akenterprisess.in', image: '/project/akenterprises.jpg' },
    { title: 'Harkal Studios', link: 'https://harkalstudios.in', image: '/project/harkalstudios.jpg' },
    { title: 'Pandvesdeltaforce', link: 'https://pandvesdeltaforce.com', image: '/project/pandvesdeltaforce.jpg' },
    { title: 'Owlsale Windo', link: 'https://play.google.com/store/apps/details?id=com.owlsalewindo.customer ', image: '/project/owlsalewindo.jpg' },
    { title: 'OK Bikes', link: 'https://okbikes.eptiqos.com/', image: '/project/okbikes.jpg' },
  ];

  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-white text-white py-20 px-6 min-h-screen flex items-center justify-center">
      <div className="text-center space-y-8 w-screen mx-auto">
        <h2 className="text-4xl font-extrabold animate-fadeInUp">Our Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              href={project.link}
              key={index}
              className="block text-center bg-white text-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
