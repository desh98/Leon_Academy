import React from 'react'
import styles from './Navbar.module.css'
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
        <div className={styles.logo}>
            <label>Leon Academy</label>
        </div>

        <div>
            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>

        <div className={styles.menubtn}>
            <IoMenu />
        </div>
    </div>
  )
}

export default Navbar