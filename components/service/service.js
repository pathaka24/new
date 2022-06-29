import React from 'react'
import styles from './service.module.css'
import ServiceList from './serviceList'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; 
 
import { IconButton } from '@mui/material';
import Stack from '@mui/material/Stack';
 

const Service = () => {
   const data = [
    {
      id:1,
      imgUrl: '/service/service-5.jpg',
      serviceName:'Physiotherapy',
      des:'Lorem is free text no used by other agencies...'
    },
    {
      id:2,
      imgUrl: '/service/service-6.jpg',
      serviceName:'Massage Therapy',
      des:'Lorem is free text no used by other agencies...'
    },
    {
      id:3,
      imgUrl: '/service/service-7-1.jpg',
      serviceName:'Sport Injuries',
      des:'Lorem is free text no used by other agencies...'
    },
    {
      id:4,
      imgUrl: '/service/service-8.jpg',
      serviceName:'Chiropratic Therapy',
      des:'Lorem is free text no used by other agencies...'
    },
    {
      id:5,
      imgUrl: '/service/service-9-1.jpg',
      serviceName:'Clinical Pilates',
      des:'Lorem is free text no used by other agencies...'
    },
    {
      id:6,
      imgUrl: '/service/service-10.jpg',
      serviceName:'Work Injuries',
      des:'Lorem is free text no used by other agencies...'
    }
     
   ]

  return (
    <Stack direction="column"
    justifyContent="center"
    alignItems="center"
    spacing={2}>
        <div className={styles.title}>
             <div className ={styles.titles}>
                  <p>OUR SERVICES</p>
                  <h1>What We are Offering</h1>
             </div>

             
        </div>
       
          <div className={styles.card}>
          {
          data.map((item) => {
             console.log(item)
            return(
              <Stack 
         
         
              justifyContent="center"
              alignItems="center"
              spacing={2}
              >
              <ServiceList
              className={styles.cardItem}
                key={item.id}
                {...item}
              />
               </Stack>  
            )
          }
          )
      }
          </div>
        
        
    </Stack>
  )
}

export default Service