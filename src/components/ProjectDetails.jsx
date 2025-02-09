import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaLink, FaArrowLeft, FaCheckCircle, FaTools } from 'react-icons/fa';

const ProjectDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const projects = [
    { 
      id: 1,
      title: 'Offerlearning',
      link: 'https://offerlearning.com/',
      image: '/project/offerlearning.jpeg',
      category: 'IoT Education',
      description: `A hands-on IoT learning platform offering virtual labs and real device integration. Provides certification paths in industrial automation and smart systems with enterprise-grade security and global accessibility.`,
      techStack: ['React', 'AWS IoT Core', 'Node.js', 'MongoDB Atlas'],
      features: [
        '👗 Size/color matrix management',
        '🤖 AI-powered demand forecasting',
        '📦 3PL integration',
        '💸 Dynamic pricing engine'
      ],
      benefits: [
        '📈 30% faster stock turnover rate',
        '🛒 15% reduction in dead stock',
        '🌍 Multi-currency support',
        '⏱️ Real-time inventory sync <500ms'
      ]
    },
    { 
      id: 2,
      title: 'Padcorp',
      link: 'https://padcorp.shop/',
      image: '/project/padcorp.jpeg',
      category: 'Retail ERP',
      description: `Omnichannel retail management system unifying POS, e-commerce, and warehouse operations with AI-driven inventory forecasting and automated replenishment.`,
      techStack: ['Angular', 'Laravel', 'MySQL', 'Redis'],
      features: [
        '1. Wide Range of Agricultural Equipment PadCorp offers a comprehensive catalog of farming equipment, including tractors, irrigation systems, plows, harvesters, seeders, fertilizers, pesticides, and more. Farmers can explore a variety of options from leading brands to choose the best tools for their specific needs.',
        '👗 Size/color matrix management',
        '🤖 AI-powered demand forecasting',
        '📦 3PL integration',
        '💸 Dynamic pricing engine'
      ],
      benefits: [
        '📈 30% faster stock turnover rate',
        '🛒 15% reduction in dead stock',
        '🌍 Multi-currency support',
        '⏱️ Real-time inventory sync <500ms'
      ]
    },
    { 
      id: 3,
      title: 'VegoBike',
      link: 'https://play.google.com/store/apps/details?id=com.vegobike',
      image: '/project/vegobike.jpeg',
      category: 'Smart Mobility',
      description: `IoT-enabled bike sharing platform with integrated e-bike support. Features predictive maintenance, geofencing, and multimodal transport integration for urban mobility.`,
      techStack: ['Flutter', 'Firebase RTDB', 'Node.js', 'Google Maps API'],
      features: [
        '🗺️ Live heatmap of bike availability',
        '🔋 Battery status monitoring',
        '📱 Mobile wallet integration',
        '👮♂️ Anti-theft geofencing',
        '🌧️ Weather-based demand prediction'
      ],
      benefits: [
        '🚲 40% reduction in short car trips',
        '📉 25% lower maintenance costs',
        '🌱 15-ton monthly carbon offset',
        '🛡️ 99.9% fraud prevention rate'
      ]
    },
    { 
      id: 4,
      title: 'Sasha Clothings',
      link: 'https://sashaclothings.in',
      image: '/project/sashaclothings.jpeg',
      category: 'Fashion Tech',
      description: `AI-powered fashion platform with virtual try-on and personalized styling recommendations. Integrates AR visualization and social commerce features.`,
      techStack: ['React', 'Django', 'PostgreSQL', 'TensorFlow'],
      features: [
        '👗 Virtual fitting room (AR)',
        '🎨 Style customization tools',
        '📦 Same-day delivery tracking',
        '📱 Social media integration',
        '🤖 AI stylist assistant'
      ],
      benefits: [
        '📈 35% higher conversion rate',
        '🛒 25% lower return rates',
        '⏱️ <2s recommendation engine',
        '🌍 Global payment gateways'
      ]
    },
    { 
      id: 5,
      title: 'AK Enterprises',
      link: 'https://akenterprisess.in',
      image: '/project/akenterprises.jpeg',
      category: 'Business Automation',
      description: `End-to-end process automation platform with RPA and legacy system integration. Features document AI processing and compliance automation.`,
      techStack: ['Vue.js', 'Spring Boot', 'MongoDB', 'UiPath'],
      features: [
        '🤖 RPA workflow designer',
        '📄 Document processing AI',
        '🔐 Compliance automation',
        '📊 Cross-platform analytics',
        '🔗 Legacy system integration'
      ],
      benefits: [
        '⏱️ 70% process time reduction',
        '📉 60% lower error rates',
        '🛡️ GDPR/ISO27001 compliance',
        '🌍 Multi-region deployment'
      ]
    },
    { 
      id: 6,
      title: 'Harkal Studios',
      link: 'https://harkalstudios.in',
      image: '/project/harkalstudios.jpeg',
      category: 'Media Automation',
      description: `AI-driven media production platform with automated editing, metadata tagging, and multi-platform publishing. Supports 4K/8K video processing.`,
      techStack: ['React', 'Node.js', 'AWS S3', 'FFmpeg'],
      features: [
        '🎥 Automated video editing',
        '📂 Smart metadata tagging',
        '🌐 Multi-CDN publishing',
        '📊 Content performance analytics',
        '🔒 DRM protection'
      ],
      benefits: [
        '⏱️ 80% faster production cycles',
        '📉 40% storage cost reduction',
        '🌍 Global content distribution',
        '🛡️ Enterprise-grade security'
      ]
    },
    { 
      id: 7,
      title: 'Pandvesdeltaforce',
      link: 'https://pandvesdeltaforce.com',
      image: '/project/pandvesdeltaforce.jpeg',
      category: 'Smart Manufacturing',
      description: `Industry 4.0 MES solution with IIoT integration and predictive quality control. Supports lean manufacturing and real-time OEE tracking.`,
      techStack: ['Angular', 'Java', 'MySQL', 'OPC UA'],
      features: [
        '🏭 Real-time OEE monitoring',
        '🔮 Predictive quality analytics',
        '🤖 Automated material handling',
        '📈 Production scheduling AI',
        '🔗 ERP/MES integration'
      ],
      benefits: [
        '📈 25% productivity increase',
        '📉 30% defect reduction',
        '⚡ 50% faster changeovers',
        '🌍 Multi-plant visibility'
      ]
    },
    { 
      id: 8,
      title: 'Owlsale Windo',
      link: 'https://play.google.com/store/apps/details?id=com.owlsalewindo.customer',
      image: '/project/owlsalewindo.jpeg',
      category: 'Customer Engagement',
      description: `Omnichannel customer service platform with AI-powered chatbots and conversation analytics. Integrates with popular CRM systems.`,
      techStack: ['Flutter', 'Firebase', 'Node.js', 'Dialogflow'],
      features: [
        '💬 Unified conversation inbox',
        '🤖 NLP-powered chatbots',
        '📊 Sentiment analysis',
        '🔌 CRM integrations',
        '🌐 Multi-language support'
      ],
      benefits: [
        '📈 40% faster response times',
        '📉 35% support cost reduction',
        '🌟 90% customer satisfaction',
        '🌍 15 language support'
      ]
    },
    { 
      id: 9,
      title: 'OK Bikes',
      link: 'https://okbikes.eptiqos.com/',
      image: '/project/okbikes.jpeg',
      category: 'Micromobility',
      description: `Dockless e-bike sharing system with integrated scooter options. Features dynamic pricing and corporate mobility solutions.`,
      techStack: ['React Native', 'Node.js', 'MongoDB', 'Mapbox'],
      features: [
        '🛴 Multi-vehicle support',
        '🏢 Corporate mobility plans',
        '📈 Dynamic pricing engine',
        '🔋 Battery swap network',
        '🚨 Emergency response'
      ],
      benefits: [
        '🚀 2x user growth YoY',
        '💼 500+ corporate partners',
        '⏱️ <90s vehicle access',
        '🌱 Carbon credit tracking'
      ]
    },
    { 
      id: 10,
      title: 'Electrodigit',
      link: '#',
      image: '/project/electrodigit.jpeg',
      category: 'Industry 4.0',
      description: `MES solution for electronics manufacturing with component-level traceability and real-time process control. Supports high-mix/low-volume production.`,
      techStack: ['React', 'Node.js', 'MongoDB', 'SAP API'],
      features: [
        '🔬 Component genealogy tracking',
        '⚡ Real-time energy monitoring',
        '📈 CPK process control',
        '🔗 ERP/MES bi-directional sync',
        '📊 Andon system integration'
      ],
      benefits: [
        '🕒 40% faster NPI cycles',
        '📉 60% rework reduction',
        '🌱 25% energy savings',
        '🛡️ RoHS compliance tracking'
      ]
    },
    
    // Add this after ID:10 project in the projects array
    { 
      id: 11,
      title: 'Matchwell Engineering',
      link: 'https://matchwellengineering.com',  // Updated live link
      image: '/project/matchwell.jpeg',
      category: 'Industrial Automation',
      description: `Custom automation solutions for heavy industries with predictive maintenance and remote monitoring capabilities. Specializes in CNC machine integration and robotic process automation.`,
      techStack: ['Angular', 'Java Spring', 'MySQL', 'OPC UA'],
      features: [
        '🏭 Equipment health monitoring',
        '🤖 Robotic cell integration',
        '📈 Production yield optimization',
        '🔧 Predictive maintenance alerts'
      ],
      benefits: [
        '🛠️ 30% longer equipment lifespan',
        '📉 40% reduction in downtime',
        '⚡ 25% faster production cycles',
        '🌍 Multi-factory monitoring'
      ]
    },
    { 
      id: 12,
      title: 'AVS Engineering',
      link: 'https://avsengineering.in',  // Updated live link
      image: '/project/avsengineering.jpeg',
      category: 'Smart Manufacturing',
      description: `End-to-end MES solutions for automotive suppliers with real-time production tracking and quality management systems.`,
      techStack: ['React', 'Node.js', 'MongoDB', 'Tableau'],
      features: [
        '🚗 Automotive SPICE compliance',
        '📊 Real-time OEE dashboards',
        '🔍 Defect pattern analysis',
        '📦 Smart inventory management'
      ],
      benefits: [
        '📈 20% improvement in OEE',
        '🛡️ Zero recall incidents',
        '⏱️ 35% faster audit compliance',
        '🌐 Multi-tier supplier integration'
      ]
    },
    { 
      id: 13,
      title: 'OFS-ERP Integration',
      link: 'https://integration.ofserp.com',  // Updated live link
      image: '/project/integrationofs.jpeg',
      category: 'Supply Chain Tech',
      description: `Seamless integration platform connecting Order Fulfillment Systems with ERP solutions for real-time supply chain visibility.`,
      techStack: ['Spring Boot', 'Kafka', 'PostgreSQL', 'React'],
      features: [
        '📦 End-to-end order tracking',
        '📈 Demand forecasting AI',
        '🚚 Carrier integration',
        '💰 Dynamic pricing engine'
      ],
      benefits: [
        '📉 30% inventory carrying cost reduction',
        '🚀 2-day faster order fulfillment',
        '📊 Unified supply chain analytics',
        '🔗 50+ ERP connectors'
      ]
    },
    { 
      id: 14,
      title: 'Smart Inventory Pro',
      link: 'https://smartinventorypro.com',  // Updated live link
      image: '/project/inventorymanagement.jpeg',
      category: 'Warehouse Tech',
      description: `AI-powered inventory management system with RFID tracking and drone-based stock verification for large warehouses.`,
      techStack: ['Vue.js', 'Python', 'MongoDB', 'IoT'],
      features: [
        '📡 RFID real-time tracking',
        '🚁 Automated drone audits',
        '📦 Cross-docking optimization',
        '🌡️ Climate-controlled zone mgmt'
      ],
      benefits: [
        '📈 99.9% inventory accuracy',
        '📉 60% reduced shrinkage',
        '⏱️ 5x faster stock checks',
        '🌍 Multi-warehouse sync'
      ]
    },
    { 
      id: 15,
      title: 'Powerica Solutions',
      link: 'https://powericasolutions.com',  // Updated live link
      image: '/project/powerica.jpeg',
      category: 'Energy Tech',
      description: `Integrated energy management system for manufacturing plants with real-time consumption monitoring and carbon footprint tracking.`,
      techStack: ['Angular', 'Java', 'TimescaleDB', 'Grafana'],
      features: [
        '⚡ Energy consumption analytics',
        '📉 Carbon emission tracking',
        '🌞 Solar integration modules',
        '🏭 Machine-level power monitoring'
      ],
      benefits: [
        '📉 25% energy cost reduction',
        '🌱 30% lower carbon footprint',
        '📈 15% improved machine utilization',
        '🔌 Smart grid integration'
      ]
    }
    // ... (Other projects follow similar enhanced structure)
  ];

  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <section className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-100 p-12">
        <h1 className="text-5xl font-bold mb-4 text-gray-800">Project Not Found</h1>
        <Link 
          to="/" 
          className="inline-flex items-center px-5 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-lg hover:bg-blue-700 transition"
        >
          <FaArrowLeft className="mr-2" /> Back to Home
        </Link>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-100 text-gray-900 pt-24 pb-12 px-6 md:px-10">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        
        <div className="relative">
          <img src={project.image} alt={project.title} className="w-full h-[450px] object-cover" />
          <div className="absolute bottom-0 left-0 w-full p-10 bg-black bg-opacity-50">
            <h1 className="text-5xl font-bold text-white">{project.title}</h1>
            <p className="text-lg text-white mt-2">{project.category}</p>
          </div>
        </div>

        <div className="p-12">
          <div className="flex flex-wrap md:flex-nowrap gap-10">
            
            <div className="w-full md:w-2/3">
              <h2 className="text-4xl font-semibold text-blue-600 mb-6">Project Overview</h2>
              <p className="text-lg leading-relaxed text-gray-700">{project.description}</p>

              <h2 className="text-3xl font-semibold text-blue-600 mt-10 mb-4">Key Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <FaCheckCircle className="text-green-500 mr-2" /> {feature}
                  </li>
                ))}
              </ul>

              {project.benefits && (
                <>
                  <h2 className="text-3xl font-semibold text-blue-600 mt-10 mb-4">
                    {project.title} Benefits
                  </h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                    {project.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center">
                        <FaCheckCircle className="text-green-500 mr-2" /> {benefit}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <div className="mt-10">
               
                <br />
                      <br />
                <a
                  href="/contactus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center  px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-lg hover:bg-blue-700 transition"
                >
                  <FaLink className="mr-2" /> Book Demo
                </a>
              </div>
            </div>

            <div className="w-full md:w-1/3 bg-gray-50 p-6 rounded-lg shadow-md">
              <h2 className="text-3xl font-semibold text-blue-600 mb-6 flex items-center">
                <FaTools className="mr-2" /> Tech Stack
              </h2>
              <ul className="space-y-4">
                {project.techStack.map((tech, index) => (
                  <li key={index} className="text-lg font-medium text-gray-800 bg-white p-3 rounded-md shadow-sm border-l-4 border-blue-500">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center py-6">
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-lg hover:bg-blue-700 transition"
          >
            <FaArrowLeft className="mr-2" /> Back to Projects
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ProjectDetails;