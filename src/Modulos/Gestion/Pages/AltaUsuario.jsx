import React from 'react'
import { GestionLayout } from '../Layout/GestionLayout'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import { Box } from '@mui/system'
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';


export const AltaUsuario = () => {
  return (
    <>
        <GestionLayout>
        <Paper 
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, marginTop: '30px' }}
        
        >
         <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Correo Electronico" inputProps={{ 'aria-label': 'Correo Electronico' }}/>
         <IconButton>
            <SearchIcon/>
         </IconButton>         
        </Paper>
        </GestionLayout>
    </>
  )
}
