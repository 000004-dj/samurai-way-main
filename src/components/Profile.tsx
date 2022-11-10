import React from "react";
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.content}>
            <div className={classes.header}>
                <img src="http://f-cover.com.ua/upload/iblock/453/453f1272a1a7d08c82483e1383c9e027.jpg"
                     alt="error"/>
            </div>
            <div className={classes.avatar}>
                <img
                    src="https://i.wpimg.pl/1200x/filerepo.grupawp.pl/api/v1/display/embed/b4b98005-a07f-446d-8dd9-29583d2ddfac"
                    alt="error"/> <span>Description</span>
            </div>
            <div className={classes.posts}>
                my posts
                <div className={classes.item}>
                    new posts
                </div>
                <div className={classes.item}>
                    post 1
                </div>
                <div className={classes.item}>
                    post 2
                </div>
                <div className={classes.item}>
                    post 3
                </div>
            </div>
        </div>
    ) 
}

export default Profile