'use client'

import React, { useState, useRef } from "react";
import { RiMenu4Line, RiHeart2Line } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { FiShoppingBag } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { TbUser } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from '../../public/images/logo.png'
import Image from "next/image";

const Navbar = () => {
   const hamMenu = useRef(null);
   const crossMenu = useRef(null);
   const menuDrawerRef = useRef(null);

   const openMenu = () => {
      menuDrawerRef.current.classList.add("show-menu");
      hamMenu.current.classList.add("hidden");
   };

   const closeMenu = () => {
      menuDrawerRef.current.classList.remove("show-menu");
      hamMenu.current.classList.remove("hidden");
   };

   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   const [isSearchVisible, setIsSearchVisible] = useState(false);

   const toggleSearch = () => {
      setIsSearchVisible(!isSearchVisible);
   };

   return (
      <>
         <nav className="nav bg-custom-gray fixed z-10 top-0 left-0 right-0 md:block font-playfair">
            <div className="navContainer h-[55px] flex items-center justify-between max-w-full mx-9 my-1.5">
               <div className="h-[110px] w-[180px] flex items-center justify-center gpa-2">
                  <Image className="" width={"100%"} height={"100%"} src={Logo} alt="" />
               </div>
               <div>
                  <GiHamburgerMenu size={23} onClick={toggleMenu} />
               </div>
            </div>
            {/*search bar */}
            <div className={`relative transition-transform duration-300 ${isSearchVisible ? "transform scale-y-100" : "transform scale-y-0"}`}>
               {isSearchVisible && (
                  <div className="bg-white p-2 mt-2 flex items-center justify-center w-full">
                     <input type="text" placeholder="Search..." className="border-2 border-gray-300 rounded px-2 py-1 w-1/2" />
                  </div>
               )}
            </div>
         </nav>

         {/* desktop-slider  */}

         <div
            className={`sliderMenu ${
               isMenuOpen ? "translate-x-0" : "translate-x-full"
            } fixed top-0 right-0 h-full w-64 z-50 bg-white shadow-lg transition-transform ease-in-out duration-300`}
         >
            <div className="flex items-center justify-end mt-4 mx-4">
               <AiOutlineClose size={23} onClick={toggleMenu} />
            </div>
            <ul className="p-4  flex flex-col items-center font-playfair ">
               <li className="mb-2">Github</li>
               <li className="mb-2">Linkedin</li>
               <li className="mb-2">Gmail</li>
               {/* Add more menu items as needed */}
            </ul>
         </div>

         {/* mobile logo  */}

         <nav className="mobo-nav md:hidden">
            <header className="mobo-nav-bar h-[55px] bg-white flex z-50 justify-between items-center fixed top-0 left-0 right-0 px-[15px] ">
               <a href="" className="logo h-[40px] w-[40px]">
                  {/* <img src={Logo} className="max-w-full max-h-full"></img> */}
               </a>
               <span className="hamburger hover:text-blue-800" ref={hamMenu} onClick={openMenu}>
                  <RiMenu4Line size={23}></RiMenu4Line>
               </span>
               <main
                  className="mobo-nav-drawer  bg-white fixed top-0 -left-[100%] bottom-0 w-[70%] shadow-md px-[15px] transition-all ease-in-out "
                  ref={menuDrawerRef}
               >
                  <div className="top-layer flex justify-between items-center font-[] px-[10px] ">
                     <a href="" className="logo h-[40px] w-[37px] mt-[11px]">
                        {/* <Image alt="" className="max-h-[100%]" /> */}
                     </a>
                     <span id="cancel" ref={crossMenu} onClick={closeMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                           <path
                              fill="currentColor"
                              d="m12 10.586l4.95-4.95l1.415 1.415l-4.95 4.95l4.95 4.95l-1.415 1.414l-4.95-4.95l-4.95 4.95l-1.413-1.415l4.95-4.95l-4.95-4.95L7.05 5.638l4.95 4.95Z"
                           />
                        </svg>
                     </span>
                  </div>
                  <div className="mobo-menu">
                     <li className="min-w-[200px] text-center no-underline text-black font-[17px] flex justify-center py-[7px] relative">
                        <a href="#">HOME</a>
                     </li>
                     <li className="min-w-[200px] text-center no-underline text-black font-[17px] flex justify-center py-[7px] relative">
                        <a href="#">ABOUT</a>
                     </li>
                     <div className="social-menu">
                        <li className="min-w-[200px] text-center no-underline text-black font-[17px] flex justify-center py-[7px] relative">
                          
                           Hello
                        </li>
                        <li className="min-w-[200px] text-center no-underline text-white font-[17px] flex justify-center py-[7px] relative">
                          
                        </li>

                        <li className="min-w-[200px] text-center no-underline text-white font-[17px] flex justify-center py-[7px] relative">
                          
                        </li>
                     </div>
                  </div>
               </main>
            </header>
         </nav>
      </>
   );
};
export default Navbar;