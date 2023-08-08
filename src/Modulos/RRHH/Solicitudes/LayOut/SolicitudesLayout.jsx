import React, { useEffect } from 'react';
import { RRHHLayout } from '../../Layout/RRHHLayout';
import { Box } from '@mui/system';
import { SideBar } from '../Components/SideBar';
import { startLoadingSolicitudes } from '../../../../store/erpApp/Thunks';
import { useDispatch, useSelector } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { clearMessage } from '../../../../store/erpApp/Solicitud';




export const SolicitudesLayout = ({ children }) => {
  const dispatch = useDispatch();
  const { solicitudes } = useSelector(state => state.solicitud);
  const {mesaggeSaved} = useSelector(state => state.solicitud);


  const drawerWidth = 400;
 useEffect(() => {
    dispatch(startLoadingSolicitudes());
  }, [dispatch]);

  useEffect(() => {

  }, [solicitudes]);
  



  return (
    <RRHHLayout>
      <Box sx={{ display: 'flex' }}>

        <SideBar drawerWidth={drawerWidth} />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {children}
        </Box>
      </Box>
    </RRHHLayout>
  );
};
