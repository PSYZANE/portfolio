import react, { useState } from "react";
import { TfiClose, TfiMenu } from "react-icons/tfi";

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  };
  
  return (
    <nav className="flex justify-between align-middle h-full p-1 sm:p-2 md:p-3">
      <div className="ml-1.5 sm:ml-5 md:ml-7 text-3xl font-bold text-blue-300">PSYZANE</div>
      <ul className="hidden md:flex text-1xl gap-3 font-normal mr-7">
        <a href="#About" className="group navbar_btn">
          About me
          <span class="navbar_btn_underline"></span>
        </a>
        <a href="#Projects" className="group navbar_btn">
          Projects
          <span class="navbar_btn_underline"></span>
        </a>
        <a href="#Contact" className="group navbar_btn">
          Contact me
          <span class="navbar_btn_underline"></span>
        </a>
        <a href="#Quotes" className="group navbar_btn">
          Quotes
          <span class="navbar_btn_underline"></span>
        </a>
        <a href="" className="group navbar_btn">
          Placeholder
          <span class="navbar_btn_underline"></span>
        </a>
      </ul>

      {/* Mobile hamburger menu */}
      <div
      onClick={handleNav}
       className="md:hidden align-middle my-auto">
        {
          nav ? 
          <TfiClose size={28}/> :
          <TfiMenu size={28}/>
        }
      </div>

      <div className={nav ? 'fixed top-11 right-0 w-[60%] min-w-fit max-w-[300px] h-fit p-5 bg-zinc-700 ease-in-out duration-500' : 'fixed right-[-100%] top-11 ease-in-out duration-300'}>
        <ul >
          <li className="py-3 w-full text-blue-300 font-semibold border-b border-blue-800 align-middle">About Me</li>
          <li className="py-3 w-full text-blue-300 font-semibold border-b border-blue-800">Projects</li>
          <li className="py-3 w-full text-blue-300 font-semibold border-b border-blue-800">Quotes</li>
          <li className="py-3 w-full text-blue-300 font-semibold border-b border-blue-800">Placeholder</li>
          <li className="py-3 w-full text-blue-300 font-semibold border-blue-800">Contact me</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar