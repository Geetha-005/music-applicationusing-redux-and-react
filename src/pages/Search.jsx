import React, { useEffect, useState } from 'react'
import Player from '../components/Player'
import { MdSearch } from "react-icons/md";
import { songsData } from '../songs';
import Card from '../components/Card';
const Search = () => {

  let [input,setInput]=useState("")
  let [newList,setnewList]=useState([])

  useEffect(()=>{
    let a= songsData.filter((song)=>(song.name.toLowerCase().includes(input) || (song.singer.includes(input))|| (song.singer.toUpperCase().includes(input)) ||
    (song.name.includes(input))|| (song.name.toUpperCase().includes(input))))
    setnewList(a)

  },[input])
  return (
    <div className='bg-black w-[100%] h-[100vh] flex justify-start items-center flex-col 
    pt-[20px] md:pt-[100px] gap-[30px] '>
        <Player />
      
      <form action="" className='w-[90%] md:w-[60%] h-[60px] bg-gray-800
      flex justify-center items-center gap-5 rounded-lg overflow-hidden p-[15px] md:p-0'
      onSubmit={(e)=>{
          e.preventDefault()
      }}>

          <MdSearch  className='text-gray-500 text-[20px]'/>
        <input type="text" className='w-[90%] h-[100%] bg-gray-800
        outline-none border-0 text-white'  placeholder='search songs....' 
        onChange={(e)=>setInput(e.target.value)} value={input}/>



      </form>
      {
        input ?
      
      <div className='w-[100%] h-[65%] md:h-[100%] flex flex-col justify-start p-[10px] items-center gap-5 
      overflow-auto'>
        {newList.map((song)=>(
          <Card name={song.name} image={song.image} singer={song.singer} songIndex={song.id-1}/>

        ))}

      </div>:<div className='text-gray-700 text-[30px] font-semibold'>
        Search songs...
        </div>}
    </div>
  )
}

export default Search
