import React from 'react'
import styles from './header.module.css'


const Header = () => {
  return (
    <div className={styles.header}>
         <ul>
            <li>Home</li>
            <li>Service</li>
            <li>Contact</li>
            <li>About</li>
         </ul>

    </div>
  )
}

export default Header