import { createSlice } from '@reduxjs/toolkit';
export const GestionSlice = createSlice({
name: 'gestion',
initialState: {
    data: [],
    usuarios: [],
    isSaving: false,
    isLoading: false,
    userActiveDerechos: [],
    message: [],
    },
reducers: {
setData: (state, action)=>{
    state.isLoading=true;
    state.data=action.payload;
    state.isLoading=false;
},


}
});
// Action creators are generated for each case reducer function
export const { setData } = GestionSlice.actions;