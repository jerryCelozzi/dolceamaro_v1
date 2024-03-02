"use client";
import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import Image from "next/image";

function page() {
  return (
    <Grid container sx={{ backgroundColor: "white", minHeight: "75vh" }}>
      <Grid xs={12} item style={{ display: "flex", justifyContent: "center" }}>
        <Grid container>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "center",alignItems:'center' }}
       
          >
            <Stack border={2} >
              <Box
                component="img"
                sx={{
                  height: 350,
                  display: "block",

                  overflow: "hidden",
                  width: "100%",
                }}
                src={"/logo.png"}
              />
            </Stack>
          </Grid>
          {/* 

        *** Image e prop Layout ***
        
        <Grid item xs={12} style={{display:'flex',justifyContent:'center'}}>
            <Stack width={'50%'}>
                <Image
                    src="/logo.png"
                    alt="cityopensource"
                    width={400}
                    height={10}
                    layout="responsive"
                />
            </Stack>
        </Grid> 
    
        */}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default page;
