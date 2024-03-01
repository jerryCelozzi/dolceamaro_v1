import { Grid, Typography, Stack } from "@mui/material";
import React from "react";

function Header() {
  const styleCustomContainer = {
    minHeight:'15vh',
    background: "rgb(255, 255, 255)", /* Sfondo bianco */
    backgroundImage: "linear-gradient(360deg, rgba(255,239,239,1) 0%, rgba(252,237,180,1) 71%)", /* Effetto di gradiente */
    justifyContent: "center",
    borderBottom: "2px solid rgba(252, 237, 180, 1) ",
  };

  const styleCustomLink = {
    
    
    borderRadius: '10px',
    width: '10%',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', // Centra il testo verticalmente
    border: '1px solid salmon',
    paddingInline:5,
    color:'orangered',
    fontSize: {
        xs: '0.8rem', // Dimensione del testo per schermi extra piccoli (mobile)
        sm: '1.2rem', // Dimensione del testo per schermi piccoli (tablet)
        md: '1.2rem',   // Dimensione del testo per schermi medi (desktop)
      },
  };

  
  return (
    <Grid container sx={styleCustomContainer} >
      <Grid item xs={12} style={{ textAlign: "center",color:'orangered'}} >
        
        <Typography variant="h4" >
          Stazione di Servizio dolceamaro
        </Typography>
        <Typography variant="body2">
          Asse Nord - Sud, 60128 Ancona AN
        </Typography>
      </Grid>

      <Grid item xs={12}
    
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "end",
          color: "salmon",
       
        }}
      >
      
          <Typography variant="h6" sx={styleCustomLink}>
            TABACCHI
          </Typography>
          <Typography variant="h6" sx={styleCustomLink}>
            BAR
          </Typography>
          <Typography variant="h6" sx={styleCustomLink}>
            SLOT
          </Typography>
          <Typography variant="h6" sx={styleCustomLink}>
            OFFERTE
          </Typography>
          
      </Grid>
    </Grid>
  );
}

export default Header;
