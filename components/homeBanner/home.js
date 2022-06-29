import React from 'react'
import styles from './home.module.css'
import background from '../../public/static/banner.jpg'
import Container from '../container/container'
import Service from '../service/service'
import Banner from '../banner/banner'
import  Box  from '../box/box'
import Testimon from '../testimon/testimon'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

import { styled } from '@mui/material/styles';
import Contact from '../contact/contact'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
 





 


const Home = (props) => {
       const { imgUrl} = props
  
  return (
    <div 
     className={styles.container}
    style= {{
      backgroundImage:`url(${imgUrl})`,
      width: '100%',
      height: '100%',
      position: 'absolute',
      backgroundSize:'cover',
      backgroundPosition:'50% 50%'
   }}>

      <div className={styles.subContainer}>
           <div className={styles.content}>
               <p>Welcome to physiotherapy clinic</p>
                <h1>We&aposre Here to Save Lives and Properties</h1>
                <button>
                     Discover More
                </button>
           </div>
      </div>  
        <Stack  
      
     >
          

        
        <Container />
    
      
       <Service />
      

       <Banner imgUrl='/static/proudly-1.jpg'  patter = "/static/pattern-1.jpg"/>
       

       <Box />
          
       <Testimon />
       <Contact imgUrl = "static/startup-1.jpg" />
        </Stack>
     
       
    </div>
  )
}

export default Home