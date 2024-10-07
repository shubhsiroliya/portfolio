import logo from "../assets/logo.png";
import { FaLinkedin, FaGithubSquare, FaInstagramSquare} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return <nav className='mb-20 flex items-center justify-between py-6'>
    <div className="flex flex-shrink-0 items-center">
      <img className="mx-2 w-20" src={logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a target="_blank" href="https://drive.google.com/file/d/1v4ueOdiPCIzUGFaBMad4Si2xSXRXI0vx/view"  className="border-b text-sm">resume</a>
      <a target="_blank" href="https://www.linkedin.com/in/shubhsiroliya"><FaLinkedin/></a>
      <a target="_blank" href="https://github.com/shubhsiroliya"><FaGithubSquare/></a>
      <a target="_blank" href="https://x.com/siroliya_shubh"><FaSquareXTwitter/></a>
      <a target="_blank" href="https://www.instagram.com/shubh.siroliya"><FaInstagramSquare/></a>
    </div>
  </nav>
}

export default Navbar