import React from 'react'
import styles from './banner.module.css'

const Banner = ({ imgUrl , pattern}) => {
  return (
    <div
        className={styles.main}
    >
        <div
          style= {{
            backgroundImage:`url(${imgUrl})`,
            width: '100%',
            height: '100vh',
            backgroundSize:'cover',
            backgroundPosition:'50% 50%'

         }}
         className={styles.banner} 
        > 
 
        </div>
         
         <div 
         
         style= {{
            backgroundImage:`url(${pattern})`,
            width: '100%',
            height: '100vh'
         }} 
          >
             <div className={styles.mainCon}>
             <h3>SOLUTIONS TO YOUR PAIN</h3> 
               <h1>
               We Proudly Give Quality Treatments
               </h1>
                <p>
                Donec pellentesque dapibus interdum. Mauris et tellus congue , rutrum neque a, varius felis. Phasellus nibh diam, tincidunt nec risus ut, auctor gravida metus that covers the front of the eye.
                </p>
                <ul>
                  <li>24 -Hours Emergency Services</li>
                  <li>Professional and Certified Therapists</li>
                  <li>Get Free Consultation Anytime</li>
                </ul>
                <div className={styles.infoCon}>
                    <div className={styles.info}>
                           <div>
                              
                           </div>
                        <div>
                              <h1>880</h1>
                           <p>Solved Cases</p>
                        </div>
                    </div>
                    <div className={styles.info}>
                           <div>
                              
                           </div>
                        <div>
                              <h1>880</h1>
                           <p>Happy Patients</p>
                        </div>
                    </div>
                 </div>
             </div>
             <hr />

          </div>

    </div>
  )
}

export default Banner