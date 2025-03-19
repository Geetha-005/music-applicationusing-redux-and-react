
import React, { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../songs";

export const dataContext = createContext();

const UserContext = ({ children }) => {
    let audioRef = useRef(null); // Ref for the actual <audio> tag

    let [index, setIndex] = useState(0);
    let [playingSong,setPlayingSong]=useState(false)

   
    useEffect(() => {
      if (songsData.length > 0 && songsData[index]) {

          audioRef.current.src = songsData[index].song;
          audioRef.current.load();
          if(playingSong){
            playSong()
          }
          // audioRef.current.play().catch(error => console.log("Autoplay failed:", error));
      }
  }, [index]);

    function playSong(){
      setPlayingSong(true)
      audioRef.current.play();
    }
    function pauseSong(){
      setPlayingSong(false)
      audioRef.current.pause();
    }
    function nextSong(){
      setIndex((prev)=>(prev+1)%songsData.length)
      
    }

    function prevSong(){
      setIndex((prev)=>{
        if(prev==0){
          return songsData.length -1 
        }
        else{
          return prev-1
        }
    })
        
      
    
    }
    


    let value = {
        audioRef,
        setIndex,playSong,pauseSong,setPlayingSong,index,playingSong,nextSong,prevSong
    };

    return (
        <dataContext.Provider value={value}>
            {children}
            <audio ref={audioRef} controls className="hidden" /> 
        </dataContext.Provider>
    );
};

export default UserContext;







// import React, { createContext, useEffect, useRef, useState } from 'react'
// import { songsData } from '../songs';


// export const dataContext=createContext()
// const UserContext = ({children}) => {
//     let audioRef=useRef(new Audio())

//     let [index,setIndex]=useState(0); 
    
//     useEffect(()=>{
//         audioRef.current.src=songsData[index].song

//     },[index])
    
//     let value={
//         audioRef,
//     }


    
//   return (
//     <div>
//         <dataContext.Provider value={value}>

//         {children}
//         </dataContext.Provider>
     
      
//     </div>
//   )
// }

// export default UserContext