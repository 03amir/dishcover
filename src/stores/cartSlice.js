import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({

    name:"cart",
    initialState:{
        data : []
    },
    reducers:{

        addToCart : (state,action) =>{
            state.data.push(action.payload)
        }
        ,
        removeFromCart: (state, action) => {
            const  id  = action.payload;
            console.log("deleting" , id)
            state.data = state.data.filter((el) => el.id !== id);
        }
        ,
        clearCart:(state)=>{
            state.data = [];
        }
    }
})

export const {
    addToCart,
    removeFromCart,
    clearCart
} = cartSlice.actions;

export default cartSlice.reducer;