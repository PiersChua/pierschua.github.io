import { Project } from "../types/project";
export const projects: Project[] = [
  {
    id: 1,
    title: "Airbnb Web Scraper",
    startDate: "July 2024",
    endDate: "Present",
    desc: "Web scraping program to extract data from Airbnb listings using bs4 and Selenium.",
    image: "./2024_DList.jpg",
    skills: ["Python", "BeautifulSoup4", "Selenium"],
  },
  {
    id: 2,
    title: "Image Classification of Transportation Infrastructure",
    startDate: "Oct 2023",
    endDate: "Mar 2024",
    desc: "CNN model with >90% validation accuracy to recognize 5 types of transportation infrastructures",
    image: "./2024_DList.jpg",
    skills: ["Python", "Tensorflow"],
  },
  {
    id: 3,
    title: "Smart Home System",
    startDate: "Oct 2023",
    endDate: "Mar 2024",
    desc: "A system utilising IoT applications to remotely monitor and control home devices.",
    image: "./2024_DList.jpg",
    skills: ["Python", "Linux", "Flask", "MQTT"],
  },
  {
    id: 4,
    title: "BookBite",
    startDate: "Oct 2023",
    endDate: "Mar 2024",
    desc: "Restaurant Reservation website inspired by Chope",
    image: "./2024_DList.jpg",
    skills: ["ASP.NET Blazor", "HTML", "CSS", "JavaScript", "C#"],
  },
];
