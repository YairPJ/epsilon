import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { solicitudSlice } from './erpApp'
import { VacantesSlice } from './Vacantes/Vacantes'

export default configureStore({
  reducer: {
      auth: authSlice.reducer,
      solicitud: solicitudSlice.reducer,
      vacantes: VacantesSlice.reducer,
  },
})