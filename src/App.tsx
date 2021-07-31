import React from 'react';
import './App.css';
import Toolbarcore from './components/Toolbar';
import { makeStyles  } from '@material-ui/core'
import Badgess from './components/Badgess';
import { 
  FavoriteBorder, DriveEta, StarBorder, MusicNote, Restaurant, 
  Face, PlayCircleFilled, AttachMoney, Movie , Code, LocalBar,
  LocalCafe, SmokeFree, Gavel
} from '@material-ui/icons';
import Formlast from './components/Formlast';



const useStyles = makeStyles({
  textfirst:{
    fontSize:'60px', 
    color:'#3e92cc',
   
  },
  divfirst:{
   width:'45rem',
   height:'37.5rem',
   marginLeft:'7rem',
   marginTop:'6rem',
  },
  textsecond:{
    color:'#777777',
    marginTop:'2rem'
  },
  textthird:{
    color:'#777777',
    fontSize:'15px',
    marginTop:'3rem',
    marginBottom:'3rem'
  },
  redtexts:{
    fontWeight:'bold',
    color:'red',
    fontSize:'18px',
    marginTop:'1rem',
  },
  divsecond:{
    width:'45rem',
   height:'37.5rem',
   marginLeft:'7rem',
   marginTop:'2rem',
  },
  titlesecond:{
   color:'red',
  },
  divicons:{
    display:'flex',
  },
  divicon1:{
   width:'30rem',
   heigth:'50rem'
  },
  divicon2:{
    width:'30rem',
    heigth:'50rem',
  },
  divthird:{
    marginLeft:'7rem',
    marginTop:'30rem',
  },
  estlista:{
    fontSize:'18px',
    marginBottom:'30px',
  },
  divfour:{
    marginLeft:'7rem',
    marginTop:'10rem',
  }


})




function App() {

const classes = useStyles();

  return (  
    <div className="App">
      <Toolbarcore/>  
        
          <div className={classes.divfirst}>

            <h1 className={classes.textfirst}>Projeto Seletivo para namorada 2021 </h1>
            <h1 className={classes.textsecond}>Presencial e via Zapzapdos</h1>
            <h1 className={classes.textthird}>Procuramos candidatos para a vaga de namorada do gabs. Residente na cidade de Russas-CE, 
               caso seja do mesmo estado já é um começo, é desejavel que a candidata seja legal, consiga 
               bater um bom papo, goste de joguinhos online e afins.</h1>
                  <h2 className={classes.redtexts}>Faixa salarial: <span  className={classes.textthird}>Amor e carinho de vez em quando</span> </h2> 
                  <h2 className={classes.redtexts}>Contratação: <span  className={classes.textthird}>Prest. de servico</span></h2> 
                  <h2 className={classes.redtexts}>Vagas: <span  className={classes.textthird}>1 (sai pra la com poligamia)</span></h2> 

          </div>
       


          <div className={classes.divsecond}>
               <h1 className={classes.titlesecond}>Beneficios</h1>
               <h1 className={classes.textthird}> Eai, eu sou o Gabriel, faço Ciencia da Computação na UFC(campus Russas), 
                 desenvolvo web e de acordo com meus amigo sou até bonitinho e engraçado.
               </h1>
               
               <div className={classes.divicons}>
                 <div className={classes.divicon1}>
                  <Badgess iconprop={<FavoriteBorder/>} textabout="Sei cozinhar um bocado de coisa, diria até que sou bom, casamento não é opção, mas pratos saborosos sim."/>
                  <Badgess iconprop={<DriveEta/>} textabout="Não tenho CNH, porém conto com 11 anos de experiencia em bicicletas."/>
                  <Badgess iconprop={<StarBorder/>} textabout="Acho que a unica medalha que ja ganhei foi de um vulcão em feira de ciencias."/>
                  <Badgess iconprop={<MusicNote/>} textabout="Toco violão, guitarra e kazoo, podemos fazer uma banda aos sabados." />
                  <Badgess iconprop={<Restaurant/>} textabout="Como tudo, sem problemas com alimentação." />
                  <Badgess iconprop={<PlayCircleFilled/>} textabout="Caso queira entender meus gostos musicais o spotify é perfeito, lá é lotado de tudo que gosto." />
                  <Badgess iconprop={<Face/>} textabout="Meus amigos dizem que sou bonitinho, mas caso você não ache, tenho certeza de que ao menos me visto muito bem." />
                 </div>


                 <div className={classes.divicon2}>
                 <Badgess iconprop={<AttachMoney/>} textabout="Não sou formado, acho que daqui a dois anos quem sabe, tenho muitos planos e pouco dinheiro." />
                 <Badgess iconprop={<Movie/>} textabout="Costumo assistir animes e séries de vez em quando, também gosto muito de mangás, e sim, gosto de pirata que estica." />
                 <Badgess iconprop={<Code/>} textabout="Atualmente, respiro javascripto e maizena, 100% team web, sem previsões de mudança" />
                 <Badgess iconprop={<LocalBar/>} textabout="Sou um cara simples, então uma boa companhia e poucas coisas me agradam" />
                 <Badgess iconprop={<LocalCafe/>} textabout="Garanto que meu café vai ser o melhor que vc já tomou hmmmmm." />
                 <Badgess iconprop={<SmokeFree/>} textabout="Se vc fuma se retire daqui imediatamente." />
                 <Badgess iconprop={<Gavel/>} textabout="Sou a favor do trabalho diario e putaria aos finais de semana." />
                 </div>

               </div>
          </div>


          <div className={classes.divthird}> 
             <h1 className={classes.titlesecond}> Requisitos</h1>

             <ul className={classes.textthird}>

						   <li className={classes.estlista} >Ter uma conversa bacana e tals, n ser carente nem surtada.</li>
						   <li className={classes.estlista} >Ter altos papos bala sobre tudo que possa imaginar.</li>
						   <li className={classes.estlista} >Ser de preferência da minha área e ter varios planos tops.</li>
						   <li className={classes.estlista} >Ter mais de 18 anos, pq né, ando do lado da lei sempre.</li>
						   <li className={classes.estlista} >Gostar de cachorro e gato.</li>
						   <li className={classes.estlista} >Ser cheirosa.</li>
						   <li className={classes.estlista} >Ter bom gosto musical, obrigatorio gostar de RHCP
						 	</li>
					   	<li className={classes.estlista} >Entender que to quase sempre ocupado com algo seja sério ou bobo, então não se aborrecer com vacuos e etc
							</li>
					  	<li className={classes.estlista}>Ter pelo menos 10 anos de experiencia com interwebs, referências e shitposts</li>
				    </ul>
          </div>

          
          <div className={classes.divfour}>
            <h1 className={classes.titlesecond}>Participe!</h1>
            <Formlast/>
          </div>

           
    </div>
  );
}

export default App;
