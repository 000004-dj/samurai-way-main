import React from "react";
import classes from './NavBar.module.css';


const NavBar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <a href="src/components/NavBar/NavBar.tsx">Profile</a>
            </div>
            <div className={classes.item}>
                <a href="src/components/NavBar/NavBar.tsx">Massages</a>
            </div>
            <div className={classes.item}>
                <a href="src/components/NavBar/NavBar.tsx">News</a>
            </div>
            <div className={classes.item}>
                <a href="src/components/NavBar/NavBar.tsx">Music</a>
            </div>
            <div className={classes.item}>
                <a href="src/components/NavBar/NavBar.tsx">Settings</a>
            </div>
        </nav>
    )
}
export default NavBar