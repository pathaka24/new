import React from 'react'
import styles from './boxlist.module.css'

const Boxlist = ({num , head , background , text}) => {
  return (
    <div className={styles.list}>
          <div 
              style= {{
                backgroundImage:`url(${background})`,
                width: '100%',
                height: '45vh',
              
                backgroundSize:'cover',
                backgroundPosition:'50% 50%'
    
             }} 
          >
            <div className={styles.listText}>
              <div className={styles.listTip} >
                     <h1>{num}</h1>
             </div>
           <h1  className={styles.listTextHead}>{head}</h1>
           <h2 className={styles.listTextHead1}>{text}</h2>
          </div>
            </div>
        
        
    </div>
  )
}

export default Boxlist