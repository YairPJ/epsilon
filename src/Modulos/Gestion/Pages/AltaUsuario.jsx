import React,{useState} from 'react'
import { GestionLayout } from '../Layout/GestionLayout'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import { Box } from '@mui/system'
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import { getAuthFirebase } from '../../../helpers';
import { useDispatch } from 'react-redux';
import { showMessage } from '../../../store/HomeReducer/Home';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { sendInfo } from '../../../helpers/sendInfo';
import { useSelector } from 'react-redux';
import { loadInfoDoc } from '../../../helpers/loadInfoDoc';
import { deleteDoc } from '@firebase/firestore';
import { deleteFirebaseDoc } from '../../../helpers/deleteFirebaseDoc';


export const AltaUsuario = () => {
  const dispatch = useDispatch();
  const {data} = useSelector(state=>state.gestion);
  const company = data[0].Nombre;

  const [emailCheck, setemailCheck] = useState("");

  const onInputChange=(event)=>{
    setemailCheck(event.target.value);
  }

  const vincularCuenta=async(check)=>{
    const path=`/DataUsers/${check}`
    const data={Activo: true, Empresa: company }
    sendInfo(path,data);
    dispatch(showMessage(['success','El usuario ha sido dado de alta en la empresa con exito!!!']));
    const path2=`/${company}/Usuarios/Derechos/${check}`;
    const data2={Gestion: false, RecursosHumanos: false};
    sendInfo(path2,data2);
    const path3=`/${company}/Usuarios/DataUsuarios/${check}`;
    const pathLoad=`/${company}/Usuarios/DataUsuarios/${emailCheck}`
    const data3 = await loadInfoDoc(pathLoad);
    sendInfo(path3, data3);
    deleteFirebaseDoc(pathLoad);
    
  }

  const checkEmail= async ()=>{
    try{
      const check = await getAuthFirebase(emailCheck);
      if(check){
        Swal.fire({
          title: '¿Estas seguro?',
          text: `Seguro que deseas dar de alta el email ${emailCheck}. Confirme que el email si es del usuario que realizo su registro  `,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Dar de Alta'
        }).then((result) => {
          if (result.isConfirmed) {
            vincularCuenta(check);
          }
        })
      }else{
        dispatch(showMessage(['error','El correo electronico no se encuentra registrado']))
      }
    }catch(error){
        dispatch(showMessage(['error',error]))
    }  
  }




  return (
    <>
        <GestionLayout>
        <Paper 
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, marginTop: '20px' }}
        >
         <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Correo Electronico" inputProps={{ 'aria-label': 'Correo Electronico' }} name="emailCheck" onChange={onInputChange} value={emailCheck}/>
         <IconButton onClick={checkEmail}>
            <SearchIcon/>
         </IconButton>         
        </Paper>
        </GestionLayout>
    </>
  )
}
