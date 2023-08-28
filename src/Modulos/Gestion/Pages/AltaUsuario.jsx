import React,{useState} from 'react'
import { GestionLayout } from '../Layout/GestionLayout'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import { Box } from '@mui/system'
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import { getAuthFirebase } from '../../../helpers';


export const AltaUsuario = () => {

  const [emailCheck, setemailCheck] = useState("");

  const onInputChange=(event)=>{
    setemailCheck(event.target.value);
  }

  const checkEmail=()=>{
      const check = getAuthFirebase(emailCheck);
      
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
