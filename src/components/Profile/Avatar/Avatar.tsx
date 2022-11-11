import classes from "./Avatar.module.css";
import React from "react";

const Avatar = () => {
    return (
        <div className={classes.avatar}>
            <img
                src="https://r-scale-7a.dcs.redcdn.pl/scale/o2/rasp/vod/prod/images/9a6c042d-10fc-4c64-805b-0f100d7ebf64/ce8b3d2037791f0498eb83c5e7c88294.jpg?srcx=7&srcy=12&srcw=534&srch=712&dstw=200&dsth=266&srcmode=0&quality=65&type=1" alt='err'/>
            <div className={classes.userName}>
                <span>Description</span>
            </div>
        </div>
    )
}
export default Avatar