import { createSlice } from '@reduxjs/toolkit';
import { produce } from 'immer';

export const solicitudSlice = createSlice({
name: 'solicitud',
initialState: {
    isSaving: false,
    mesaggeSaved: [],
    solicitudes: [],
    active: [],

},
reducers: {
    creatingNewSolicitud:(state)=>{
        state.isSaving=true;
    },
    addSolicitud: (state, action)=>{
        state.solicitudes.push(action.payload);
        state.isSaving=false;

    },
    setActiveSolicitud: (state, action)=>{
        state.active=action.payload;
    },
    setSaving: (state, action)=>{
        state.solicitudes = action.payload;
    },
    deleteSolicitud: (state, action) => {
        state.active="";
        const update = state.solicitudes.filter(solicitud => solicitud.id !== action.payload);
        state.solicitudes=update;
    },
    
      
    cleanSolicitud: (state)=>{
        state.isSaving= false;
        state.mesaggeSaved= '';
        state.solicitudes= [];
        state.active='';
    },
    showMessage:(state, action)=>{
        state.mesaggeSaved=action.payload;
    },
    clearMessage: (state) => {
        state.mesaggeSaved = [];
      },




}
});
// Action creators are generated for each case reducer function
export const { addSolicitud, setActiveSolicitud, setSaving, deleteSolicitud, 
    updateSolicitud,creatingNewSolicitud, cleanSolicitud,showMessage,clearMessage} = solicitudSlice.actions;