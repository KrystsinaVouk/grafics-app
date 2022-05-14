import React from 'react';
import {Link} from "react-router-dom";
import styles from './Navbar.module.css'

const Navbar = () => {

    return (
        <div className={styles.navbar}>
            <div className={styles.navbarLinks}>
                <Link to={'/'}>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/about/votes'>Cat votes</Link>
                <Link to='/about/create-vote'>Create Vote</Link>
            </div>
        </div>
    );
};

export default Navbar;
