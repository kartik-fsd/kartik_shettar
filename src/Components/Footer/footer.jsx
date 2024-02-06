import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import { IoLogoInstagram } from "react-icons/io";

function Footer() {
  return (
    <footer className="w-full bg-slate-50 shadow-inner h-25 mt-auto">
      <span className="my-2 flex space-x-4 items-center justify-center">
        <CiLinkedin className="text-yellow-600 text-2xl" />
        <VscGithub className="text-yellow-600 text-xl" />
        <IoLogoInstagram className="text-yellow-600 text-2xl" />
      </span>
      <div className="text-center my-2 text-sm tracking-wider text-yellow-600">
        <h4> 2024 &copy; Full Stack Developer Portfolio</h4>
        <h4 className="my-2">Created by Kartik Shettar</h4>
      </div>
    </footer>
  );
}

export default Footer;
