// Import icons dynamically
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as TbIcons from "react-icons/tb";
import * as SiIcons from "react-icons/si";
import * as LiaIcons from "react-icons/lia";
import * as RiIcons from "react-icons/ri";
import hippo from "./project/dHippo.webp";
import notes from "./project/note.webp";
import movie from "./project/movie.webp";
import weather from "./project/weather.webp";
import sneaker from "./project/dripnseak.webp";
import job from "./project/job.webp";
import kartikIMg from "../assets/kartik.webp"

// Create a custom icon library
const icons = {
  FaHtml5: FaIcons.FaHtml5,
  IoLogoCss3: IoIcons.IoLogoCss3,
  IoLogoJavascript: IoIcons.IoLogoJavascript,
  FaNode: FaIcons.FaNode,
  SiExpress: SiIcons.SiExpress,
  FaJava: FaIcons.FaJava,
  FaReact: FaIcons.FaReact,
  TbBrandNextjs: TbIcons.TbBrandNextjs,
  TbBrandReactNative: TbIcons.TbBrandReactNative,
  SiMongodb: SiIcons.SiMongodb,
  SiMysql: SiIcons.SiMysql,
  LiaDocker: LiaIcons.LiaDocker,
  SiPostman: SiIcons.SiPostman,
  RiOpenaiFill: RiIcons.RiOpenaiFill,
  IoLogoVercel: IoIcons.IoLogoVercel,
  SiNetlify: SiIcons.SiNetlify,
  TbBrandVscode: TbIcons.TbBrandVscode,
};

// Custom icon utility function
const getIconByName = (name) => icons[name] || null;

export const optimizedData = [
  {
    name: "HTML",
    icon: getIconByName("FaHtml5"),
    category: "frontend",
  },
  {
    name: "CSS",
    icon: getIconByName("IoLogoCss3"),
    category: "frontend",
  },
  {
    name: "JavaScript",
    icon: getIconByName("IoLogoJavascript"),
    category: "frontend",
  },
  {
    name: "Node.js",
    icon: getIconByName("FaNode"),
    category: "backend",
  },
  {
    name: "Express.js",
    icon: getIconByName("SiExpress"),
    category: "backend",
  },
  {
    name: "Java",
    icon: getIconByName("FaJava"),
    category: "backend",
  },
  {
    name: "React.js",
    icon: getIconByName("FaReact"),
    category: "frontend",
  },
  {
    name: "Next.js",
    icon: getIconByName("TbBrandNextjs"),
    category: "frontend",
  },
  {
    name: "React-Native",
    icon: getIconByName("TbBrandReactNative"),
    category: "frontend",
  },
  {
    name: "MongoDB",
    icon: getIconByName("SiMongodb"),
    category: "database",
  },
  {
    name: "MySQL",
    icon: getIconByName("SiMysql"),
    category: "database",
  },
  {
    name: "Docker",
    icon: getIconByName("LiaDocker"),
    category: "devops",
  },
  {
    name: "Postman",
    icon: getIconByName("SiPostman"),
    category: "devops",
  },
  {
    name: "ChatGPT",
    icon: getIconByName("RiOpenaiFill"),
    category: "tools",
  },
  {
    name: "Vercel",
    icon: getIconByName("IoLogoVercel"),
    category: "cloud",
  },
  {
    name: "Netlify",
    icon: getIconByName("SiNetlify"),
    category: "cloud",
  },
  {
    name: "VSCode",
    icon: getIconByName("TbBrandVscode"),
    category: "tools",
  },
];

