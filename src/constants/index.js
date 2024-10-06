import ecommerce from "../assets/projects/e-commerce.png";
import edulearn from "../assets/projects/edu-learn.png";
import chatIfY from "../assets/projects/chatIfY.png";
import portfolio from "../assets/projects/portfolio.png";

export const HERO_CONTENT = `I am an enthusiastic software developer with a talent for creating desktop and web apps that are scalable and reliable. I have developed my skills in front-end technologies such as React and Next.js, as well as back-end technologies like Node.js, Express, MongoDB, MySQL, and PostgreSQL. I have over a year of practical experience with various personal projects, and I have developed desktop applications using C#,.NET Core, MS SQL Server, and built notification systems using ASP.NET Core and SignalR. My objective is to use my skills to develop creative solutions that accelerate corporate expansion and provide outstanding user experiences.`;

export const ABOUT_TEXT = `I have a passion for developing effective and user-friendly online apps and am a committed and versatile software engineer. I have worked with a range of technologies throughout my more than a year of professional experience, including React, Next.js, Node.js, MySQL, PostgreSQL, MongoDB, C#,.NET, MSSQL Server, ASP.NET, and SignalR. I became a software engineer because I had a strong curiosity about how things worked. Over time, the profession has grown to become one in which I always want to master new skills and overcome obstacles. I work best in groups and take pleasure in finding creative solutions to challenging issues. I like to be active and experiment with new technologies while I'm not coding.`;

export const EXPERIENCES = [
  {
    year: "Aug 2023 - Present",
    role: "Software Developer ",
    company: "Tripta Innovations Pvt. Ltd.",
    description: `C# .NET Core as Major Tech Stack,T SQL as database. Contributed to the development of various new features and bug fixes of the desktop application. Implemented a notification system in the application using SignalR and ASP .NET Core. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["C#", ".NET", "MSSQL SERVER", "ASP .NET", "SignalR"],
  },
  {
    year: "Jan 2023 - Aug 2023",
    role: "Intern ",
    company: "Brillsense Pvt. Ltd.",
    description: `Contributed to the frontend of an e-commerce website. Improved search engine optimization for the website. 25% increase in code reusability and client-side performance. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: [
      "React.Js",
      "Node.js",
      "MongoDB",
      "Express",
      "PHP",
      "CodeIgnitor",
      "HTML",
      "CSS",
    ],
  },
];

export const PROJECTS = [
  {
    title: "e-commerce",
    image: ecommerce,
    description: ` Developed a full-fledged e-commerce website using MongoDB, React, Express, Redux-toolkit, Node.js, Material UI, Cloudinary, Chart.js, and Stripe.
        Integrated Stripe payment gateway, Utilized Cloudinary for efficient image management, 
        Incorporated Chart.js to generate insightful data visualizations, enabling data-driven decision making for business analysis and reporting.
        Utilized Redux-toolkit for state management, enhancing the scalability and maintainability of the application.`,
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux",
      "Material UI",
      "Chart.js",
    ],
    code: "https://github.com/shubhsiroliya/e-commerce",
    view: "",
  },
  {
    title: "edu-learn, Google Developer Student Club",
    image: edulearn,
    description: `Collaborated with a team of 4 members to develop a comrehensive learning platform as a part of GDSC Solution Challenge 2021 with goal statement of 'Quality Education'
       Developed using React Firebase.
       Collaborated closely with team members to brainstorm, plan, and execute the project, showcasing great teamwork and communication abilities.`,
    technologies: ["React", "Firebase"],
    code: "https://github.com/shubhsiroliya/Solution-Challenge",
    view: "https://drive.google.com/file/d/1d3DZPYFfAG5DQevDoELTda3us6pqju97/view",
  },
  {
    title: "chatIfY",
    image: chatIfY,
    description: `Developed a chat application,
       Frontend developed using React, TailwindCSS, DaisyUI.
       Backend developed using Node.js, Express.js. 
       Database utilised is MongoDB.
       For chat messaging functionality Web socket based library Socket.IO is utilized.`,
    technologies: [
      "React",
      "TailwindCSS",
      "DaisyUI",
      "Express",
      "Node.js",
      "MongoDB",
      "Socket.IO",
    ],
    code: "https://github.com/shubhsiroliya/chatnow",
    view: "https://chatify-0i6e.onrender.com/login",
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind CSS", "FramerMotion"],
    code: "",
    view: "/",
  },
];

export const CONTACT = {
  address: "Ujjain, Madhya Pradesh",
  phoneNo: "+91 9479760361",
  email: "siroliya.shubh@gmail.com",
};
