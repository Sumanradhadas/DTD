export interface Course {
  id: string;
  name: string;
  program: 'DEEP' | 'KYP' | 'ADCA';
  track?: string;
  duration: number;
  description: string;
  icon: string;
  color: string;
  popular?: boolean;
}

export const deepTracks = [
  { id: 'back-office', name: 'Back Office', icon: '🗂️', color: 'orange' },
  { id: 'digital-designing', name: 'Digital Designing', icon: '🎨', color: 'purple' },
  { id: 'cad-careers', name: 'CAD Careers', icon: '🏗️', color: 'teal' },
  { id: 'digital-freelancing', name: 'Digital Freelancing', icon: '💻', color: 'blue' },
  { id: 'front-office', name: 'Front Office', icon: '🏢', color: 'green' },
  { id: 'it-hardware', name: 'IT Hardware, Networking & Cyber Security', icon: '🔐', color: 'indigo' },
  { id: 'services-management', name: 'Services Management', icon: '🧭', color: 'pink' },
  { id: 'new-collar', name: 'New Collar Track', icon: '🧠', color: 'violet' },
  { id: 'software-development', name: 'Software Development', icon: '💾', color: 'red' },
  { id: 'data-science', name: 'Data Science', icon: '📊', color: 'yellow' },
  { id: 'digital-creative-art', name: 'Digital Creative Art', icon: '🖌️', color: 'purple' },
  { id: 'financial-accounting', name: 'Financial Accounting', icon: '💰', color: 'green' },
];

