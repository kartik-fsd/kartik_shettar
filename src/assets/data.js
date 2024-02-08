
import { FaHtml5, FaJava ,FaReact ,FaNode ,FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript ,IoLogoVercel} from "react-icons/io5";
import { TbBrandReactNative } from "react-icons/tb";
import { SiMongodb , SiExpress ,SiMysql , SiPostman ,SiNetlify } from "react-icons/si";
import { LiaDocker } from "react-icons/lia";
import { TbBrandVscode , TbBrandNextjs} from "react-icons/tb";
import { RiOpenaiFill } from "react-icons/ri";


  export const optimizedData = [
    {
      name: "HTML",
      icon: FaHtml5,
      category: "skills",
    },
    {
      name: "CSS",
      icon: IoLogoCss3,
      category: "skills",
    },
    {
      name: "JavaScript",
      icon: IoLogoJavascript,
      category: "skills",
    },
    {
      name: "Node.js",
      icon: FaNode,
      category: "skills",
    },
    {
        name: "Express.js",
        icon: SiExpress,
        category: "skills",
    },
    {
      name: "Java",
      icon: FaJava,
      category: "skills",
    },
    {
      name: "React.js",
      icon: FaReact,
      category: "skills",
    },
    {
      name: "Next.js",
      icon: TbBrandNextjs,
      category: "skills",
    },
    {
      name: "React-Native",
      icon: TbBrandReactNative,
      category: "skills",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      category: "skills",
    },
    {
      name: "MySQL",
      icon: SiMysql,
      category: "skills",
    },
    {
      name: "Docker",
      icon: LiaDocker,
      category: "techTool",
    },
    {
      name: "Postman",
      icon: SiPostman,
      category: "techTool",
    },
    {
      name: "ChatGPT",
      icon: RiOpenaiFill,
      category: "techTool",
    },
    {
      name: "Vercel",
      icon: IoLogoVercel,
      category: "techTool",
    },
    {
      name: "Netlify",
      icon: SiNetlify,
      category: "techTool",
    },
    {
      name: "VSCode",
      icon: TbBrandVscode,
      category: "techTool",
    },
  ];
  
  export const experienceData =[ {
    id: 1,
    company: "Taskmo",
    logo: "https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/jruvwzafqvvlgqokrhbk", // Replace with actual logo URL or component
    title: "Full Stack Developer Intern",
    description: {
      summary: "Developed and implemented a CRM dashboard for a client company, optimizing business processes and elevating customer relationship management.",
      points: [
        "Utilized React.js to craft dynamic and responsive front-end components, integrating CSS libraries like react-strap, Bootstrap, and Material-UI for consistent styling.",
        "Orchestrated global state management and seamless data flow in the application using Redux, enriching user experience and refining interactions.",
        "Integrated diverse APIs into the dashboard, enabling real-time data retrieval and updates, thereby amplifying functionality and data precision.",
        "Collaborated closely with UI/UX designers, ensuring meticulous translation of design elements into the implementation.",
        "Employed Node.js on the back end to execute server-side logic and data administration, bolstering overall application robustness.",
        "Increased customer data accuracy and processing efficiency, improving customer service and engagement. Access via integrated admin panel, allowing internal staff to easily manage customers and related records.",
        "Developed a feature-packed CRM dashboard within the scheduled time, significantly surpassing client expectations."
      ]
    },
    dates: "Apr 2023 - Oct 2023",
    links: [
      {
        url: "https://github.com/company-a",
        icon: FaGithub
      },
      {
        url: "https://twitter.com/company_a",
        icon: FaTwitter
      },
      {
        url: "https://www.linkedin.com/company/taskmo-feedmypockets/",
        icon: FaLinkedin
      },
    ],
  },
  
]

export const Avatardata = {
  image:
    "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
  name: "Kartik Shettar",
  title: "Full Stack Developer | Frontend Developer",
  email: "1kartikshettar@gmail.com",
};