import React from "react";
import classes from  './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <img
                    src='https://images.vexels.com/media/users/3/229320/isolated/preview/3dbf158d77c22e31cee5eafbdcf5ce0f-square-gradient-logo.png'
                    alt='error'/>
            </div>

        </header>
    )
};
export default Header


