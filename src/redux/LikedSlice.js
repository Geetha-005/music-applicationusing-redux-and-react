import { createSlice } from "@reduxjs/toolkit";

const LikedSlice = createSlice({
    name: "playlist",
    initialState: [], // ✅ Ensure it's an empty array (not undefined)
    reducers: {
        AddLiked: (state, action) => {
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

        RemoveLiked:(state,action)=>{
            return state.filter((song)=>(song.songIndex!==action.payload))

        }
    }
});

export const {AddLiked,RemoveLiked} = LikedSlice.actions;
export default LikedSlice.reducer;
