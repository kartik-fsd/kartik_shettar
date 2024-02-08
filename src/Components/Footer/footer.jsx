import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import { IoLogoInstagram } from "react-icons/io";

const socialMediaLinks = [
  {
    icon: <CiLinkedin />,
    label: "LinkedIn Profile",
    url: "https://www.linkedin.com/in/kartik-shettar-dev/",
  },
  {
    icon: <VscGithub />,
    label: "GitHub Profile",
    url: "https://github.com/kartik-fsd/",
  },
  {
    icon: <IoLogoInstagram />,
    label: "Instagram Profile",
    url: "https://www.instagram.com/kartik_shettar_/",
  },
];

function Footer() {
  return (
    <footer className="w-full bg-gray-900 shadow-xl shadow-neutral-950 mt-auto">
      <span className="my-2 flex space-x-4 items-center justify-center">
        {socialMediaLinks.map(({ icon, label, url }) => (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 text-xl hover:text-teal-500 cursor-pointer"
            aria-label={label}
          >
            {icon}
          </a>
        ))}
      </span>
      <div className="text-center my-2 text-sm tracking-wider text-teal-400">
        <h4>&copy; 2024 Created by Kartik Shettar</h4>
      </div>
    </footer>
  );
}

export default Footer;
