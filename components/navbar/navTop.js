import React from 'react'
import Link from 'next/link'
import styles from './navbar.module.css'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AddLocationSharpIcon from '@mui/icons-material/AddLocationSharp';
 
import { amber } from '@mui/material/colors';

const NavTop = () => {
  return (
    <div className={styles.container}> 
         <div className={styles.navTop}>
             <div className={styles.navTopLeft}>
                 <p>
                    Welcome to the professional physiotherapy clinic
                 </p>
             </div>
             <div className={styles.navTopRight}>
                  <div className={styles.navTopRightAdd}>
                   
                    <AddLocationSharpIcon sx={{ color: amber[500] }} className ={styles.icons} />
                   
                       <p className={styles.navText}>Noida sec-93</p>
                  </div>
                   <div className={styles.navTopRightTime}>
                    <Link href='/' >
                         <AccessTimeFilledIcon sx={{ color: amber[500] }} className ={styles.icons}   />
                    </Link>
                  
                   <p className={styles.navText}>mon to fri 10:00 am to 6</p>
                   </div>
             </div>
             </div>
    </div>
  )
}

export default NavTop