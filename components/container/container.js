
import React from 'react'
import styles from './container.module.css'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Content from './content';

const Container = () => {
    const data = [
        {
             id:1,
            image: '/assets/4220.png',
            service: 'Expert Therapists',
            des:'We have team of fully qualified and dedicated personal to the patient',
            color:"#9E0036",
            textColor: "white" ,
            para: '#ededed'
        },
        {
            id:2,
           image: '/assets/clock.png',
           service: 'Emergency Service',
           des:'You will find us near you at any emergency service , We always with you',
           color:'#FFDC78',
           textColor: "black"
       },
       {
        id:3,
       image: '/assets/cun.webp',
       service: 'Emergency Service',
       des:'You will find us near you at any emergency service we work 24X7 ',
       color:'#F8F7F3',
       textColor: "back" 
   }    

    ]
     
  return (
    <div  className={styles.container} >
         {
            data.map((item ) => {
              return (
                <div key={item.id}   className={styles.containerList}>
                  <Content 
                 imageUrl={item.image} 
                  service={item.service} 
                  des={item.des} 
                  color={item.color} 
                  Icon={item.icon}
                  textColor={item.textColor}
                 para ={item.para}
                  />
                </div>
                

              )
            })
         }
      
    </div>
  )
}

export default Container