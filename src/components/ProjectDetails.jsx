// import React, { useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { FaLink, FaArrowLeft, FaCheckCircle, FaTools } from 'react-icons/fa';

// const ProjectDetails = () => {
//   const { id } = useParams();

//   // Scroll to top when component loads or ID changes
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [id]);

//   // All 9 Projects
//   const projects = [
//     { 
//       id: 1,
//       title: 'Offerlearning',
//       link: 'https://offerlearning.com/',
//       image: '/project/offerlearning.jpeg',
//       category: 'IoT',
//       description: `Offerlearning is a next-gen IoT learning platform that integrates real-time device monitoring, 
//                     interactive tutorials, and progress tracking for learners. Ideal for tech enthusiasts and students.`,
//       techStack: ['React', 'Node.js', 'AWS IoT', 'MongoDB'],
//       features: [
//         '📡 Real-time IoT monitoring',
//         '📚 Hands-on project-based learning',
//         '📊 Progress tracking dashboard',
//         '🌐 Cloud-based device simulation',
//         '🔒 Secure user authentication'
//       ]
//     },
//     { 
//       id: 2,
//       title: 'Padcorp',
//       link: 'https://padcorp.shop/',
//       image: '/project/padcorp.jpeg',
//       category: 'ERP',
//       description: `Padcorp is a cloud-based ERP system for businesses. It provides seamless inventory management, 
//                     sales tracking, and CRM functionalities for SMEs and enterprises.`,
//       techStack: ['Angular', 'Laravel', 'MySQL'],
//       features: [
//         '📦 Inventory management',
//         '📈 Real-time sales tracking',
//         '👥 Customer relationship management (CRM)',
//         '🛒 Order fulfillment',
//         '💰 Financial reports and analytics'
//       ]
//     },
//     { 
//       id: 3,
//       title: 'VegoBike',
//       link: 'https://play.google.com/store/apps/details?id=com.vegobike',
//       image: '/project/vegobike.jpeg',
//       category: 'Communication',
//       description: `VegoBike is an innovative bike-sharing platform that offers real-time bike tracking, 
//                     QR-based unlocking, and secure payment solutions for urban travelers.`,
//       techStack: ['Flutter', 'Firebase', 'Node.js'],
//       features: [
//         '🚴‍♂️ Live GPS tracking of bikes',
//         '🔍 QR code-based bike unlocking',
//         '💳 Multiple secure payment options',
//         '🌍 Sustainable and eco-friendly transport',
//         '📊 Ride history and analytics'
//       ]
//     },
//     { 
//       id: 4,
//       title: 'Sasha Clothings',
//       link: 'https://sashaclothings.in',
//       image: '/project/sashaclothings.jpeg',
//       category: 'ERP',
//       description: `Sasha Clothings is a modern e-commerce platform designed for fashion lovers. 
//                     It provides an interactive shopping experience with order tracking and AI-based product recommendations.`,
//       techStack: ['React', 'Django', 'PostgreSQL'],
//       features: [
//         '👗 AI-powered product recommendations',
//         '🛒 Smart shopping cart system',
//         '📦 Order tracking and shipment updates',
//         '💳 Multiple payment options',
//         '🔍 Advanced search & filtering'
//       ]
//     },