export const allCourses: Course[] = [
  // DEEP - Software Development Track
  { id: 'deep-1', name: 'Foundations of Artificial Intelligence (AI) and ML', program: 'DEEP', track: 'software-development', duration: 60, description: 'Learn AI fundamentals, machine learning algorithms, and how data drives automation in today\'s digital world.', icon: '🤖', color: 'red', popular: true },
  { id: 'deep-2', name: 'WebCraft Fundamentals', program: 'DEEP', track: 'software-development', duration: 120, description: 'Master HTML, CSS, JavaScript and build responsive, modern websites from scratch.', icon: '🌐', color: 'red', popular: true },
  { id: 'deep-3', name: 'Python Programming Essentials', program: 'DEEP', track: 'software-development', duration: 60, description: 'Learn Python basics, data structures, and automation for real-world applications.', icon: '🐍', color: 'red' },
  { id: 'deep-4', name: 'Java Programming Foundation', program: 'DEEP', track: 'software-development', duration: 120, description: 'Build strong programming skills with Java, object-oriented concepts, and application development.', icon: '☕', color: 'red' },
  { id: 'deep-5', name: 'Mobile App Development with Flutter', program: 'DEEP', track: 'software-development', duration: 120, description: 'Create cross-platform mobile apps for Android and iOS using Flutter framework.', icon: '📱', color: 'red' },
  { id: 'deep-6', name: 'React.js Web Development', program: 'DEEP', track: 'software-development', duration: 60, description: 'Build dynamic, interactive web applications using React.js and modern JavaScript.', icon: '⚛️', color: 'red' },
  { id: 'deep-7', name: 'Node.js Backend Development', program: 'DEEP', track: 'software-development', duration: 60, description: 'Learn server-side JavaScript with Node.js and build scalable backend applications.', icon: '🟢', color: 'red' },
  { id: 'deep-8', name: 'Full Stack Web Development', program: 'DEEP', track: 'software-development', duration: 120, description: 'Master both frontend and backend development to build complete web applications.', icon: '🔧', color: 'red', popular: true },

  // DEEP - Data Science Track
  { id: 'deep-9', name: 'Data Analytics Fundamentals', program: 'DEEP', track: 'data-science', duration: 60, description: 'Learn to analyze data, create insights, and make data-driven decisions using modern tools.', icon: '📈', color: 'yellow', popular: true },
  { id: 'deep-10', name: 'Excel for Data Analysis', program: 'DEEP', track: 'data-science', duration: 60, description: 'Master advanced Excel functions, pivot tables, and data visualization techniques.', icon: '📊', color: 'yellow' },
  { id: 'deep-11', name: 'Python for Data Science', program: 'DEEP', track: 'data-science', duration: 120, description: 'Use Python libraries like Pandas, NumPy, and Matplotlib for data analysis and visualization.', icon: '🐍', color: 'yellow' },
  { id: 'deep-12', name: 'SQL and Database Management', program: 'DEEP', track: 'data-science', duration: 60, description: 'Learn SQL queries, database design, and data management for business applications.', icon: '🗄️', color: 'yellow' },
  { id: 'deep-13', name: 'Business Intelligence with Power BI', program: 'DEEP', track: 'data-science', duration: 60, description: 'Create interactive dashboards and reports using Microsoft Power BI for business insights.', icon: '📊', color: 'yellow' },
  { id: 'deep-14', name: 'Tableau Data Visualization', program: 'DEEP', track: 'data-science', duration: 60, description: 'Build stunning data visualizations and dashboards with Tableau software.', icon: '📉', color: 'yellow' },
  { id: 'deep-15', name: 'Machine Learning with Python', program: 'DEEP', track: 'data-science', duration: 120, description: 'Implement machine learning algorithms and build predictive models using Python.', icon: '🤖', color: 'yellow' },
  { id: 'deep-16', name: 'Big Data Analytics', program: 'DEEP', track: 'data-science', duration: 120, description: 'Learn big data technologies, Hadoop, Spark, and how to process large datasets.', icon: '🌐', color: 'yellow' },

  // DEEP - Digital Designing Track
  { id: 'deep-17', name: 'Graphic Design Fundamentals', program: 'DEEP', track: 'digital-designing', duration: 60, description: 'Learn design principles, color theory, and create stunning graphics for digital media.', icon: '🎨', color: 'purple', popular: true },
  { id: 'deep-18', name: 'Adobe Photoshop Mastery', program: 'DEEP', track: 'digital-designing', duration: 60, description: 'Master photo editing, manipulation, and digital art creation with Adobe Photoshop.', icon: '🖼️', color: 'purple' },
  { id: 'deep-19', name: 'Adobe Illustrator for Vector Graphics', program: 'DEEP', track: 'digital-designing', duration: 60, description: 'Create logos, icons, and vector illustrations using Adobe Illustrator.', icon: '✏️', color: 'purple' },
  { id: 'deep-20', name: 'UI/UX Design Principles', program: 'DEEP', track: 'digital-designing', duration: 120, description: 'Design user-friendly interfaces and enhance user experience for web and mobile apps.', icon: '📱', color: 'purple', popular: true },
  { id: 'deep-21', name: 'Figma for Interface Design', program: 'DEEP', track: 'digital-designing', duration: 60, description: 'Design modern interfaces and prototypes using Figma collaborative design tool.', icon: '🎨', color: 'purple' },
  { id: 'deep-22', name: 'Canva Pro for Social Media Graphics', program: 'DEEP', track: 'digital-designing', duration: 60, description: 'Create professional social media posts, banners, and marketing materials with Canva.', icon: '📸', color: 'purple' },
  { id: 'deep-23', name: 'Brand Identity Design', program: 'DEEP', track: 'digital-designing', duration: 60, description: 'Learn to create cohesive brand identities including logos, color schemes, and guidelines.', icon: '🏷️', color: 'purple' },

  // DEEP - Digital Creative Art Track
  { id: 'deep-24', name: 'Video Editing with Adobe Premiere Pro', program: 'DEEP', track: 'digital-creative-art', duration: 120, description: 'Edit professional videos, add effects, and create engaging content for digital platforms.', icon: '🎬', color: 'purple', popular: true },
  { id: 'deep-25', name: 'Motion Graphics with After Effects', program: 'DEEP', track: 'digital-creative-art', duration: 120, description: 'Create stunning motion graphics, animations, and visual effects for videos.', icon: '🎞️', color: 'purple' },
  { id: 'deep-26', name: '3D Modeling with Blender', program: 'DEEP', track: 'digital-creative-art', duration: 120, description: 'Learn 3D modeling, texturing, and rendering using Blender software.', icon: '🎭', color: 'purple' },
  { id: 'deep-27', name: 'Digital Photography', program: 'DEEP', track: 'digital-creative-art', duration: 60, description: 'Master camera settings, composition, and photo editing for professional photography.', icon: '📷', color: 'purple' },
  { id: 'deep-28', name: 'Animation Fundamentals', program: 'DEEP', track: 'digital-creative-art', duration: 60, description: 'Learn 2D animation principles and create animated stories and characters.', icon: '🎨', color: 'purple' },
  { id: 'deep-29', name: 'YouTube Content Creation', program: 'DEEP', track: 'digital-creative-art', duration: 60, description: 'Plan, shoot, edit, and optimize videos for successful YouTube channels.', icon: '📹', color: 'purple' },

  // DEEP - Digital Freelancing Track
  { id: 'deep-30', name: 'Digital Marketing Mastery', program: 'DEEP', track: 'digital-freelancing', duration: 120, description: 'Learn SEO, social media marketing, content strategy, and online advertising.', icon: '📱', color: 'blue', popular: true },
  { id: 'deep-31', name: 'Social Media Marketing Pro', program: 'DEEP', track: 'digital-freelancing', duration: 60, description: 'Master Facebook, Instagram, LinkedIn marketing and grow online presence effectively.', icon: '📲', color: 'blue' },
  { id: 'deep-32', name: 'Content Writing and Copywriting', program: 'DEEP', track: 'digital-freelancing', duration: 60, description: 'Write compelling content, blogs, and marketing copy that converts.', icon: '✍️', color: 'blue' },
  { id: 'deep-33', name: 'SEO (Search Engine Optimization)', program: 'DEEP', track: 'digital-freelancing', duration: 60, description: 'Optimize websites for search engines and drive organic traffic to websites.', icon: '🔍', color: 'blue' },
  { id: 'deep-34', name: 'Google Ads and PPC Marketing', program: 'DEEP', track: 'digital-freelancing', duration: 60, description: 'Create and manage effective Google Ads campaigns for businesses.', icon: '📊', color: 'blue' },
  { id: 'deep-35', name: 'Email Marketing Automation', program: 'DEEP', track: 'digital-freelancing', duration: 60, description: 'Build email campaigns, automate workflows, and grow customer engagement.', icon: '📧', color: 'blue' },
  { id: 'deep-36', name: 'E-commerce Management', program: 'DEEP', track: 'digital-freelancing', duration: 60, description: 'Set up and manage online stores on platforms like Shopify, WooCommerce, Amazon.', icon: '🛒', color: 'blue' },
  { id: 'deep-37', name: 'Freelancing Skills and Client Management', program: 'DEEP', track: 'digital-freelancing', duration: 60, description: 'Learn to find clients, manage projects, and build a successful freelance career.', icon: '💼', color: 'blue' },

  // DEEP - Back Office Track
  { id: 'deep-38', name: 'MS Office Suite Mastery', program: 'DEEP', track: 'back-office', duration: 120, description: 'Master Word, Excel, PowerPoint, and Outlook for professional office tasks.', icon: '📝', color: 'orange' },
  { id: 'deep-39', name: 'Advanced Excel for Business', program: 'DEEP', track: 'back-office', duration: 60, description: 'Learn advanced formulas, macros, VBA, and business analytics with Excel.', icon: '📊', color: 'orange' },
  { id: 'deep-40', name: 'Google Workspace Productivity', program: 'DEEP', track: 'back-office', duration: 60, description: 'Master Google Docs, Sheets, Slides, Drive, and collaborative tools.', icon: '📄', color: 'orange' },
  { id: 'deep-41', name: 'Business Communication Skills', program: 'DEEP', track: 'back-office', duration: 60, description: 'Develop professional communication, email etiquette, and presentation skills.', icon: '💬', color: 'orange' },
  { id: 'deep-42', name: 'Data Entry and Management', program: 'DEEP', track: 'back-office', duration: 60, description: 'Learn accurate data entry, database management, and record keeping.', icon: '⌨️', color: 'orange' },
  { id: 'deep-43', name: 'Office Administration Essentials', program: 'DEEP', track: 'back-office', duration: 60, description: 'Manage office operations, scheduling, documentation, and administrative tasks.', icon: '🗂️', color: 'orange' },

  // DEEP - Front Office Track
  { id: 'deep-44', name: 'Customer Service Excellence', program: 'DEEP', track: 'front-office', duration: 60, description: 'Deliver exceptional customer service and handle client interactions professionally.', icon: '🤝', color: 'green' },
  { id: 'deep-45', name: 'Reception and Front Desk Management', program: 'DEEP', track: 'front-office', duration: 60, description: 'Manage front desk operations, visitor management, and telephone etiquette.', icon: '🏢', color: 'green' },
  { id: 'deep-46', name: 'Hotel Management Basics', program: 'DEEP', track: 'front-office', duration: 60, description: 'Learn hotel operations, guest services, and hospitality management.', icon: '🏨', color: 'green' },
  { id: 'deep-47', name: 'Event Management and Coordination', program: 'DEEP', track: 'front-office', duration: 60, description: 'Plan, organize, and execute successful events and conferences.', icon: '🎉', color: 'green' },

  // DEEP - Financial Accounting Track
  { id: 'deep-48', name: 'Tally ERP 9 Complete Course', program: 'DEEP', track: 'financial-accounting', duration: 120, description: 'Master Tally software for accounting, inventory, GST, and financial management.', icon: '💰', color: 'green', popular: true },
  { id: 'deep-49', name: 'Basic Accounting and Bookkeeping', program: 'DEEP', track: 'financial-accounting', duration: 60, description: 'Learn fundamental accounting principles, journal entries, and ledger management.', icon: '📚', color: 'green' },
  { id: 'deep-50', name: 'GST and Taxation Basics', program: 'DEEP', track: 'financial-accounting', duration: 60, description: 'Understand GST filing, tax compliance, and Indian taxation system.', icon: '📋', color: 'green' },
  { id: 'deep-51', name: 'QuickBooks Accounting', program: 'DEEP', track: 'financial-accounting', duration: 60, description: 'Manage business finances, invoicing, and accounting with QuickBooks.', icon: '💼', color: 'green' },
  { id: 'deep-52', name: 'Financial Management for Business', program: 'DEEP', track: 'financial-accounting', duration: 60, description: 'Learn budgeting, financial planning, and business finance strategies.', icon: '📈', color: 'green' },

  // DEEP - CAD Careers Track
  { id: 'deep-53', name: 'AutoCAD 2D Drafting', program: 'DEEP', track: 'cad-careers', duration: 120, description: 'Create technical drawings and architectural plans using AutoCAD 2D.', icon: '📐', color: 'teal' },
  { id: 'deep-54', name: 'AutoCAD 3D Modeling', program: 'DEEP', track: 'cad-careers', duration: 120, description: 'Build 3D models and renderings for architecture and engineering projects.', icon: '🏗️', color: 'teal' },
  { id: 'deep-55', name: 'Revit Architecture', program: 'DEEP', track: 'cad-careers', duration: 120, description: 'Design buildings using BIM (Building Information Modeling) with Revit.', icon: '🏛️', color: 'teal' },
  { id: 'deep-56', name: 'SketchUp for Interior Design', program: 'DEEP', track: 'cad-careers', duration: 60, description: 'Create 3D interior designs and visualizations using SketchUp.', icon: '🛋️', color: 'teal' },
  { id: 'deep-57', name: 'Civil Engineering CAD', program: 'DEEP', track: 'cad-careers', duration: 120, description: 'Learn CAD tools for civil engineering drawings and infrastructure projects.', icon: '🌉', color: 'teal' },

  // DEEP - IT Hardware, Networking & Cyber Security Track
  { id: 'deep-58', name: 'Computer Hardware Assembly and Repair', program: 'DEEP', track: 'it-hardware', duration: 60, description: 'Learn to assemble, diagnose, and repair computer hardware components.', icon: '🔧', color: 'indigo' },
  { id: 'deep-59', name: 'Networking Fundamentals (CCNA)', program: 'DEEP', track: 'it-hardware', duration: 120, description: 'Understand network protocols, routing, switching, and network configuration.', icon: '🌐', color: 'indigo', popular: true },
  { id: 'deep-60', name: 'Cyber Security Essentials', program: 'DEEP', track: 'it-hardware', duration: 120, description: 'Learn to protect systems from cyber threats, malware, and security attacks.', icon: '🔐', color: 'indigo', popular: true },
  { id: 'deep-61', name: 'Ethical Hacking and Penetration Testing', program: 'DEEP', track: 'it-hardware', duration: 120, description: 'Master ethical hacking techniques to find and fix security vulnerabilities.', icon: '🕵️', color: 'indigo' },
  { id: 'deep-62', name: 'Linux System Administration', program: 'DEEP', track: 'it-hardware', duration: 60, description: 'Manage Linux servers, shell scripting, and system operations.', icon: '🐧', color: 'indigo' },
  { id: 'deep-63', name: 'Cloud Computing Basics (AWS)', program: 'DEEP', track: 'it-hardware', duration: 60, description: 'Learn cloud services, AWS fundamentals, and cloud infrastructure management.', icon: '☁️', color: 'indigo' },
  { id: 'deep-64', name: 'Server Management and Maintenance', program: 'DEEP', track: 'it-hardware', duration: 60, description: 'Configure, manage, and maintain servers for business applications.', icon: '🖥️', color: 'indigo' },

  // DEEP - Services Management Track
  { id: 'deep-65', name: 'Project Management Fundamentals', program: 'DEEP', track: 'services-management', duration: 60, description: 'Learn project planning, execution, monitoring, and team management.', icon: '📊', color: 'pink' },
  { id: 'deep-66', name: 'Business Process Management', program: 'DEEP', track: 'services-management', duration: 60, description: 'Optimize business processes, workflows, and operational efficiency.', icon: '⚙️', color: 'pink' },
  { id: 'deep-67', name: 'Quality Management Systems', program: 'DEEP', track: 'services-management', duration: 60, description: 'Implement quality standards, ISO processes, and continuous improvement.', icon: '✅', color: 'pink' },
  { id: 'deep-68', name: 'Supply Chain Management', program: 'DEEP', track: 'services-management', duration: 60, description: 'Manage logistics, inventory, procurement, and supply chain operations.', icon: '🚚', color: 'pink' },
  { id: 'deep-69', name: 'HR Management Basics', program: 'DEEP', track: 'services-management', duration: 60, description: 'Learn recruitment, employee management, and HR operations.', icon: '👥', color: 'pink' },

  // DEEP - New Collar Track
  { id: 'deep-70', name: 'Digital Literacy for Modern Workplace', program: 'DEEP', track: 'new-collar', duration: 60, description: 'Build essential digital skills for today\'s workplace environments.', icon: '💼', color: 'violet' },
  { id: 'deep-71', name: 'Soft Skills and Personality Development', program: 'DEEP', track: 'new-collar', duration: 60, description: 'Enhance communication, leadership, and professional soft skills.', icon: '🎯', color: 'violet' },
  { id: 'deep-72', name: 'Interview Preparation and Resume Building', program: 'DEEP', track: 'new-collar', duration: 60, description: 'Create impressive resumes and ace job interviews with confidence.', icon: '📝', color: 'violet' },
  { id: 'deep-73', name: 'Time Management and Productivity', program: 'DEEP', track: 'new-collar', duration: 60, description: 'Master time management techniques and boost personal productivity.', icon: '⏰', color: 'violet' },
  { id: 'deep-74', name: 'Critical Thinking and Problem Solving', program: 'DEEP', track: 'new-collar', duration: 60, description: 'Develop analytical thinking and creative problem-solving abilities.', icon: '🧠', color: 'violet' },
  { id: 'deep-75', name: 'Entrepreneurship Basics', program: 'DEEP', track: 'new-collar', duration: 60, description: 'Learn to start and manage your own business venture successfully.', icon: '🚀', color: 'violet' },
  { id: 'deep-76', name: 'Financial Literacy for Career Growth', program: 'DEEP', track: 'new-collar', duration: 60, description: 'Understand personal finance, investments, and wealth management.', icon: '💸', color: 'violet' },
  { id: 'deep-77', name: 'Remote Work and Virtual Collaboration', program: 'DEEP', track: 'new-collar', duration: 60, description: 'Master tools and skills for effective remote work and online collaboration.', icon: '🌍', color: 'violet' },
  { id: 'deep-78', name: 'Career Planning and Development', program: 'DEEP', track: 'new-collar', duration: 60, description: 'Plan your career path, set goals, and achieve professional growth.', icon: '🎓', color: 'violet' },
  { id: 'deep-79', name: 'English Communication Skills', program: 'DEEP', track: 'new-collar', duration: 60, description: 'Improve spoken and written English for professional communication.', icon: '🗣️', color: 'violet' },
  { id: 'deep-80', name: 'Workplace Ethics and Professionalism', program: 'DEEP', track: 'new-collar', duration: 60, description: 'Learn professional conduct, ethics, and workplace best practices.', icon: '⚖️', color: 'violet' },

  // KYP Courses
  { id: 'kyp-1', name: 'Basic Computer Skills', program: 'KYP', duration: 60, description: 'Learn fundamental computer operations, typing, and basic software usage.', icon: '💻', color: 'orange' },
  { id: 'kyp-2', name: 'Digital Literacy Foundations', program: 'KYP', duration: 60, description: 'Build essential digital skills for the modern workplace and daily life.', icon: '📱', color: 'orange' },
  { id: 'kyp-3', name: 'MS Office for Beginners', program: 'KYP', duration: 60, description: 'Get started with Word, Excel, and PowerPoint for basic office tasks.', icon: '📄', color: 'orange' },
  { id: 'kyp-4', name: 'Internet and Email Basics', program: 'KYP', duration: 60, description: 'Learn to browse internet safely and use email for professional communication.', icon: '🌐', color: 'orange' },
  { id: 'kyp-5', name: 'Social Media Awareness', program: 'KYP', duration: 60, description: 'Understand social media platforms and use them safely and effectively.', icon: '📲', color: 'orange' },
  { id: 'kyp-6', name: 'Job Readiness Skills', program: 'KYP', duration: 60, description: 'Prepare for employment with resume writing and interview skills.', icon: '👔', color: 'orange' },
  { id: 'kyp-7', name: 'Financial Awareness for Youth', program: 'KYP', duration: 60, description: 'Learn basic banking, digital payments, and financial planning.', icon: '💰', color: 'orange' },
  { id: 'kyp-8', name: 'Government Schemes and Digital Services', program: 'KYP', duration: 60, description: 'Access government services online and understand welfare schemes.', icon: '🏛️', color: 'orange' },

  // ADCA Courses
  { id: 'adca-1', name: 'Computer Fundamentals', program: 'ADCA', duration: 60, description: 'Comprehensive introduction to computers, hardware, and software basics.', icon: '🖥️', color: 'blue' },
  { id: 'adca-2', name: 'MS Word Advanced', program: 'ADCA', duration: 60, description: 'Master document creation, formatting, mail merge, and advanced features.', icon: '📝', color: 'blue' },
  { id: 'adca-3', name: 'MS Excel Advanced', program: 'ADCA', duration: 60, description: 'Learn advanced formulas, charts, data analysis, and automation.', icon: '📊', color: 'blue' },
  { id: 'adca-4', name: 'MS PowerPoint Professional', program: 'ADCA', duration: 60, description: 'Create impactful presentations with animations and design principles.', icon: '📽️', color: 'blue' },
  { id: 'adca-5', name: 'Database Management with Access', program: 'ADCA', duration: 60, description: 'Design databases, create queries, forms, and reports with MS Access.', icon: '🗄️', color: 'blue' },
  { id: 'adca-6', name: 'Internet Applications and Web Technologies', program: 'ADCA', duration: 60, description: 'Explore web browsing, online services, and basic web development.', icon: '🌐', color: 'blue' },
  { id: 'adca-7', name: 'C Programming Language', program: 'ADCA', duration: 120, description: 'Learn programming fundamentals with C language and algorithm development.', icon: '💻', color: 'blue' },
  { id: 'adca-8', name: 'Operating Systems (Windows & Linux)', program: 'ADCA', duration: 60, description: 'Understand and manage Windows and Linux operating systems.', icon: '🖥️', color: 'blue' },
  { id: 'adca-9', name: 'Computer Networks Basics', program: 'ADCA', duration: 60, description: 'Learn networking concepts, LAN, WAN, and network configuration.', icon: '🌐', color: 'blue' },
  { id: 'adca-10', name: 'Digital Graphics and Multimedia', program: 'ADCA', duration: 60, description: 'Create digital graphics, edit images, and work with multimedia files.', icon: '🎨', color: 'blue' },
];
