import React from "react";
import s from "./users.module.css";
import userPhoto from "../../assets/images/default-avatar.jpg";
import {UsersType} from "../../redux/users-reducer";


type PropsType = {
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    unfollow: (usersID: string) => void
    follow: (usersID: string) => void
    users: UsersType[]
}


export const Users = (props: PropsType) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(i => {
                    return <span
                        className={props.currentPage === i ? s.selectedPage : ""}
                        onClick={() => {
                            props.onPageChanged(i)
                        }}
                    >{i} </span>
                })}
            </div>
            {
                props.users.map((u) =>
                    <div key={u.id} className={s.parent}>
                        <div className={s.review}>
                            <div>
                                <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt={"IMAGE 404"}
                                     className={s.avatarIMG}/>
                            </div>
                            <div className={s.followingButtons}>
                                {
                                    u.followed ?
                                        <button onClick={() => {
                                            props.unfollow(u.id)
                                        }}>UNFOLLOW</button>
                                        : <button onClick={() => {
                                            props.follow(u.id)
                                        }}>FOLLOW</button>
                                }
                            </div>
                        </div>

                        <div className={s.itemTitle}>
                            <div>
                                <div><b>{u.name}</b></div>
                                <br/>
                                <br/>

                                <br/>
                                <br/>
                                <div>{u.status}</div>
                            </div>
                            <div>
                                <div>{"u.location.country"},</div>
                                <div>{"u.location.city"}</div>
                            </div>
                        </div>

                    </div>
                )
            }
        </div>
    )
}