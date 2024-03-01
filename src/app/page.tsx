"use client"
import { Box, Grid ,Stack} from '@mui/material'
import React from 'react'
import Slider from './components/Slider';

function page() {
  return (
   <Grid container sx={{backgroundColor:'white',minHeight:'75vh'}}>
    <Grid xs={12}item  style={{display:'flex',justifyContent:'center',marginTop:'4%'}}>
    <Grid container>
      <Grid item md={2} ></Grid>
      <Grid item xs={12} md={8}  sx={{display:'flex',justifyContent:'center'}}><Slider/></Grid>
      <Grid item  md={2} ></Grid>
      
      </Grid>
        
      </Grid>  
   </Grid>
  )
}

export default page
