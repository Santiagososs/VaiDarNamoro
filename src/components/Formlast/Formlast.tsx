import React from 'react'
import { makeStyles  } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
root: {
 margin: theme.spacing(1),
 width: '55rem',
 display:'flex',
 
 },
 contentform:{
 marginRight:'5rem',
 width:'19rem',
 },
 divform:{
  marginTop:'2rem',
 },
 bigform:{
    marginRight:'5rem',
    width:'35rem',
 },
 embreve:{
   fontWeight:'bold',
   color:'red',
   fontSize:'30px',
   marginTop:'5rem',
 }




  }));

function Formlast() {
const classes = useStyles();

    return (
       
       <div className={classes.divform}>
            <form className={classes.root} noValidate autoComplete="off">
               <TextField  className={classes.contentform} id="outlined-basic" label="Nome/Apelido" variant="outlined" />
               <TextField className={classes.contentform}  id="outlined-basic" label="Zap/Telegram" variant="outlined" />
            </form>

            <form className={classes.root} noValidate autoComplete="off">
               <TextField  className={classes.contentform} id="outlined-basic" label="Cidade" variant="outlined" />
               <TextField className={classes.contentform}  id="outlined-basic" label="MBTI" variant="outlined" />
            </form>

            <form className={classes.root} noValidate autoComplete="off">
               <TextField multiline={true} rows={12} className={classes.bigform} id="outlined-basic" placeholder="Nao sabe o que escrever? Segue Dicas de coisas que podem ser relevantes!
                Com o que voce trabalha ou estuda? Quais seus hobbies? Idade? Que som voce curte? Posicionamento politico? Conquistas? Raça do seu dog? Memes que voce gosta?" variant="outlined" />
            </form>
            

            <h1 className={classes.embreve}>Inscrições liberadas em breve...</h1>
        </div>
    )
}

export default Formlast

