import { useState } from "react";

import logo from "../images/S.jpg"

 function Header ()  {
  
  const  [isOpen, setIsOpen] = useState(false)

const handleOpen = () =>{
    setIsOpen(true)
}

const handleClose =() =>{
    setIsOpen(false)
}
  return <div class="bg-gray-100 text-gray-800 ">
    
    <div class="bg-white shadow-lg fade-in fixed  w-full">
        <div class="container mx-auto px-4 py-2  sm:flex sm:justify-between items-center">
          <div className="flex ">
          <img className="w-[50px] font-bold text-3xl" src={logo} alt="" />
            {/* <a href="#" class="font-bold text-xl text-indigo-600 pt-3 pr-2 ">𝒮𝒶𝒹𝑒𝓆 */}
            {/* </a> */}
            </div>
            <div class="  ">
              <ul style={{display: isOpen  === true ? "block" :"" }}  className=" hidden sm:flex text-1xl  mt-5 sm:mt-0 pt-3 pr-[100px]   gap-4">
                <li><a href="#about" class="text-gray-600 hover:text-indigo-600">About</a></li>
                <li><a href="#skills"class="text-gray-600 hover:text-indigo-600">Skills</a></li>
                <li> <a href="#contact" class="text-gray-600 hover:text-indigo-600">Contact</a></li>
                </ul>
<div>

                <i  onClick={handleOpen} style={{display: isOpen === true ?"none" :"" }} className= "fa-solid fa-bars pl-3 mb-2 absolute sm:hidden   right-3 top-2 text-4xl ml-[300px] "></i>


               <i  style={{display: isOpen  === true ? "block" :"" }} onClick={handleClose} className="    fa-regular fa-x  hidden  pl-3 mb-2 absolute sm:hidden right-3 top-6 text-4xl "></i>
               </div>
            </div>
            </div>
            </div>
            </div>
  
};

export default Header;