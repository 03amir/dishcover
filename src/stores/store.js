import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './cartSlice'
import sidebarSlice from "./sidebarSlice";

const store = configureStore({
    reducer:{
        cart:cartSlice,
        sidebar:sidebarSlice
    }
})

export default store;