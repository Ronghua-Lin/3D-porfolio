import {
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  fitness,
  graphQL,
  HR,
  angular,
  beaconfire,
  stonybrook,
  brookhaven,
  aws,
  searchJob,
  Employee_management,
  AI_shirt
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: reactjs,
  },
  {
    title: "Angular Developer",
    icon: angular,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Angular JS",
    icon: angular,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },

];

const experiences = [
  {
    title: "MERN Stack Developer",
    company_name: "beaconfire",
    icon: beaconfire,
    iconBg: "#383E56",
    date: "May 2022 - May 2023",
    points: [
      "Developing and maintaining web applications using React.js, node.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Teaching Assistance",
    company_name: "Stony Brook University",
    icon: stonybrook,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Dec 2021",
    points: [
      "Helping the professor to run lab sections where I needed to instruct students with guidance and distribute their works.",
      "Grading their assignment and lab reports in order to evaluate their skills.",
      "Running two weekly office hours to resolve their doubts.",
    ],
  },
  {
    title: "Research Assisstance",
    company_name: "Brookhaven National laboratory",
    icon: brookhaven,
    iconBg: "#383E56",
    date: "Jan 2020 - April 2020",
    points: [
      "Creating and simulating the laser collision in pre-formed plasma to discover and analyze result particles in 3D models using MATLAB and supercomputers.",
      "Constructed a field of ionization domain for the set-up environments to examine and approximate the particle behaviors for the result of the collision.",
      "Applied different filters like a gaussian mask in computer vision in order to obtain a clear output.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "comment",
    name: "",
    designation: "",
    company: "",
    image: "",
  },

];

const projects = [
  {
    name: "AI shirts",
    description:
      "An AI-powered website where users can customize and select their favorite shirt with AI assistant",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "openAI API",
        color: "pink-text-gradient",
      },
      {
        name: "vite",
        color: "yellow-text-gradient",
      },
    ],
    image: AI_shirt,
    source_code_link: "https://github.com/Ronghua-Lin/AI_Clothing",
  },

  {
    name: "Employee Management",
    description:
      "A web application that allows manager to manage his employees and assign notes for completing tasks",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "RTK query",
        color: "pink-text-gradient",
      },
      {
        name: "node",
        color: "yellow-text-gradient",
      },
    ],
    image: Employee_management,
    source_code_link: "https://github.com/Ronghua-Lin/Employee_management",
  },

  {
    name: "Search Job Application",
    description:
      "mobile-base platform that allows users to search IT jobs and apply positions on the associated websites.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "expo",
        color: "green-text-gradient",
      },
      {
        name: "expo-router",
        color: "pink-text-gradient",
      },
    ],
    image: searchJob,
    source_code_link: "https://github.com/Ronghua-Lin/Search_Jobs_App",
  },
  {
    name: "Fitness Application",
    description:
      "Web-based platform that allows users to search, study, and manage their fitness excersise, providing a convenient and efficient solution for their body training.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: fitness,
    source_code_link: "https://github.com/Ronghua-Lin/fitness-app",
  },
  {
    name: "Client Project Management",
    description:
      "Web application that enables users to manage their projects schedule and adding new client to their list using GraphQL approch.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "graphQL",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
    ],
    image: graphQL,
    source_code_link: "https://github.com/Ronghua-Lin/graphQL_practice",
  },
  {
    name: "HR Application",
    description:
      "A HR application for onboaring new employess and manage their visa status along with their housing and other information.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "ngRx",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
    ],
    image: HR,
    source_code_link: "https://github.com/Ronghua-Lin/HR_project",
  },
];

export { services, technologies, experiences, testimonials, projects };
