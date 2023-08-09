import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { solicitudSlice } from './erpApp'
import { VacantesSlice } from './Vacantes/Vacantes'
import { GestionSlice } from './Gestion/Gestion' 

export default configureStore({
  reducer: {
      auth: authSlice.reducer,
      solicitud: solicitudSlice.reducer,
      vacantes: VacantesSlice.reducer,
      gestion: GestionSlice.reducer,
  },
})