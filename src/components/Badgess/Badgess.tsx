import React from 'react'
import { makeStyles  } from '@material-ui/core'
import { FavoriteBorder } from '@material-ui/icons';

const useStyles = makeStyles({
textdesc:{
 fontSize:'14px',
 marginLeft:'5px',
 marginBottom:'4.3rem',
 color:'#777777',
},
contentdiv:{
display:'flex',
flexDirection:'column'
}
})  

interface IntrinsicElements {
    iconprop: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    textabout: string;
}

function Badgess(props: IntrinsicElements) {
    const classes = useStyles();

    return (
        <div className={classes.contentdiv}>
             <h1 className={classes.textdesc}> {props.iconprop} {props.textabout}</h1>
           
        </div>
    )
}

export default Badgess
