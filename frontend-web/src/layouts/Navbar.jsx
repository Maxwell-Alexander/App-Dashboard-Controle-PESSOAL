//import React, { useState } from 'react';


import styles from '../styles/Navbar.module.css';
import { CiMenuBurger } from "react-icons/ci";



function Navbar() {



    return (
        <div className={styles.navbar}>

            <div id={styles.iconExpandir} >
                <CiMenuBurger />
            </div>

        </div>
    );



}

export default Navbar;