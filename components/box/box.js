import React from 'react'
import styles from './box.module.css'
import Boxlist from './boxlist'
import Button from '@mui/material/Button';

 const Box = () => {

       const data = [
       
        {
          id:1 , 
          num:'1',
          head: 'Body Relexation',
          background:'/static/feature-1.jpg',
          text:'Neque porro quisquam est, qui dolorem ipsum quia dolor.'
          
        },
        {
          id: 2, 
          num:'2',
          head: 'Body Treatment',
          background:'/static/feature-2.jpg',
          text:'Neque porro quisquam est, qui dolorem ipsum quia dolor.'
          
        }
       ]
  return (
    <div className={styles.boxContain}>
           <div className={styles.boxColor}>
                <h1>
                   2 Tips How Can Chiropractic Care Help You
                </h1> 
                <Button  className={styles.btn}variant="contained"   color="success">
                    Book Appointments
                </Button>
           </div>
           <div className = {styles.boxList}>
            {data.map((item)=> {
                  console.log(item)
                 return(
                  <Boxlist
                  key={item.id}
                   {...item}
               />
                 )
                     
            })}
         
           </div>
         
    </div>
  )
}


export default Box