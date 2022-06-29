import React from 'react'
import styles from './contact.module.css'
import Image from 'next/image'
import { Button } from '@mui/material'

const Contact = ({ imgUrl}) => {
  return (
    <div
    style= {{
      backgroundImage:`url(${imgUrl})`,
      width: '100%',
       
      backgroundSize:'cover',
      backgroundPosition:'50% 50%'

   }}
    >  
         <div className={styles.contact} >
             <div className={styles.contactLeft}>
                   <div className={styles.contactTop}>
                       <p>WE ARE HERE TO HELP YOU</p>
                       <h1>Start Up Your Health Care With Us</h1>
                   </div>
                    <div className={styles.contactMiddle}>
                          <div>
                               <h2>No Charges for Consultation</h2>
                               <p>
                               Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem is simply free text quis bibendum.
                               </p>
                          </div>
                          <div> 
                               <h2>No Charges for Consultation</h2>
                               <p>
                               Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem is simply free text quis bibendum.
                               </p>
                          </div>
                    </div>
                    <div className={styles.contactBottom}>
                              <div>
                              <Image src="/assets/cun.webp" alt="healing hands" height="100px" width="100px" />
                              </div>
                              <div>
                                <h1>Healing Hands is trust by more then 8800 healthy patients</h1>
                              </div>
                            
                    </div>
             </div>
             <div className={styles.contactRight}>
                      <h1>FILL THE FORM</h1>
                    <form className ={styles.form}> 
                        
                          <div>
                              <input type='text' placeholder='Your Name' />
                              <input type='email' placeholder='Your Email' />
                          </div>
                          
                           <div>
                               <input type='text' placeholder='Phone Number' />
                               <input type='text' placeholder='Your Gender' />
                           </div>
                           <div className={styles.message}>
                                <input type='text ' className={styles.message} placeholder='your message' />
                           </div>
                            <div>
                                 <Button color='warning' variant="contained">
                                  Submit Message 
                                  </Button>
                            </div>
                    </form>
             </div>
         </div>
         
    </div>
  )
}

export default Contact