export const experienceData = [
  {
    id: 1,
    company: "Taskmo",
    logo: "https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/jruvwzafqvvlgqokrhbk", // Replace with actual logo URL or component
    title: "Full Stack Developer Intern",
    description: {
      summary:
        "Developed and implemented a CRM dashboard for a client company, optimizing business processes and elevating customer relationship management.",
      points: [
        "Utilized React.js to craft dynamic and responsive front-end components, integrating CSS libraries like react-strap, Bootstrap, and Material-UI for consistent styling.",
        "Orchestrated global state management and seamless data flow in the application using Redux, enriching user experience and refining interactions.",
        "Integrated diverse APIs into the dashboard, enabling real-time data retrieval and updates, thereby amplifying functionality and data precision.",
        "Collaborated closely with UI/UX designers, ensuring meticulous translation of design elements into the implementation.",
        "Employed Node.js on the back end to execute server-side logic and data administration, bolstering overall application robustness.",
        "Increased customer data accuracy and processing efficiency, improving customer service and engagement. Access via integrated admin panel, allowing internal staff to easily manage customers and related records.",
        "Developed a feature-packed CRM dashboard within the scheduled time, significantly surpassing client expectations.",
      ],
    },
    dates: "Apr 2023 - Oct 2023",
  },
];

export const Aboutdata = {
  image:  kartikIMg ,
  name: "Kartik Shettar",
  title: "Full Stack Developer | Frontend Developer",
  email: "1kartikshettar@gmail.com",
  greet: " Hey Everyone! I'm Kartik Shettar 👨‍💻 from India.",
  headline: "🚀 Passionate Full Stack Developer | 🌐 Frontend Developer",
  about:
    "With a Bachelor's degree in Computer Applications (BCA) and a comprehensive training in full-stack web development. Oh, joy! Recently completed an enlightening internship as a Full-stack Developer at TASKMO, where I honed my skills and gained invaluable hands-on experience. By combining my unparalleled technical expertise, overwhelming creativity, and an unwavering commitment to continuous learning, I aim to contribute to the most groundbreaking web projects and deliver solutions that are just so outstanding they might be too much for users to handle.Because, you know, that's just how I roll.",
};

