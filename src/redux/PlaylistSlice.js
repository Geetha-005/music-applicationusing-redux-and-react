import { createSlice } from "@reduxjs/toolkit";

const PlaylistSlice = createSlice({
    name: "playlist",
    initialState: [], // ✅ Ensure it's an empty array (not undefined)
    reducers: {
        AddSong: (state, action) => {
            // console.log("Before:", [...state]); // Debugging: log previous state
           
          let exist= state.find((song)=>song.songIndex==action.payload.songIndex)
          if(exist){
            return 
          }
          else{
            state.push(action.payload);
            // console.log("After:", [...state]); 
          }
        },

        RemoveSong:(state,action)=>{
            return state.filter((song)=>(song.songIndex!==action.payload))

        }
    }
});

export const {AddSong,RemoveSong} = PlaylistSlice.actions;
export default PlaylistSlice.reducer;
