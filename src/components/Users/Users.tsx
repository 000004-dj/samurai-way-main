import React from "react";
import {UsersType} from "../../redux/users-reducer";
import s from "./users.module.css"
import {v1} from "uuid";


type PropsType = {
    follow: (usersID: string) => void
    unfollow: (usersID: string) => void
    setUsers: (users: UsersType[]) => void

    users: UsersType[]
}


export const Users = (props: PropsType) => {
    //иммитация работы с сервером
    if(props.users.length === 0){
    props.setUsers([
        {
            id: v1(),
            userAvatar: "https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg",
            followed: true,
            fullName: "Samuil",
            Status: "IN GOD I TRUST",
            location: {
                city: "Gdansk",
                country: "Poland",
            }
        },
        {
            id: v1(),
            userAvatar: "https://avatarzo.ru/wp-content/uploads/squid-game-anime.jpg",
            followed: true,
            fullName: "Alena",
            Status: "I LOVE MY HUSBAND",
            location: {
                city: "Gdansk",
                country: "Poland",
            }
        },
        {
            id: v1(),
            userAvatar: "https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png",
            followed: true,
            fullName: "LUDMILA",
            Status: "HELLO, I'M NEW USER HERE",
            location: {
                city: "DOFARENCJA",
                country: "BELARUS",
            }
        },
        {
            id: v1(),
            userAvatar: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",
            followed: false,
            fullName: "MARCIN",
            Status: "MIAU MIAU",
            location: {
                city: "LIPOWAJA KOLODA",
                country: "BELARUS",
            }
        },


    ])
    }

    return (
        <div>
            {
                props.users.map(u =>
                    <div key={u.id} className={s.parent}>

                        <div className={s.review}>
                            <div>
                                <img src={u.userAvatar} alt="AVATAR" className={s.avatarIMG}/>
                            </div>
                            <div className={s.followingButtons}>
                                {
                                    u.followed ?
                                    <button onClick={() => {props.unfollow(u.id)}}>UNFOLLOW</button>
                                    : <button onClick={() => {props.follow(u.id)}}>FOLLOW</button>
                                }
                            </div>
                        </div>

                        <div className={s.itemTitle}>
                            <div>
                                <div><b>{u.fullName}</b></div>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <div>{u.Status}</div>
                            </div>
                            <div>
                                <div>{u.location.country},</div>
                                <div>{u.location.city}</div>
                            </div>
                        </div>

                    </div>
                )
            }
        </div>
    )
}