import classes from "./Logo.module.css";
import React from "react";

const Logo = () => {
    return (
        <div className={classes.logo}>
            <img
                src='https://images.vexels.com/media/users/3/229320/isolated/preview/3dbf158d77c22e31cee5eafbdcf5ce0f-square-gradient-logo.png'
                alt='error'/>
        </div>
    )
}
export default Logo