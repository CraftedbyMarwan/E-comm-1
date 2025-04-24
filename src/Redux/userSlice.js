import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice ({
    name:'userSlice',
    initialState: {
        is_loggedin: false,
        user: null
    },
    reducers: {
        rdx_login: (state,{payload}) => {
            state.is_loggedin= true;
            state.user= payload;
        },
        rdx_logout: (state) => {
            state.is_loggedin = false;
            state.user = null;
        },
    }

});
export default userSlice.reducer;
export const {rdx_login, rdx_logout} = userSlice.actions;