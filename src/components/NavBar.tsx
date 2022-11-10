import React from "react";
import classes from './NavBar.module.css';


const NavBar = () => {
    return (
        <nav className={classes.nav}>
            <div className='item'>
                <a href="src/components/NavBar.tsx">Profile</a>
            </div>
            <div className={classes.nav}>
                <a href="src/components/NavBar.tsx">Massages</a>
            </div>
            <div className={classes.nav}>
                <a href="src/components/NavBar.tsx">News</a>
            </div>
            <div className={classes.nav}>
                <a href="src/components/NavBar.tsx">Music</a>
            </div>
            <div className={classes.nav}>
                <a href="src/components/NavBar.tsx">Settings</a>
            </div>
        </nav>
    )
}
export default NavBar