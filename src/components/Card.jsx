import React, { useContext } from 'react'
import { songsData } from '../songs'
import { MdPlaylistAdd } from "react-icons/md";
import { IoHeartOutline } from "react-icons/io5";
import { dataContext } from '../context/UserContext';
import { useDispatch, useSelector } from 'react-redux';
import { AddSong,RemoveSong } from '../redux/PlaylistSlice';
import { MdOutlinePlaylistRemove } from "react-icons/md";
import { AddLiked,RemoveLiked} from '../redux/LikedSlice';
import { IoHeartSharp } from "react-icons/io5";


const Card = ({name,image,singer,songIndex}) => {
    let{playSong,setIndex,index}=useContext(dataContext)
    let dispatch=useDispatch()
    let gaana=useSelector(state=>state.playlist)
    const songExistInPlaylist=gaana.some((song)=>(song.songIndex===songIndex))
    //console.log(songExistInPlaylist)
    let likedSong=useSelector(state=>state.liked)
    
    const songExistInLiked=likedSong.some((song)=>(song.songIndex===songIndex))


  return (
    <div className='w-[90%] h-[70px] md:h-[120px] bg-gray-800 rounded-lg p-[5px] md:p-[10px] flex justify-center
    hover:bg-gray-600 transition-all'>
        <div className='flex justify-start items-center gap-[20px] w-[70%] h-[100%] 
        cursor-pointer' onClick={()=>{
            setIndex(songIndex)
            playSong()
        }}>

        <div>
        <img src={image} alt='' className='w-[60px] max-h-[60px] md:max-h-[100px] md:w-[100px] rounded-lg
                '/>

        </div>
        <div className='text-[15px] md:text-[20px]' >
            <div className='text-white text-[1.1em] font-bold text-center'>{name}</div>
            <div className='text-gray-400 text-[0.8em] font-semibold text-center'>{singer}</div>
        </div>

        </div>

        <div className='flex justify-center items-center gap-[28px] w-[30%] h-[100%] text-[15px] md:text-[20px] '>
            {!songExistInPlaylist && (
            <div onClick={()=>{
                
                    dispatch(AddSong({singer:singer,name:name,image:image,songIndex:songIndex}))
                
             } }>
        <MdPlaylistAdd className='text-white text-[1.5em] cursor-pointer' />
        </div>
            )}
            {songExistInPlaylist && (
            <div onClick={()=>{
                
                    dispatch(RemoveSong(songIndex))
                
             } }>
        <MdOutlinePlaylistRemove  className='text-white text-[1.5em] cursor-pointer' />
        </div>
            )}
            {!songExistInLiked && (

            <div onClick={()=>{
                dispatch(AddLiked({singer:singer,name:name,image:image,songIndex:songIndex}))
            }}>
                <IoHeartOutline className='text-white text-[1.3em] cursor-pointer'/>
           

            </div>
            )}

            {songExistInLiked && (
                <div onClick={()=>{
                    dispatch(RemoveLiked(songIndex))
                }}>
                    <IoHeartSharp className='text-white text-[1.3em] cursor-pointer'/>
               
    
                </div>
            )}
            
        </div>
      
    </div>
  )
}

export default Card

