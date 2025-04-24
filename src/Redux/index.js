import { configureStore } from "@reduxjs/toolkit";
import appSlice from './appSlice';
import userSlice from './userSlice';
import settingsSlice from './settingsSlice'
import cartSlice from './cartSlice'

export default configureStore({
    reducer: {
        appSlice,userSlice,settingsSlice,cartSlice
    }
})