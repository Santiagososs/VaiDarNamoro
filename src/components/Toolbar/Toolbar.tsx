import React from 'react'
import {AppBar, IconButton,Typography, Button, makeStyles  } from '@material-ui/core'
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme)=>({
divcore:{
  display: 'flex',

},

buttons:{
    color: 'white',
    

},
spacer: {
    flex: '1 1 auto',

},
barcolor:{
background:'#0A2463'
}

}))


function Toolbarcore() {

 const classes = useStyles();

    return (
      
      <div className={classes.divcore}>
    <AppBar position="fixed">
     <Toolbar className={classes.barcolor}>
           
        <Typography variant="h6">
            Inicio
        </Typography>
     <div className={classes.spacer}/>
    <Button color="inherit" className={classes.buttons}>Sobre a vaga</Button>
    <Button color="inherit" className={classes.buttons}>Beneficios</Button>
    <Button color="inherit" className={classes.buttons}>Requisitos</Button>
    <Button color="inherit" className={classes.buttons}>Participar</Button>
     </Toolbar>
    </AppBar>
        </div>
   
    )
}

export default Toolbarcore
