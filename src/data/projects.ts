import { Project } from "../types/project";
// Project 1
import p1_1 from "../assets/project_1_1.webp";
import p1_2 from "../assets/project_1_2.webp";

// Project 2
import p2_1 from "../assets/project_2_1.webp";
import p2_2 from "../assets/project_2_2.webp";
import p2_3 from "../assets/project_2_3.webp";
import p2_4 from "../assets/project_2_4.webp";

// Project 3
import p3_1 from "../assets/project_3_1.webp";
import p3_2 from "../assets/project_3_2.webp";
import p3_3 from "../assets/project_3_3.webp";
import p3_4 from "../assets/project_3_4.webp";
import p3_5 from "../assets/project_3_5.webp";

// Project 4
import p4_1 from "../assets/project_4_1.webp";
import p4_2 from "../assets/project_4_2.webp";
import p4_3 from "../assets/project_4_3.webp";
import p4_4 from "../assets/project_4_4.webp";
import p4_5 from "../assets/project_4_5.webp";
import p4_6 from "../assets/project_4_6.webp";
import p4_7 from "../assets/project_4_7.webp";

// Project 5
import p5_1 from "../assets/project_5_1.webp";
import p5_2 from "../assets/project_5_2.webp";
import p5_3 from "../assets/project_5_3.webp";
import p5_4 from "../assets/project_5_4.webp";
import p5_5 from "../assets/project_5_5.webp";
import p5_6 from "../assets/project_5_6.webp";
import p5_7 from "../assets/project_5_7.webp";

// Project 6
import p6_1 from "../assets/project_6_1.webp";
import p6_2 from "../assets/project_6_2.webp";
import p6_3 from "../assets/project_6_3.webp";
import p6_4 from "../assets/project_6_4.webp";
import p6_5 from "../assets/project_6_5.webp";

// Project 7
import p7_1 from "../assets/project_7_1.webp";
import p7_2 from "../assets/project_7_2.webp";
import p7_3 from "../assets/project_7_3.webp";
import p7_4 from "../assets/project_7_4.webp";
import p7_5 from "../assets/project_7_5.webp";
import p7_6 from "../assets/project_7_6.webp";
import p7_7 from "../assets/project_7_7.webp";
import p7_8 from "../assets/project_7_8.webp";
import p7_9 from "../assets/project_7_9.webp";

// Project 8
import p8_1 from "../assets/project_8_1.webp";
import p8_2 from "../assets/project_8_2.webp";
import p8_3 from "../assets/project_8_3.webp";
import p8_4 from "../assets/project_8_4.webp";
import p8_5 from "../assets/project_8_5.webp";
import p8_6 from "../assets/project_8_6.webp";
import p8_7 from "../assets/project_8_7.webp";
import p8_8 from "../assets/project_8_8.webp";
import p8_9 from "../assets/project_8_9.webp";

// Project 9
import p9_1 from "../assets/project_9_1.webp";
import p9_2 from "../assets/project_9_2.webp";
import p9_3 from "../assets/project_9_3.webp";
import p9_4 from "../assets/project_9_4.webp";
import p9_5 from "../assets/project_9_5.webp";
import p9_6 from "../assets/project_9_6.webp";
import p9_7 from "../assets/project_9_7.webp";
import p9_8 from "../assets/project_9_8.webp";

// Project 10
import p10_1 from "../assets/project_10_1.webp";
import p10_2 from "../assets/project_10_2.webp";
import p10_3 from "../assets/project_10_3.webp";