export const projectsData = [
  {
    imgPath: notes,
    isFeatured: false,
    title: "Notes",
    description:"My online notes store provides a user-friendly platform for effortless note creation, management, and organization. The intuitive interface allows easy addition, reading, updating, and deletion of notes. Users can customize each note with titles and tags for efficient categorization and search. Ideal for keeping personal reminders, important information, and creative ideas organized and easily accessible.",
    ghLink: "https://github.com/kartik-fsd/Notes-To-do-List.git",
    isFullStack: true,
    skills: [
      "React.js",
      "JavaScript",
      "Node",
      "MongoDB",
      "Express.js",
      "CSS",
      "Bootstrap",
    ],
    keywords: [
      "React.js",
      "React-Router",
      "JavaScript",
      "Node",
      "JWT-Auth",
      "Mongoose",
      "MongoDB",
      "Express.js",
      "CORS",
      "API",
      "Responsive",
      "MERN-Stack",
      "Axios",
    ],
  },
  {
    imgPath: movie,
    isFeatured: true,
    title: "Movie- Glance",
    description:"Introducing my all-encompassing movie and TV series website – your go-to for all things entertainment. Explore a vast collection of film and show details, effortlessly staying up-to-date with your favorites. Our user-friendly platform simplifies the search for specific movies or series, offering a visually appealing layout. Find detailed information, watch trailers, and navigate seamlessly by title, genre, actors, directors, or keywords. Your one-stop destination for a streamlined entertainment experience.",
    ghLink: "https://github.com/kartik-fsd/Movie-Tv-Glance-main-master",
    demoLink: "https://movie-glance.netlify.app",
    isFrontend: true,
    skills: [
      "React.js",
      "JavaScript",
      "CSS",
      "Material-UI",
      "Responsive",
      "API",
    ],
    keywords: [
      "React.js",
      "JavaScript",
      "CSS",
      "Material-UI",
      "Responsive",
      "React-Router",
      "Movie-DB",
      "API",
      "Axios",
    ],
  },
  {
    imgPath: weather,
    isFeatured: false,
    title: "Weather",
    description:"Introducing my weather website – your user-friendly destination for up-to-date weather information worldwide. With our intuitive interface, effortlessly access accurate forecasts, current conditions, and essential weather data. Seamlessly search for specific locations and instantly retrieve detailed weather information, including temperature, humidity, wind speed, and more. Plan your activities with precision, thanks to our seamless user experience.",
     ghLink: "https://github.com/Kartikshettar/Weather-Forecast.git",
    demoLink: "https://weathers-now.netlify.app",
    isFrontend: true,
    skills: [
      "HTML",
      "JavaScript",
      "CSS",
      "AJAX",
      "JQuery",
      "Responsive",
      "API",
    ],
    keywords: [
      "HTML",
      "JavaScript",
      "CSS",
      "Responsive",
      "AJAX",
      "JQuery",
      "Movie-DB",
      "API",
    ],
  },
  {
    imgPath: sneaker,
    isFeatured: true,
    title: "Dripsneak",
    description:"I've developed a sophisticated sneaker e-commerce frontend using ReactJs, ensuring a top-tier user experience. The application boasts essential features, including seamless navigation with authentication. Users can effortlessly explore a diverse sneaker collection, utilizing filters for categories, discounts, prices, and ratings. The search function enhances convenience, allowing users to find products by name or category. Personalization is facilitated through user profiles, and the checkout process guarantees a secure and smooth payment experience. The website's responsive design ensures adaptability across various devices. Leveraging Cloudinary optimizes image deployment, making the site lightweight and faster. This project serves as a testament to my proficiency in crafting a resilient and user-centric e-commerce platform for high-end sneakers.",
    ghLink: "https://github.com/kartik-fsd/DripSneak.git",
    demoLink: "https://drip-sneak.vercel.app/",
    isFullStack: true,
    skills: [
      "React.js",
      "JavaScript",
      "React-Router",
      "AXIOS",
      "CSS",
      "MaterialUi",
    ],
    keywords: [
      "React.js",
      "JavaScript",
      "Node",
      "API",
      "React-Router",
      "Axios",
      "Responsive",
      "css",
    ],
  },
  {
    imgPath: hippo,
    isFeatured: true,
    title: "Hippo Digitals",
    description:"DigitalHippo is a dynamic digital marketplace built from scratch using NextJs 14, tRPC, TypeScript, Payload, and Tailwind. Whether you're a digital artist, musician, or just on the lookout for cool finds, DigitalHippo is your creative playground. Sell or discover digital creations effortlessly. Our secure shopping cart and Payload authentication ensure a seamless experience. The user interface is modern and clean, with charming emails for delightful interactions.",
     ghLink: "https://github.com/kartik-fsd/market_place.git",
    isFullStack: true,
    skills: ["Next.js", "TRPC", "Payload", "Zod", "Typescript", "CSS"],
    keywords: [
      "Next.js",
      "TRPC",
      "Payload",
      "Zod",
      "Typescript",
      "Responsive",
      "css",
    ],
  },
  {
    imgPath: job,
    isFeatured: false,
    title: "Native Jobs",
    description:"Crafted using NodeJs and React Native, our mobile app is designed for an engaging user experience and robust functionality. The UI is a masterpiece, seamlessly blending React Native components. Axios ensures dynamic connectivity to external APIs, keeping our app up-to-date. Search, pagination, and custom API data fetching hooks enhance navigation and efficiency. The dynamic home page showcases diverse job opportunities, while the Explore Page offers a smooth journey through job categories. Detailed job insights provide comprehensive information. We prioritize cleanliness and modularity in our code architecture, promoting reusability for a tech-art evolving app.",
    ghLink: "https://github.com/kartik-fsd/Native-Jobs.git",
    demoLink:
      "https://drive.google.com/file/d/1Sdkz265lIeOTp8S0iXB6Fr-tXgqsDSPD/view?usp=drive_link",
    isMobileApp: true,
    skills: ["React-Native", "JavaScript", "CSS", "Node.js", "Axios", "Expo"],
    keywords: [
      "React-Native",
      "JavaScript",
      "Responsive",
      "Mobile",
      "CSS",
      "Node.js",
      "Axios",
      "Expo",
    ],
  },
];
