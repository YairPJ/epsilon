import { Paper, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import { loadInfoDoc } from '../../../helpers/loadInfoDoc'
import { RRHHLayout } from '../Layout/RRHHLayout'

export const Asistencias = () => {
    const today = new Date().toISOString().split('T')[0];
    
    const serchInformation=()=>{
        const path=`/EPSILON SA DE CV/TiempoDeTrabajo/392023`
        loadInfoDoc(path);
    }
    
  return (
    <RRHHLayout>
        <Box sx={{marginTop: '50px'}}>
            <Box>
                <TextField onChange={serchInformation} id="outlined-basic" label="Fecha a consultar" variant="standard" type="date" defaultValue={today} InputLabelProps={{shrink: true}}/>
            </Box>
        </Box>
    </RRHHLayout>
  )
}
