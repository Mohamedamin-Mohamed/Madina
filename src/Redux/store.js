import { configureStore } from "@reduxjs/toolkit";
import userInfo from "./userSlice";
import userSlice from './userSlice'

const store = configureStore({
    reducer:{
        userInfo: userSlice
    }
})