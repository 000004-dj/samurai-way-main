import React from "react";
import classes from './NavBar.module.css';
import {NavLink} from "react-router-dom";
import {Friends} from "../Friends/Friends";
import {StoreContext} from "../../StoreContext";


const NavBar = () => {
    return (
        <StoreContext.Consumer>{
            (store)=>{
    return (<nav className={classes.nav}>
        <div className={classes.item}>
            <NavLink to="/Profile" activeClassName={classes.activeLink}>Profile</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/Dialogs" activeClassName={classes.activeLink}>Massages</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/News" activeClassName={classes.activeLink}>News</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/Music" activeClassName={classes.activeLink}>Music</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/Settings" activeClassName={classes.activeLink}>Settings</NavLink>
        </div>
        <div>
            <Friends state={store.getState()}/>
        </div>

    </nav>)
            }}
</StoreContext.Consumer>
)

}
export default NavBar