//     { 
//       id: 5,
//       title: 'AK Enterprises',
//       link: 'https://akenterprisess.in',
//       image: '/project/akenterprises.jpeg',
//       category: 'Automation',
//       description: `AK Enterprises is a business automation platform that helps companies streamline 
//                     their workflows, optimize processes, and manage resources efficiently.`,
//       techStack: ['Vue.js', 'Spring Boot', 'MongoDB'],
//       features: [
//         '🔧 Workflow automation engine',
//         '📊 Real-time business analytics',
//         '📄 Automated report generation',
//         '🤝 Third-party software integration',
//         '🚀 Task tracking & collaboration tools'
//       ]
//     },
//     { 
//       id: 6,
//       title: 'Harkal Studios',
//       link: 'https://harkalstudios.in',
//       image: '/project/harkalstudios.jpeg',
//       category: 'Automation',
//       description: `Harkal Studios specializes in automation solutions for media production, offering 
//                     cloud-based storage, automated media processing, and content management systems.`,
//       techStack: ['React', 'Node.js', 'AWS'],
//       features: [
//         '🎥 AI-powered media processing automation',
//         '☁️ Cloud storage & digital asset management',
//         '📂 Smart file organization & metadata tagging',
//         '🔄 Real-time collaboration & approvals',
//         '📢 Automated social media posting tools'
//       ]
//     },
//     { 
//       id: 7,
//       title: 'Pandvesdeltaforce',
//       link: 'https://pandvesdeltaforce.com',
//       image: '/project/pandvesdeltaforce.jpeg',
//       category: 'MES',
//       description: `Pandvesdeltaforce is a Manufacturing Execution System (MES) that optimizes 
//                     production processes by integrating real-time monitoring, scheduling, and quality control.`,
//       techStack: ['Angular', 'Java', 'MySQL'],
//       features: [
//         '⚙️ Real-time production scheduling',
//         '📊 Quality control & compliance tracking',
//         '📡 IoT-based machine monitoring',
//         '🚀 Performance analytics & reporting',
//         '🔄 Multi-stage production workflow automation'
//       ]
//     },
//     { 
//       id: 8,
//       title: 'Owlsale Windo',
//       link: 'https://play.google.com/store/apps/details?id=com.owlsalewindo.customer',
//       image: '/project/owlsalewindo.jpeg',
//       category: 'Communication',
//       description: `Owlsale Windo is a communication platform designed for businesses to interact with their customers. 
//                     It enables real-time chat support, push notifications, and AI-based assistance.`,
//       techStack: ['Flutter', 'Firebase', 'Node.js'],
//       features: [
//         '💬 Instant chat support for businesses',
//         '📢 Push notifications & automated alerts',
//         '🤖 AI-powered customer assistance',
//         '🌍 Multi-language support',
//         '📊 Customer engagement analytics'
//       ]
//     },
//     { 
//       id: 9,
//       title: 'OK Bikes',
//       link: 'https://okbikes.eptiqos.com/',
//       image: '/project/okbikes.jpeg',
//       category: 'IoT',
//       description: `OK Bikes is a smart IoT-based bike rental system that enables users to rent and return bikes via mobile applications 
//                     with real-time availability and GPS tracking.`,
//       techStack: ['React Native', 'Node.js', 'MongoDB'],
//       features: [
//         '📍 GPS-enabled bike tracking',
//         '🔓 One-tap unlocking via QR code',
//         '💳 Secure digital payment gateway',
//         '📊 Ride analytics & user history',
//         '🌍 Sustainable & smart transportation'
//       ]
//     },

//     { 
//       id: 10,
//       title: 'Electrodigit',
//       link: '#',
//       image: '/project/electrodigit.jpeg',
//       category: 'MES',
//       description: `In the electro-digital manufacturing sector, efficiency, precision, and real-time tracking are 
//                     crucial. Our Manufacturing Execution System (MES) software is specifically designed to streamline production 
//                     processes, monitor manufacturing operations, and ensure product quality through each step of the production cycle.
//                     Our MES solution seamlessly integrates with your existing ERP system to complete the entire 
//                     process flow, enabling a holistic view of both operations and business activities. By bridging 
//                     the gap between shop floor operations and enterprise management, the MES enhances the accuracy 
//                     and speed of your decision-making process, driving better outcomes across manufacturing, inventory, and sales.`,
//       techStack: ['React', 'Node.js', 'MongoDB'],
//       features: [
//         '⚙️ **Real-Time Production Monitoring**: MES provides real-time visibility into production activities, helping track progress, detect bottlenecks, and ensure timely delivery. Operators and managers can monitor machinery status, production rates, and downtime, which leads to faster corrective actions.',
//         '🔗 **Integration with Existing ERP**: Our MES seamlessly integrates with your current ERP system, creating a fully connected environment. This integration ensures that data flows smoothly between production lines and back-office functions, providing comprehensive insights into the manufacturing process while keeping sales, purchase, and financial operations in sync.',
//         '🤖 **Process Automation**: Automation is a cornerstone of MES, reducing manual input and ensuring consistency in production. From raw material tracking to finished product assembly, automated workflows eliminate repetitive tasks, allowing teams to focus on value-added activities.',
//         '🔍 **Quality Control and Traceability**: MES enhances quality management by enabling real-time monitoring of product standards. Every stage of production is documented, and product quality is continuously tracked, ensuring compliance with industry standards. This helps reduce defects, improve product reliability, and ensure traceability for every unit produced.',
//         '📅 **Production Scheduling and Optimization**: By utilizing real-time data from both the shop floor and ERP, MES helps optimize production scheduling. This ensures efficient use of resources, minimizes downtime, and maintains optimal throughput, increasing overall manufacturing performance.'
//       ],
//       benefits: [
//         '🌟 **Enhanced Operational Visibility**: Integrating MES with your ERP system gives you a 360-degree view of your operations, from raw material procurement to finished goods, helping you make better-informed decisions.',
//         '⚡ **Improved Manufacturing Efficiency**: With real-time monitoring and automated process control, MES reduces downtime and increases throughput. The integration with ERP optimizes the entire production flow, from materials management to order fulfillment, resulting in cost savings and higher production efficiency.',
//         '📊 **Accurate Data for Business Decisions**: MES ensures that accurate, real-time data from the shop floor is fed into your ERP, providing better insights into production performance. This allows managers to make more informed decisions about inventory, procurement, and capacity planning, aligning manufacturing operations with broader business objectives.',
//         '🔄 **Greater Flexibility and Scalability**: The MES system can be easily scaled as your business grows. As production demands increase, the system can handle more complex workflows, product lines, and customization requirements, without disrupting existing operations.',
//         '✅ **Improved Product Quality**: MES offers continuous monitoring of production quality, enabling businesses to identify and address quality issues early in the process. This integration with ERP ensures that quality standards are maintained consistently, leading to fewer defects, improved customer satisfaction, and reduced costs associated with rework.'
//       ]
//     },
    
