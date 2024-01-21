import React from 'react';
import styles from "./header.module.css"

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>Avion</h1>
            <nav className={styles.nav}>
               <Link to='/'>Home</Link>
               <Link to='/about'>About</Link>
               <Link to='/contact'>Contact</Link>
            </nav>
        </header>
    );
};

export default Header;