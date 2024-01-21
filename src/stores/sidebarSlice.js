import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({

    name : "sidebar" , 

    initialState :{
        isOpen : false
    },

    reducers:{
        
        openSideBar : (state)=>{
            console.log("inside open sidebar")
            state.isOpen = true;
        }, 
        closeSideBar: (state) => {
            state.isOpen = false;
        }
    }
})

export const {openSideBar , closeSideBar } = sidebarSlice.actions;

export default sidebarSlice.reducer;