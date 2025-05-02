import React from 'react'

const Navbar = () => {
  return (
    <div className="sticky top-0 flex h-full p-4">
      <div className="h_logo mr-auto ml-7 text-3xl font-semibold">PSYZANE</div>
      <ul className="text-1xl flex gap-3 font-normal mr-7">
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
        <a href="" className="group navbar_btn">
          Placeholder
          <span class="navbar_btn_underline"></span>
        </a>
        <a href="" className="group navbar_btn">
          Placeholder
          <span class="navbar_btn_underline"></span>
        </a>
      </ul>
    </div>
  )
}

export default Navbar