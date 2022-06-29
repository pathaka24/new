import React from 'react'
import Image from 'next/image'
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import EmailIcon from '@mui/icons-material/Email';
import styles from './navm.module.css'
import { Button, Icon } from '@mui/material';
import { red } from '@mui/material/colors';
import Link from 'next/link';

const NavMiddle = () => {
  return (
    <div className={styles.container}>
         <div className={styles.left}> 
              <div>
                   <Image src='/hhpb.png' height={70} width={150} alt='healing' />
              </div>
         </div>
         <div className={styles.right}>
             <div className = {styles.rightContianer}>
                  <Link href='' >
                     <AddIcCallIcon className={styles.icons} sx={{ color: red[900] }} />
                  </Link>
                 <div className={styles.rightText}>
                    <p>Call us anytime</p>
                    <h1>88-666-000-9999</h1>
               </div>
                   
             </div>
             <div className = {styles.rightContianer}>
              
                  <Link href='' >
                     <EmailIcon className={styles.icons} sx={{ color: red[900] }} />
                  </Link>
                 <div className={styles.rightText}>
                    <p>Call us anytime</p>
                    <h1>88-666-000-9999</h1>
               </div>
                   
             </div>
             <div className={styles.btn}>
                 <Button variant="contained" color="warning" >
                      Book Appointment
                 </Button>
             </div>
         </div>
    </div>
  )
}

export default NavMiddle