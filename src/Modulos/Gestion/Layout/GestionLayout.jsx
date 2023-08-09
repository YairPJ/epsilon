
import { MenuAppBar } from '../Components/AppBar'
import { Box } from '@mui/system'
import React,{useEffect} from 'react'
import { Navbar } from '../../../UI/Components/Navar'
import { useDispatch, useSelector } from 'react-redux'

export const GestionLayout = ({children}) => {

  const dispatch = useDispatch();
  const { message } = useSelector(state => state.gestion);

  const appBarOptions={
    Inicio: '/Home/gestion',
  };

  let timer;

  useEffect(() => {
    if(message.length>0){
      switch (message[0]) {
        case "success":
          toast.success(message[1], {
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
          toast.error(message[1], {
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
          toast.info(message[1], {
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
          toast(message[1], {
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
    

  }, [message])

  return (
    <Box>
      <Navbar data={"GESTION DE ERP"} />
      <MenuAppBar appBarOptions={appBarOptions}/>
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: '110px' }}>
        
        {children}
      </Box>
    </Box>
  )
}
