import React from 'react'
import { TiHome } from "react-icons/ti";
import { IoSearch } from "react-icons/io5";
import { RiPlayListFill } from "react-icons/ri";
import { IoHeart } from "react-icons/io5";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='w-full h-[90px] bg-black fixed bottom-0 md:top-0 text-white flex justify-around
     md:justify-center items-center gap-[50px] p-[10px] z-30 rounded-t-[30px] '>
        <Link to={"/"}>
        <TiHome className='w-[25px] h-[25px]'/>
        </Link>
        <Link to={"/search"}>
        <IoSearch className='w-[25px] h-[25px]'/>
        </Link>
        <Link to={"/playlist"}>
        <RiPlayListFill className='w-[25px] h-[25px]'/>
        </Link>
        <Link to={"/liked"}>
        <IoHeart className='w-[25px] h-[25px]'/>
        </Link>

      
    </div>
  )
}

export default Navbar
