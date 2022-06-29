import React from 'react'
import styles from './content.module.css'
import Image from 'next/image'
 
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Content = (props) => {
    
  return (
    <div style ={{backgroundColor:`${props.color}` }}  >
        <div className={styles.main}>
            
        <div className={styles.imgContainer} >
             <div className={styles.img}>
             <Image src={props.imageUrl}  height={120} width={100} alt="healing hands "/>
            
         </div>
           
        </div>
          <div className={styles.desContainer}>
          
        <h2  style={{color:`${props.textColor}`}}>{props.service}</h2>
        <p style={{color:`${props.para}`}} >{props.des}</p>
          </div>
       
        <div className={styles.iconContainer}>
            <ArrowRightIcon  style={{color:`${props.textColor}`}}/>
             <p style={{color:`${props.textColor}`}}>Read More</p>
        </div>
        
        </div>
    </div>
  )
}

export default Content