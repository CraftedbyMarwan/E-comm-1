import { createSlice } from "@reduxjs/toolkit";


const settingsSlice = createSlice({
    name:'settingsSlice',
    initialState:{
        is_loading:false,
        is_loading2:false,
    },
    reducers: {
        rdx_set_loading:(state,{payload}) => {
            state.is_loading = payload;
        },
        rdx_set_loading2:(state,{payload}) => {
            state.is_loading2 = payload;
        },
    }
});

export default settingsSlice.reducer;
export const { rdx_set_loading, rdx_set_loading2 } = settingsSlice.actions;