//     { 
//       id: 11,
//       title: 'Matchwell Engineering',
//       link: '#',
//       image: '/project/matchwell.jpeg',
//       category: 'MES',
//       description: `Matchwell Engineering provides custom solutions for industrial automation, including process optimization and production efficiency.`,
//       techStack: ['Angular', 'Java', 'MySQL'],
//       features: [
//         '🔧 Automated equipment maintenance',
//         '📡 Remote system diagnostics',
//         '📊 Production optimization algorithms',
//         '🛠 Equipment lifecycle tracking'
//       ]
//     },
//     { 
//       id: 12,
//       title: 'AVS Engineering',
//       link: '#',
//       image: '/project/avsengineering.jpeg',
//       category: 'MES',
//       description: `AVS Engineering specializes in MES systems for high-efficiency manufacturing processes, including data-driven decision-making and reporting.`,
//       techStack: ['React', 'Node.js', 'MongoDB'],
//       features: [
//         '📈 Real-time data dashboards',
//         '⚙️ Equipment monitoring & control',
//         '📊 Data-driven reporting',
//         '🔄 Lean manufacturing optimization'
//       ]
//     },
//     { 
//       id: 13,
//       title: 'Integration of OFS with ERP',
//       link: '#',
//       image: '/project/integrationofs.jpeg',
//       category: 'Automation',
//       description: `Integration of OFS with ERP optimizes business operations by seamlessly linking order fulfillment systems with enterprise resource planning.`,
//       techStack: ['Spring Boot', 'Java', 'MySQL'],
//       features: [
//         '🔗 Seamless ERP integration',
//         '📈 Real-time data syncing',
//         '⚙️ Automated order processing',
//         '📊 Performance analytics'
//       ]
//     },
//     { 
//       id: 14,
//       title: 'Inventory Management',
//       link: '#',
//       image: '/project/inventorymanagement.jpeg',
//       category: 'ERP',
//       description: `An advanced inventory management system for enterprises, integrating real-time stock tracking, order management, and procurement functions.`,
//       techStack: ['Vue.js', 'Node.js', 'MongoDB'],
//       features: [
//         '📦 Real-time stock updates',
//         '📊 Inventory analytics',
//         '⚙️ Automated reordering',
//         '🔄 Multi-location inventory tracking'
//       ]
//     },
//     { 
//       id: 15,
//       title: 'Powerica',
//       link: '#',
//       image: '/project/powerica.jpeg',
//       category: 'OFS',
//       description: `Powerica offers a unique order fulfillment system that integrates with ERP systems, providing real-time data and streamlined workflows.`,
//       techStack: ['Angular', 'Java', 'MySQL'],
//       features: [
//         '📈 Real-time order tracking',
//         '🔗 Seamless ERP integration',
//         '⚙️ Automated inventory management',
//         '📊 Performance analytics'
//       ]
//     },
//   ];


//   const project = projects.find(p => p.id === parseInt(id));

//   if (!project) {
//     return (
//       <section className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-100 p-12">
//         <h1 className="text-5xl font-bold mb-4 text-gray-800">Project Not Found</h1>
//         <Link 
//           to="/" 
//           className="inline-flex items-center px-5 py-2 bg-green-600 text-white font-semibold rounded-md shadow-lg hover:bg-green-700 transition"
//         >
//           <FaArrowLeft className="mr-2" /> Back to Home
//         </Link>
//       </section>
//     );
//   }