// Project 11
import p11_1 from "../assets/project_11_1.webp";
import p11_2 from "../assets/project_11_2.webp";
import p11_3 from "../assets/project_11_3.webp";
export const projects: Project[] = [
  {
    id: 1,
    title: "Wildfire Data Analysis",
    startDate: "Apr 2023",
    endDate: "Sep 2023",
    cardDesc:
      "Analysis of wildfire data to visualize impact and reveal underlying trends over the years",
    modalDescs: [
      "Analyzed wildfire data from Federal, Non-Federal and Interagency sources in the United States",
      "Created a dashboard in Tableau with KPIs to visualize the impact of wildfire over the years",
      "Implemented Logistic Regression in KNIME to predict Fire Size Class",
    ],
    problemStatement:
      "According to the Congressional Research Service (CRS), there were an average of 61,410 wildfires annually from 2013 to 2022, generating over 7.2 million acres of impact. With its increasing frequency, severity, and duration, wildfire exist as a grave issue in the United States. Therefore, analyzing wildfires is crucial to help relevant agencies understand its patterns, behaviors, and characteristics.",
    cardImage: "./project_thumbnail_1.png",
    modalImages: [p1_1, p1_2],
    type: "Coursework",
    skills: ["Tableau", "KNIME"],
  },
  {
    id: 2,
    title: "Food Ordering System",
    startDate: "Apr 2023",
    endDate: "Sep 2023",
    cardDesc: "Food ordering application built in Eclipse",
    modalDescs: [
      "Developed the app's interface with Java's swing library",
      "Implemented Model-View-Controller (MVC) design to separate business logic, data and GUI",
      "Applied core object-oriented principles",
    ],
    problemStatement:
      "Customers at hawker centres often face long queues and wait times when ordering their food and drinks, leading to inconvenience and inefficiency. As such, there is a need for a streamlined ordering system that allows customers to conveniently place orders, reducing wait times and improving the overall dining experience.",
    cardImage: "./project_thumbnail_2.png",
    modalImages: [p2_1, p2_2, p2_3, p2_4],
    type: "Coursework",
    skills: ["Java", "UML", "OOP", "MVC"],
  },
  {
    id: 3,
    title: "Image Classification of Transportation Infrastructure",
    startDate: "Oct 2023",
    endDate: "Mar 2024",
    cardDesc:
      "Image recognition model to predict 5 types of transportation infrastructure",
    modalDescs: [
      "Developed a Convolutional Neural Network (CNN) model with >90% validation accuracy to recognize Transportation Infrastructures",
      "Incorporated pre-trained models like VGG-16 to optimize the development accuracy",
      "Implemented image classification API service to deploy the trained model in a flask app",
    ],
    cardImage: "./project_thumbnail_3.png",
    modalImages: [p3_1, p3_2, p3_3, p3_4, p3_5],
    type: "Coursework",
    skills: ["Python", "Tensorflow"],
  },
  {
    id: 4,
    title: "Smart Home System",
    startDate: "Oct 2023",
    endDate: "Mar 2024",
    cardDesc:
      "A system utilising IoT applications to remotely monitor and control home devices",
    cardImage: "./project_thumbnail_4.png",
    modalDescs: [
      "Built a smart home system integrating Raspberry Pi and IoT sensors like BME280 in Ubuntu",
      "Created a flask app with REST API to control room lights and adjust air-conditioner",
      "Deployed MQTT to monitor temperature and humidity in real-time",
      "Designed a Grafana dashboard to visualize time-series sensor data",
    ],
    problemStatement:
      "real estate developer is seeking a smart home system for their condominium project with specific features to enhance the residents' comfort, convenience, and energy efficiency. Through the use of smart devices, he/she would be able to remotely access the home appliances.",
    modalImages: [p4_1, p4_2, p4_3, p4_4, p4_5, p4_6, p4_7],
    type: "Coursework",
    skills: ["Python", "Ubuntu", "Grafana", "Raspberry Pi", "InfluxDB"],
  },
  {
    id: 5,
    title: "BookBite",
    startDate: "Oct 2023",
    endDate: "Mar 2024",
    cardDesc: "Restaurant Reservation website inspired by Chope",
    modalDescs: [
      "Designed the restaurant reservation website with Bootstrap",
      "Utilized SQL for database storage, with the Unit of Work pattern to manage CRUD operations across entities",
    ],
    repository: "https://github.com/PiersChua/RestaurantReservation",
    cardImage: "./project_thumbnail_5.png",
    modalImages: [p5_1, p5_2, p5_3, p5_4, p5_5, p5_6, p5_7],
    type: "Coursework",
    skills: ["ASP.NET Blazor", "Entity Framework Core", "Git", "MySQL"],
  },
  {
    id: 6,
    title: "Airbnb Web Scraper",
    startDate: "July 2024",
    endDate: "Aug 2024",
    cardDesc: "Web scraping program to extract data from Airbnb listings",
    modalDescs: [
      "Developed an automated program to scrape details of Airbnb listings",
      "Created charts to analyze price and location trends, enabling informed decision making",
    ],
    problemStatement:
      "Being the primary person responsible for research when traveling, I often spend countless hours navigating through options to find the perfect place to stay. The time-consuming process of comparing amenities, prices, and locations was overwhelming and inefficient, which can be frustrating at times. To streamline this experience, I decided to develop a solution that accelerates the search for ideal accommodations.",
    repository: "https://github.com/PiersChua/webscrape",
    cardImage: "./project_thumbnail_6.png",
    modalImages: [p6_1, p6_2, p6_3, p6_4, p6_5],
    type: "Personal",
    skills: ["Python", "BeautifulSoup4", "Selenium"],
  },
  {
    id: 7,
    title: "Fit SG",
    startDate: "Aug 2024",
    endDate: "Sep 2024",
    cardDesc: "Remake of Active SG's gym website",
    modalDescs: [
      "Implemented authentication with Next-Auth v5.0, including OAuth providers and JWT-based sessions",
      "Utilized Next.js's server actions with Prisma ORM to perform CRUD operations",
      "Employed zod to perform form validation",
      "Designed the website's layout with Chakra UI",
    ],
    problemStatement:
      "As an avid gym bro in ActiveSG, I enjoy working out with others. Following the recent updates, I've noticed that the ActiveSG website falls short in certain areas. While it provides basic functionality, it lacks an engaging design with no call to action. The absence of interactive features and an appealing user experience makes it difficult to encourage the general public to participate in fitness activities. This is why i created Fit SG to inspire new users to stay active, while offering current users enhanced features all in a single platform.",
    repository: "https://github.com/PiersChua/nextjs-activesg",
    cardImage: "./project_thumbnail_7.png",
    modalImages: [p7_1, p7_2, p7_3, p7_4, p7_5, p7_6, p7_7, p7_8, p7_9],
    type: "Personal",
    skills: ["Next.js", "TypeScript", "PostgreSQL"],
  },
  {
    id: 8,
    title: "SGJobMarket",
    startDate: "Oct 2024",
    endDate: "Feb 2025",
    cardDesc: "A mobile job application platform",
    modalDescs: [
      "Styled the mobile application with Material Design 3",
      "Implemented server-side scripting with PHP to manage CRUD operations, with optimizations like prepared statements to execute SQL queries",
      "Developed JWT authentication for session management and controlled resource access",
      "Deployed backend server and database on Atspace",
    ],
    repository:
      "https://github.com/PiersChua/TP_MDAD_AndroidStudio_JobApplication",
    cardImage: "./project_thumbnail_8.png",
    modalImages: [p8_1, p8_2, p8_3, p8_4, p8_5, p8_6, p8_7, p8_8, p8_9],
    type: "Coursework",
    skills: ["Java", "PHP", "Android Studio", "MySQL"],
  },
  {
    id: 9,
    title: "AIRS",
    startDate: "Oct 2024",
    endDate: "Feb 2025",
    cardDesc: "AI-powered Recycling System for Sustainability",
    modalDescs: [
      "Built a Smart Recycling Bin that automatically classifies waste into its respective materials, along with a gamification system through a mobile application to reward users based on their recycling contributions",
      "Designed a portal for administrators to monitor and manage recycling data related to the bins and users",
      "Showcased the product at Sustainablity Seedling Summit to key stakeholders and environmentalists",
      "Deployed AIRS in TP campus on Earth Day 2025",
      "Achieved top 10 finalists in the Lee Hsien Loong Interactive Digital Media Smart Nation Award 2025",
    ],
    problemStatement:
      "Singapore faces a critical challenge with waste management. According to a report by the National Environment Agency, the nation's recycling rate has declined by 10% over the past decade. This issue is reflected in Temasek Polytechnic's (TP) 18.4% increase in waste disposal index from 2022 to 2023, largely due to an increase in physical events. It was later found that 40% of TP's general waste could have been recycled, but inefficiencies in waste segregation led to contamination, rendering these recyclables unrecoverable. Based on these statistics, it is clear that the problem stems from a lack of awareness and engagement among consumers.",
    cardImage: "./project_thumbnail_9.png",
    modalImages: [p9_1, p9_2, p9_3, p9_4, p9_5, p9_6, p9_7, p9_8],
    type: "Final Year Project",
    skills: ["Next.js", "TypeScript", "PostgreSQL", "Vercel"],
  },
  {
    id: 10,
    title: "BeautyBest",
    startDate: "Dec 2025",
    endDate: "Dec 2025",
    cardDesc: "A sample website for beauty and wellness businesses",
    modalDescs: [
      "Designed a fully mobile-responsive SIngle Page Application (SPA) to provide a smooth user experience across devices",
      "Implemented interactive UI components to enhance client engagement",
      "Integrated Cloudflare CDN to improve website performance and security",
      "Optimised performance and SEO to improve page load times and search engine visibility",
    ],
    problemStatement:
      "Many businesses struggle with establishing a professional online presence that attracts clients. A well-designed website can increase client engagement and enhance credibility, ultimately driving higher sales and growth.",
    cardImage: "./project_thumbnail_10.png",
    webUrl: "https://piers-template-beauty-best.netlify.app/",
    modalImages: [p10_1, p10_2, p10_3],
    type: "Template",
    skills: ["Next.js", "TypeScript", "Netlify", "Cloudflare", "SEO"],
  },
  {
    id: 11,
    title: "AutoPro",
    startDate: "Jan 2025",
    endDate: "Jan 2025",
    cardDesc: "A sample website for automotive servicing and repair businesses",
    modalDescs: [
      "Crafted a modern Multi-Page Application (MPA) that builds trust and look professional online",
      "Structured business content with a clear, chronological flow to guide visitor's enquiries",
      "Applied best SEO practices to help the website rank higher on search engines",
    ],
    problemStatement:
      "Automotive businesses often rely on word-of-mouth but struggle to convert online visitors into real customers. This project demonstrates how a well-structured, high-performance website can showcase services clearly, build confidence, and serve as a powerful lead-generation tool for businesses looking to grow online.",
    cardImage: "./project_thumbnail_11.png",
    webUrl: "https://piers-template-autopro.netlify.app/",
    modalImages: [p11_1, p11_2, p11_3],
    type: "Template",
    skills: ["Next.js", "TypeScript", "Netlify", "SEO"],
  },
];
