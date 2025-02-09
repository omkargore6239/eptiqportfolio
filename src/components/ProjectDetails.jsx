import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaLink, FaArrowLeft,FaEye,FaSyncAlt,FaRobot,FaChartLine,FaCogs,FaDatabase,FaExpandArrowsAlt,FaThumbsUp, FaCheckCircle, FaTools, FaCalendarAlt, FaClipboardList, FaMicrochip, FaSearch, FaUsers } from 'react-icons/fa';

const ProjectDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Module icons configuration
  const moduleIcons = {
    scheduling: <FaCalendarAlt className="text-purple-500 text-xl mr-3" />,
    planning: <FaClipboardList className="text-blue-500 text-xl mr-3" />,
    prond: <FaMicrochip className="text-green-500 text-xl mr-3" />,
    recording: <FaClipboardList className="text-red-500 text-xl mr-3" />,
    quality: <FaSearch className="text-yellow-500 text-xl mr-3" />,
    hrms: <FaUsers className="text-pink-500 text-xl mr-3" />
  };

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
      image: '/Eptiq clients/ELECTRODIGIT.jpeg',
      category: 'Industry 4.0',
      description: `MES solution for electronics manufacturing with component-level traceability and real-time process control. Supports high-mix/low-volume production.`,
      modules: [
        { name: 'Scheduling', description: '...' },
        { name: 'Production Planning', description: '...' },
        { name: 'PROND', description: '...' },
        { name: 'Recording', description: '...' },
        { name: 'Quality Inspection', description: '...' },
        { name: 'HRMS', description: '...' }
      ],
      features: [
        {
          icon: <FaEye className="text-blue-500 text-2xl" />,
          title: 'Real-Time Production Monitoring',
          description: 'MES provides real-time visibility into production activities, helping track progress, detect bottlenecks, and ensure timely delivery. Operators and managers can monitor machinery status, production rates, and downtime, which leads to faster corrective actions.'
        },
        {
          icon: <FaSyncAlt className="text-blue-500 text-2xl" />,
          title: 'Integration with Existing ERP',
          description: 'Our MES seamlessly integrates with your current ERP system, creating a fully connected environment. This integration ensures that data flows smoothly between production lines and back-office functions, providing comprehensive insights into the manufacturing process while keeping sales, purchase, and financial operations in sync.'
        },
        {
          icon: <FaRobot className="text-blue-500 text-2xl" />,
          title: 'Process Automation',
          description: 'Automation is a cornerstone of MES, reducing manual input and ensuring consistency in production. From raw material tracking to finished product assembly, automated workflows eliminate repetitive tasks, allowing teams to focus on value-added activities.'
        },
        {
          icon: <FaCheckCircle className="text-blue-500 text-2xl" />,
          title: 'Quality Control and Traceability',
          description: 'MES enhances quality management by enabling real-time monitoring of product standards. Every stage of production is documented, and product quality is continuously tracked, ensuring compliance with industry standards. This helps reduce defects, improve product reliability, and ensure traceability for every unit produced.'
        },
        {
          icon: <FaCalendarAlt className="text-blue-500 text-2xl" />,
          title: 'Production Scheduling and Optimization',
          description: 'By utilizing real-time data from both the shop floor and ERP, MES helps optimize production scheduling. This ensures efficient use of resources, minimizes downtime, and maintains optimal throughput, increasing overall manufacturing performance.'
        }
      ],
    
      benefits: [
        {
          icon: <FaChartLine className="text-blue-500 text-2xl" />,
          title: 'Enhanced Operational Visibility',
          description: 'Integrating MES with your ERP system gives you a 360-degree view of your operations, from raw material procurement to finished goods, helping you make better-informed decisions.'
        },
        {
          icon: <FaCogs className="text-blue-500 text-2xl" />,
          title: 'Improved Manufacturing Efficiency',
          description: 'With real-time monitoring and automated process control, MES reduces downtime and increases throughput. The integration with ERP optimizes the entire production flow, from materials management to order fulfillment, resulting in cost savings and higher production efficiency.'
        },
        {
          icon: <FaDatabase className="text-blue-500 text-2xl" />,
          title: 'Accurate Data for Business Decisions',
          description: 'MES ensures that accurate, real-time data from the shop floor is fed into your ERP, providing better insights into production performance. This allows managers to make more informed decisions about inventory, procurement, and capacity planning, aligning manufacturing operations with broader business objectives.'
        },
        {
          icon: <FaExpandArrowsAlt className="text-blue-500 text-2xl" />,
          title: 'Greater Flexibility and Scalability',
          description: 'The MES system can be easily scaled as your business grows. As production demands increase, the system can handle more complex workflows, product lines, and customization requirements, without disrupting existing operations.'
        },
        {
          icon: <FaThumbsUp className="text-blue-500 text-2xl" />,
          title: 'Improved Product Quality',
          description: 'MES offers continuous monitoring of production quality, enabling businesses to identify and address quality issues early in the process. This integration with ERP ensures that quality standards are maintained consistently, leading to fewer defects, improved customer satisfaction, and reduced costs associated with rework.'
        }
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
      image: '/project/AVS-ERP.jpg',
      category: 'Smart Manufacturing',
      description: `End-to-end MES solutions for automotive suppliers with real-time production tracking and quality management systems.`,
      modules: [
        { name: 'Scheduling' },
        { name: 'Production Planning' },
        { name: 'PROND'},
        { name: 'Recording'},
        { name: 'Quality Inspection'},
        { name: 'HRMS'}
      ],
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
    },

    { 
      id: 16,
      title: 'SB Industries',
      link: '#',
      image: '/project/SBI.jpg',
      category: 'Industry 4.0',
      description:'An Enterprise Resource Planning (ERP) solution for SB Industries will help streamline business operations, integrate departments, and improve efficiency. The ERP system will unify various business processes into a single platform, ensuring real-time data access, automation, and better decision-making.', 
      modules: [
        { name: 'Scheduling', description: '...' },
        { name: 'Production Planning', description: '...' },
        { name: 'PROND', description: '...' },
        { name: 'Recording', description: '...' },
        { name: 'Quality Inspection', description: '...' },
        { name: 'HRMS', description: '...' }
      ],
      features: [
        {
          icon: <FaEye className="text-blue-500 text-2xl" />,
          title: 'Real-Time Production Monitoring',
          description: 'Visibility into production activities, helping track progress, detect bottlenecks, and ensure timely delivery.Operators and managers can monitor machinery status, production rates, and downtime. Faster corrective actions ensure smoother manufacturing processes'
        },
        {
          icon: <FaSyncAlt className="text-blue-500 text-2xl" />,
          title: 'Quality Control and Traceability',
          description: 'Our ERP seamlessly integrates with your current ERP system, creating a fully connected environment. This integration ensures that data flows smoothly between production lines and back-office functions, providing comprehensive insights into the manufacturing process while keeping sales, purchase, and financial operations in sync.'
        },
        {
          icon: <FaRobot className="text-blue-500 text-2xl" />,
          title: 'Process Automation',
          description: 'Automation is a cornerstone of ERP, reducing manual input and ensuring consistency in production. From raw material tracking to finished product assembly, automated workflows eliminate repetitive tasks, allowing teams to focus on value-added activities.'
        },
        {
          icon: <FaCheckCircle className="text-blue-500 text-2xl" />,
          title: 'Quality Control and Traceability',
          description: 'MES enhances quality management by enabling real-time monitoring of product standards. Every stage of production is documented, and product quality is continuously tracked, ensuring compliance with industry standards. This helps reduce defects, improve product reliability, and ensure traceability for every unit produced.'
        },
        {
          icon: <FaCalendarAlt className="text-blue-500 text-2xl" />,
          title: 'Production Scheduling and Optimization',
          description: 'By utilizing real-time data from both the shop floor and ERP, MES helps optimize production scheduling. This ensures efficient use of resources, minimizes downtime, and maintains optimal throughput, increasing overall manufacturing performance.'
        }
      ],
    
      benefits: [
        {
          icon: <FaChartLine className="text-blue-500 text-2xl" />,
          title: 'Enhanced Operational Visibility',
          description: 'Integrating ERP with your MES system gives you a 360-degree view of your operations, from raw material procurement to finished goods, helping you make better-informed decisions.'
        },
        {
          icon: <FaCogs className="text-blue-500 text-2xl" />,
          title: 'Improved Manufacturing Efficiency',
          description: 'With real-time monitoring and automated process control, MES reduces downtime and increases throughput. The integration with ERP optimizes the entire production flow, from materials management to order fulfillment, resulting in cost savings and higher production efficiency.'
        },
        {
          icon: <FaDatabase className="text-blue-500 text-2xl" />,
          title: 'Accurate Data for Business Decisions',
          description: 'ERP ensures that accurate, real-time data from the shop floor is fed into your ERP, providing better insights into production performance. This allows managers to make more informed decisions about inventory, procurement, and capacity planning, aligning manufacturing operations with broader business objectives.'
        },
        {
          icon: <FaExpandArrowsAlt className="text-blue-500 text-2xl" />,
          title: 'Greater Flexibility and Scalability',
          description: 'The ERP system can be easily scaled as your business grows. As production demands increase, the system can handle more complex workflows, product lines, and customization requirements, without disrupting existing operations.'
        },
        {
          icon: <FaThumbsUp className="text-blue-500 text-2xl" />,
          title: 'Improved Product Quality',
          description: 'ERP offers continuous monitoring of production quality, enabling businesses to identify and address quality issues early in the process. This integration with ERP ensures that quality standards are maintained consistently, leading to fewer defects, improved customer satisfaction, and reduced costs associated with rework.'
        }
      ]
    },

    { 
      id: 17,
      title: 'Electrodigit',
      link: '#',
      image: '/Eptiq clients/ELECTRODIGIT.jpeg',
      category: 'Industry 4.0',
      description: `MES solution for electronics manufacturing with component-level traceability and real-time process control. Supports high-mix/low-volume production.`,
      modules: [
        { name: 'Scheduling', description: '...' },
        { name: 'Production Planning', description: '...' },
        { name: 'PROND', description: '...' },
        { name: 'Recording', description: '...' },
        { name: 'Quality Inspection', description: '...' },
        { name: 'HRMS', description: '...' }
      ],
      features: [
        {
          icon: <FaEye className="text-blue-500 text-2xl" />,
          title: 'Real-Time Production Monitoring',
          description: 'MES provides real-time visibility into production activities, helping track progress, detect bottlenecks, and ensure timely delivery. Operators and managers can monitor machinery status, production rates, and downtime, which leads to faster corrective actions.'
        },
        {
          icon: <FaSyncAlt className="text-blue-500 text-2xl" />,
          title: 'Integration with Existing ERP',
          description: 'Our MES seamlessly integrates with your current ERP system, creating a fully connected environment. This integration ensures that data flows smoothly between production lines and back-office functions, providing comprehensive insights into the manufacturing process while keeping sales, purchase, and financial operations in sync.'
        },
        {
          icon: <FaRobot className="text-blue-500 text-2xl" />,
          title: 'Process Automation',
          description: 'Automation is a cornerstone of MES, reducing manual input and ensuring consistency in production. From raw material tracking to finished product assembly, automated workflows eliminate repetitive tasks, allowing teams to focus on value-added activities.'
        },
        {
          icon: <FaCheckCircle className="text-blue-500 text-2xl" />,
          title: 'Quality Control and Traceability',
          description: 'MES enhances quality management by enabling real-time monitoring of product standards. Every stage of production is documented, and product quality is continuously tracked, ensuring compliance with industry standards. This helps reduce defects, improve product reliability, and ensure traceability for every unit produced.'
        },
        {
          icon: <FaCalendarAlt className="text-blue-500 text-2xl" />,
          title: 'Production Scheduling and Optimization',
          description: 'By utilizing real-time data from both the shop floor and ERP, MES helps optimize production scheduling. This ensures efficient use of resources, minimizes downtime, and maintains optimal throughput, increasing overall manufacturing performance.'
        }
      ],
    
      benefits: [
        {
          icon: <FaChartLine className="text-blue-500 text-2xl" />,
          title: 'Enhanced Operational Visibility',
          description: 'Integrating MES with your ERP system gives you a 360-degree view of your operations, from raw material procurement to finished goods, helping you make better-informed decisions.'
        },
        {
          icon: <FaCogs className="text-blue-500 text-2xl" />,
          title: 'Improved Manufacturing Efficiency',
          description: 'With real-time monitoring and automated process control, MES reduces downtime and increases throughput. The integration with ERP optimizes the entire production flow, from materials management to order fulfillment, resulting in cost savings and higher production efficiency.'
        },
        {
          icon: <FaDatabase className="text-blue-500 text-2xl" />,
          title: 'Accurate Data for Business Decisions',
          description: 'MES ensures that accurate, real-time data from the shop floor is fed into your ERP, providing better insights into production performance. This allows managers to make more informed decisions about inventory, procurement, and capacity planning, aligning manufacturing operations with broader business objectives.'
        },
        {
          icon: <FaExpandArrowsAlt className="text-blue-500 text-2xl" />,
          title: 'Greater Flexibility and Scalability',
          description: 'The MES system can be easily scaled as your business grows. As production demands increase, the system can handle more complex workflows, product lines, and customization requirements, without disrupting existing operations.'
        },
        {
          icon: <FaThumbsUp className="text-blue-500 text-2xl" />,
          title: 'Improved Product Quality',
          description: 'MES offers continuous monitoring of production quality, enabling businesses to identify and address quality issues early in the process. This integration with ERP ensures that quality standards are maintained consistently, leading to fewer defects, improved customer satisfaction, and reduced costs associated with rework.'
        }
      ]
    },

    
    // ... (Other projects follow similar enhanced structure)
  ];

  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <section className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-100 p-4">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">Project Not Found</h1>
        <Link 
          to="/" 
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          <FaArrowLeft className="mr-2" /> Back to Home
        </Link>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-100 text-gray-900 pt-20 pb-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
        
        {/* Project Header */}
        <div className="relative">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-48 sm:h-80 object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full p-4 sm:p-8 bg-gradient-to-t from-black/80">
            <h1 className="text-2xl sm:text-4xl font-bold text-white">{project.title}</h1>
            <p className="text-sm sm:text-lg text-gray-200 mt-1">{project.category}</p>
          </div>
        </div>

        <div className="p-4 sm:p-8">
          <div className="flex flex-col md:flex-row gap-6">
            
            {/* Main Content */}
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-4">Overview</h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                {project.description}
              </p>

              {/* Key Features */}
              <h2 className="text-xl sm:text-2xl font-semibold text-blue-600 mt-6 mb-4">Features</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.features.map((feature, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <div className="flex items-center mb-3">
                      <span className="text-blue-500 mr-3">{feature.icon}</span>
                      <h3 className="text-lg sm:text-xl font-semibold">{feature.title}</h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <h2 className="text-xl sm:text-2xl font-semibold text-blue-600 mt-6 mb-4">Benefits</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.benefits.map((benefit, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <div className="flex items-center mb-3">
                      <span className="text-blue-500 mr-3">
                        {benefit.icon || <FaCheckCircle className="text-xl sm:text-2xl" />}
                      </span>
                      <h3 className="text-lg sm:text-xl font-semibold">
                        {benefit.title || benefit}
                      </h3>
                    </div>
                    {benefit.description && (
                      <p className="text-sm sm:text-base text-gray-600">
                        {benefit.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <a
                  href="/#contactus"
                  className="inline-flex items-center px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  <FaLink className="mr-2" /> Book Demo
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full md:w-80 lg:w-96 bg-gray-50 p-4 sm:p-6 rounded-xl">
              {project.modules ? (
                <>
                  <h2 className="text-xl font-semibold text-blue-600 mb-4 flex items-center">
                    <FaTools className="mr-2" /> Modules
                  </h2>
                  <ul className="space-y-3">
                    {project.modules.map((module, index) => (
                      <li key={index} className="bg-white p-3 rounded-lg shadow-sm">
                        <div className="flex items-center">
                          {moduleIcons[module.name.toLowerCase().replace(' ', '')]}
                          <div>
                            <h3 className="font-medium">{module.name}</h3>
                            <p className="text-sm text-gray-600 mt-1">
                              {module.description}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </>
              ) : project.techStack ? (
                <>
                  <h2 className="text-xl font-semibold text-blue-600 mb-4 flex items-center">
                    <FaTools className="mr-2" /> Tech Stack
                  </h2>
                  <ul className="space-y-2">
                    {project.techStack.map((tech, index) => (
                      <li key={index} className="bg-white p-3 rounded-lg shadow-sm">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center py-4 sm:py-6">
          <Link 
            to="/" 
            className="inline-flex items-center px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <FaArrowLeft className="mr-2" /> All Projects
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ProjectDetails;