import { createSlice } from "@reduxjs/toolkit";


const appSlice = createSlice({
    name:'appSlice',
    initialState:{
        show_modal:null,
    },
    reducers: {
        rdx_show_modal:(state,{payload}) => {
            state.show_modal = payload
        },
    }
});

export default appSlice.reducer
export const {rdx_show_modal} = appSlice.actions;