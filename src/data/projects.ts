import { Project } from "../types/project";
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
    modalImages: ["./project_1_1.webp", "./project_1_2.webp"],
    type: "Coursework",
    skills: ["Tableau", "KNIME"],
  },
  {
    id: 2,
    title: "Food Ordering System",
    startDate: "Apr 2023",
    endDate: "Sep 2023",
    cardDesc: "A food ordering application built in Eclipse",
    modalDescs: [
      "Developed the app's interface with Java's swing library",
      "Implemented Model-View-Controller (MVC) design to separate business logic, data and GUI",
      "Applied core object-oriented principles",
    ],
    problemStatement:
      "Customers at hawker centres often face long queues and wait times when ordering their food and drinks, leading to inconvenience and inefficiency. As such, there is a need for a streamlined ordering system that allows customers to conveniently place orders, reducing wait times and improving the overall dining experience.",
    cardImage: "./project_thumbnail_2.png",
    modalImages: [
      "./project_2_1.webp",
      "./project_2_2.webp",
      "./project_2_3.webp",
      "./project_2_4.webp",
    ],
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
    modalImages: [
      "./project_3_1.webp",
      "./project_3_2.webp",
      "./project_3_3.webp",
      "./project_3_4.webp",
      "./project_3_5.webp",
    ],
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
      "A real estate developer is seeking a smart home system for their condominium project with specific features to enhance the residents' comfort, convenience, and energy efficiency. Through the use of smart devices, he/she would be able to remotely access the home appliances.",
    modalImages: [
      "./project_4_1.webp",
      "./project_4_2.webp",
      "./project_4_3.webp",
      "./project_4_4.webp",
      "./project_4_5.webp",
    ],
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
    modalImages: [
      "./project_5_1.webp",
      "./project_5_2.webp",
      "./project_5_3.webp",
      "./project_5_4.webp",
      "./project_5_5.webp",
      "./project_5_6.webp",
    ],
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
    modalImages: [
      "project_6_1.webp",
      "project_6_2.webp",
      "project_6_3.webp",
      "project_6_4.webp",
      "project_6_5.webp",
    ],
    type: "Personal",
    skills: ["Python", "BeautifulSoup4", "Selenium"],
  },
  {
    id: 7,
    title: "Fit SG",
    startDate: "Aug 2024",
    endDate: "Sep 2024",
    cardDesc: "A remake of Active SG's gym website",
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
    modalImages: [
      "project_7_1.webp",
      "project_7_2.webp",
      "project_7_3.webp",
      "project_7_4.webp",
      "project_7_5.webp",
      "project_7_6.webp",
      "project_7_7.webp",
      "project_7_8.webp",
      "project_7_9.webp",
    ],
    type: "Personal",
    skills: ["Next.js", "TypeScript", "PostgreSQL"],
  },
  {
    id: 8,
    title: "SGJobMarket",
    startDate: "Oct 2024",
    endDate: "Feb 2024",
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
    modalImages: [
      "project_8_1.webp",
      "project_8_2.webp",
      "project_8_3.webp",
      "project_8_4.webp",
      "project_8_5.webp",
      "project_8_6.webp",
      "project_8_7.webp",
    ],
    type: "Coursework",
    skills: ["Java", "PHP", "Android Studio", "MySQL"],
  },
];