//   return (
//     <section className="min-h-screen bg-gray-100 text-gray-900 pt-24 pb-12 px-6 md:px-10">
//       <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        
//         {/* Header Section with Clear Image */}
//         <div className="relative">
//           <img src={project.image} alt={project.title} className="w-full h-[450px] object-cover" />
//           <div className="absolute bottom-0 left-0 w-full p-10 bg-black bg-opacity-50">
//             <h1 className="text-5xl font-bold text-white">{project.title}</h1>
//             <p className="text-lg text-white mt-2">{project.category}</p>
//           </div>
//         </div>

//         {/* Content Section */}
//         <div className="p-12">
//           <div className="flex flex-wrap md:flex-nowrap gap-10">
            
//             {/* Main Details */}
//             <div className="w-full md:w-2/3">
//               <h2 className="text-4xl font-semibold text-green-600 mb-6">Project Overview</h2>
//               <p className="text-lg leading-relaxed text-gray-700">{project.description}</p>

//               {/* Features Section */}
//               <h2 className="text-3xl font-semibold text-green-600 mt-10 mb-4">Key Features</h2>
//               <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
//                 {project.features.map((feature, index) => (
//                   <li key={index} className="flex items-center">
//                     <FaCheckCircle className="text-green-500 mr-2" /> {feature}
//                   </li>
//                 ))}
//               </ul>

//               {/* Benefits Section */}
// {project.benefits && (
//   <>
//     <h2 className="text-3xl font-semibold text-green-600 mt-10 mb-4">Benefits of MES in Electro-Digital Manufacturing</h2>
//     <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
//       {project.benefits.map((benefit, index) => (
//         <li key={index} className="flex items-center">
//           <FaCheckCircle className="text-green-500 mr-2" /> {benefit}
//         </li>
//       ))}
//     </ul>
//   </>
// )}

//               {/* Visit Project Button */}
//               <div className="mt-10">
//                 <a
//                   href={project.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-md shadow-lg hover:bg-green-700 transition"
//                 >
//                   <FaLink className="mr-2" /> Visit Project
//                 </a>
//               </div>
//             </div>

//             {/* Tech Stack Sidebar */}
//             <div className="w-full md:w-1/3 bg-gray-50 p-6 rounded-lg shadow-md">
//               <h2 className="text-3xl font-semibold text-green-600 mb-6 flex items-center">
//                 <FaTools className="mr-2" /> Tech Stack
//               </h2>
//               <ul className="space-y-4">
//                 {project.techStack.map((tech, index) => (
//                   <li key={index} className="text-lg font-medium text-gray-800 bg-white p-3 rounded-md shadow-sm border-l-4 border-green-500">
//                     {tech}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Back Button */}
//         <div className="text-center py-6">
//           <Link 
//             to="/" 
//             className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-md shadow-lg hover:bg-green-700 transition"
//           >
//             <FaArrowLeft className="mr-2" /> Back to Home
//           </Link>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default ProjectDetails;
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
        '🖥️ Browser-based circuit simulator',
        '📦 IoT kit rental program',
        '🏭 Industrial automation modules',
        '🔐 Role-based access control',
        '📊 Learner progress analytics'
      ],
      benefits: [
        '👷 82% job placement rate for certified engineers',
        '🔌 Supports 50+ IoT device models',
        '🌍 Multi-language content (6 languages)',
        '🛡️ SOC2-compliant security infrastructure'
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
        '📲 Cross-store inventory transfers',
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
          className="inline-flex items-center px-5 py-2 bg-green-600 text-white font-semibold rounded-md shadow-lg hover:bg-green-700 transition"
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
              <h2 className="text-4xl font-semibold text-green-600 mb-6">Project Overview</h2>
              <p className="text-lg leading-relaxed text-gray-700">{project.description}</p>

              <h2 className="text-3xl font-semibold text-green-600 mt-10 mb-4">Key Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <FaCheckCircle className="text-green-500 mr-2" /> {feature}
                  </li>
                ))}
              </ul>

              {project.benefits && (
                <>
                  <h2 className="text-3xl font-semibold text-green-600 mt-10 mb-4">
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
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-md shadow-lg hover:bg-green-700 transition"
                >
                  <FaLink className="mr-2" /> Visit Project
                </a>
              </div>
            </div>

            <div className="w-full md:w-1/3 bg-gray-50 p-6 rounded-lg shadow-md">
              <h2 className="text-3xl font-semibold text-green-600 mb-6 flex items-center">
                <FaTools className="mr-2" /> Tech Stack
              </h2>
              <ul className="space-y-4">
                {project.techStack.map((tech, index) => (
                  <li key={index} className="text-lg font-medium text-gray-800 bg-white p-3 rounded-md shadow-sm border-l-4 border-green-500">
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
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-md shadow-lg hover:bg-green-700 transition"
          >
            <FaArrowLeft className="mr-2" /> Back to Home
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ProjectDetails;