// Import icons dynamically
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as TbIcons from "react-icons/tb";
import * as SiIcons from "react-icons/si";
import * as LiaIcons from "react-icons/lia";
import * as RiIcons from "react-icons/ri";

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
    category: "skills",
  },
  {
    name: "CSS",
    icon: getIconByName("IoLogoCss3"),
    category: "skills",
  },
  {
    name: "JavaScript",
    icon: getIconByName("IoLogoJavascript"),
    category: "skills",
  },
  {
    name: "Node.js",
    icon: getIconByName("FaNode"),
    category: "skills",
  },
  {
    name: "Express.js",
    icon: getIconByName("SiExpress"),
    category: "skills",
  },
  {
    name: "Java",
    icon: getIconByName("FaJava"),
    category: "skills",
  },
  {
    name: "React.js",
    icon: getIconByName("FaReact"),
    category: "skills",
  },
  {
    name: "Next.js",
    icon: getIconByName("TbBrandNextjs"),
    category: "skills",
  },
  {
    name: "React-Native",
    icon: getIconByName("TbBrandReactNative"),
    category: "skills",
  },
  {
    name: "MongoDB",
    icon: getIconByName("SiMongodb"),
    category: "skills",
  },
  {
    name: "MySQL",
    icon: getIconByName("SiMysql"),
    category: "skills",
  },
  {
    name: "Docker",
    icon: getIconByName("LiaDocker"),
    category: "techTool",
  },
  {
    name: "Postman",
    icon: getIconByName("SiPostman"),
    category: "techTool",
  },
  {
    name: "ChatGPT",
    icon: getIconByName("RiOpenaiFill"),
    category: "techTool",
  },
  {
    name: "Vercel",
    icon: getIconByName("IoLogoVercel"),
    category: "techTool",
  },
  {
    name: "Netlify",
    icon: getIconByName("SiNetlify"),
    category: "techTool",
  },
  {
    name: "VSCode",
    icon: getIconByName("TbBrandVscode"),
    category: "techTool",
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
  image:
    "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
  name: "Kartik Shettar",
  title: "Full Stack Developer | Frontend Developer",
  email: "1kartikshettar@gmail.com",
  greet: " Hey Everyone! I'm Kartik Shettar 👨‍💻 from India.",
  headline: "🚀 Passionate Full Stack Developer | 🌐 Frontend Developer",
  about:
    "With a Bachelor's degree in Computer Applications (BCA) and a comprehensive training in full-stack web development. Oh, joy! Recently completed an enlightening internship as a Full-stack Developer at TASKMO, where I honed my skills and gained invaluable hands-on experience. By combining my unparalleled technical expertise, overwhelming creativity, and an unwavering commitment to continuous learning, I aim to contribute to the most groundbreaking web projects and deliver solutions that are just so outstanding they might be too much for users to handle.Because, you know, that's just how I roll.",
};
