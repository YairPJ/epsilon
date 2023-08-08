import { createSlice } from '@reduxjs/toolkit';
export const authSlice = createSlice({
name: 'name',
initialState: {
status: 'not-authenticated',
uid: null,
email: null,
name: null,
photoUrl: null,
errorMesaje: null,
},
reducers: {
    login :(state, {payload})=>{
        state.status = 'authenticated';
        state.uid = payload.uid;
        state.email = payload.email;
        state.name = payload.displayName;
        state.photoUrl = payload.photoURL;
        state.errorMesaje = payload.errorMesagge;

    },
    logOut:(state, {payload})=>{
        state.status = 'not-authenticated';
        state.uid = null;
        state.email = null;
        state.name = null;
        state.photoUrl = null;
        state.errorMesaje = payload?.errorMesagge;
    },
    checkingCredentials:(state)=>{
        state.status = 'checking';
    }
}
});
// Action creators are generated for each case reducer function
export const { login, logOut, checkingCredentials } = authSlice.actions;