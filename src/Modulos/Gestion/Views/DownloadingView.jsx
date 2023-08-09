import { LinearProgress } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const DownloadingView = () => {
  return (
      <>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{width: '100%'}}>
                <LinearProgress />
            </Box>
        </div>

      </>
  )
}
