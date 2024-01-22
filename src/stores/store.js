import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './cartSlice'
import sidebarSlice from "./sidebarSlice";
import categoriesSlice from "./categoriesSlice";

const store = configureStore({
    reducer:{
        cart:cartSlice,
        sidebar:sidebarSlice,
        categories:categoriesSlice
    }
})

export default store;