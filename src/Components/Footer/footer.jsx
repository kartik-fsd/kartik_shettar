import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import { IoLogoInstagram } from "react-icons/io";

function Footer() {
  return (
    <footer className="w-full bg-gray-900 shadow-xl shadow-gray-700 h-25 mt-auto">
      <span className="my-2 flex space-x-4 items-center justify-center">
        <CiLinkedin className="text-teal-400 text-xl hover:text-teal-500 cursor-pointer" />
        <VscGithub className="text-teal-400 text-xl hover:text-teal-500 cursor-pointer" />
        <IoLogoInstagram className="text-teal-400 text-xl hover:text-teal-500 cursor-pointer" />
      </span>
      <div className="text-center my-2 text-sm tracking-wider text-teal-400">
        <h4> 2024 &copy; Created by Kartik Shettar</h4>
      </div>
    </footer>
  );
}

export default Footer;

