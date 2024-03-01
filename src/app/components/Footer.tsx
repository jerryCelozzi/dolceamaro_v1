import { Grid } from '@mui/material'
import React from 'react'

function Footer() {
    const styleCustom={
      
      minHeight:'10vh',
        background: 'rgb(255, 255, 255)', /* Sfondo bianco */
  backgroundImage: 'linear-gradient(180deg, rgba(255,239,239,1) 0%, rgba(252,237,180,1) 71%)', /* Effetto di gradiente */
        justifyContent:'center',
        borderBottom:'2px solid rgba(252, 237, 180, 1) '
    }
  return (
   <Grid container sx={styleCustom}>
    <Grid xs={12}item >
        
        </Grid>
        
   </Grid>
  )
}

export default Footer;
