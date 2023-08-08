import { Box } from '@mui/system';
import React, { useEffect, useRef } from 'react';
import { Navbar } from '../../../UI/Components/Navar';
import { NavarRRHH } from '../Components/NavarRRHH';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { clearMessage } from '../../../store/erpApp/Solicitud';
import { useDispatch, useSelector } from 'react-redux';

export const RRHHLayout = ({ children }) => {
  const dispatch = useDispatch();
  const { mesaggeSaved } = useSelector(state => state.solicitud);

  let timer;

  useEffect(() => {
    if(mesaggeSaved.length>0){
      switch (mesaggeSaved[0]) {
        case "success":
          toast.success(mesaggeSaved[1], {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
            break;
        case "error":
          toast.error(mesaggeSaved[1], {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
            break;
        case "info":
          toast.info(mesaggeSaved[1], {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
          break;
      
        default:
          toast(mesaggeSaved[1], {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
          break;
      }

      const timer = setTimeout(() => {
        dispatch(clearMessage());
      }, 1000);
    }
    return () => clearTimeout(timer);
    

  }, [mesaggeSaved])

  const drawerWidth = 240;
  return (
    <Box>
      <Navbar data={"RECURSOS HUMANOS"} />
      <NavarRRHH />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: '50px' }}>
      <ToastContainer/>
        {children}
      </Box>
    </Box>
  );
};
