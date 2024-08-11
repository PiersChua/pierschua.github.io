import { Project } from "../types/project";
export const projects: Project[] = [
  {
    id: 1,
    title: "Wildfire Data Analysis",
    startDate: "Apr 2023",
    endDate: "Sep 2023",
    cardDesc:
      "Analysis of wildfire data to visualize impact and reveal underlying trends over the years",
    modalDesc: [
      "Analyzed wildfire data from Federal, Non-Federal and Interagency sources in the United States",
      "Created a dashboard in Tableau with KPIs to visualize the impact of wildfire over the years",
      "Implemented Logistic Regression in KNIME to predict Fire Size Class",
    ],
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
    modalDesc: [
      "Developed the app's interface with Java's swing library",
      "Implemented Model-View-Controller (MVC) design to separate business logic, data and GUI",
    ],
    cardImage: "./project_thumbnail_2.png",
    modalImages: [
      "./project_2_1.webp",
      "./project_2_2.webp",
      "./project_2_3.webp",
      "./project_2_4.webp",
    ],
    type: "Coursework",
    skills: ["Java", "UML", "OOP"],
  },
  {
    id: 3,
    title: "Image Classification of Transportation Infrastructure",
    startDate: "Oct 2023",
    endDate: "Mar 2024",
    cardDesc:
      "Image recognition model to predict 5 types of transportation infrastructure",
    modalDesc: [
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
    modalDesc: [
      "Built a smart home system integrating Raspberry PI and IoT sensors like BME280 in Ubuntu",
      "Created a flask app with REST API to control room lights and adjust air-conditioner",
      "Deployed MQTT to monitor temperature and humidity in real-time",
      "Designed a Grafana dashboard to visualize time-series sensor data",
    ],
    modalImages: [
      "./project_4_1.webp",
      "./project_4_2.webp",
      "./project_4_3.webp",
      "./project_4_4.webp",
      "./project_4_5.webp",
    ],
    type: "Coursework",
    skills: ["Python", "Ubuntu", "Flask", "MQTT", "Grafana", "Raspberry Pi"],
  },
  {
    id: 5,
    title: "BookBite",
    startDate: "Oct 2023",
    endDate: "Mar 2024",
    cardDesc: "Restaurant Reservation website inspired by Chope",
    modalDesc: [
      "Designed the restaurant reservation website with Bootstrap CSS",
      "Utilized SQL for database storage, with the Unit of Work pattern to manage CRUD operations across entities",
    ],
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
    skills: ["ASP.NET Blazor", "Entity Framework Core", "Git"],
  },
  {
    id: 6,
    title: "Airbnb Web Scraper",
    startDate: "July 2024",
    endDate: "Present",
    cardDesc:
      "Web scraping program to extract data from Airbnb listings using bs4 and Selenium",
    modalDesc: [
      "Developed an automated program to scrape details of Airbnb listings",
      "Enhanced program's efficiency by using ThreadPoolExecutor to scrape multiple listings concurrently",
    ],
    cardImage: "./project_thumbnail_6.png",
    modalImages: ["project_6_1.webp", "project_6_2.webp"],
    type: "Personal",
    skills: ["Python", "BeautifulSoup4", "Selenium"],
  },
];
