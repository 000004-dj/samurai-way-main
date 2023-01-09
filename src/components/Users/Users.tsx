import React from "react";
import {UsersType} from "../../redux/users-reducer";
import s from "./users.module.css"
import axios from "axios";
import userPhoto from '../../assets/images/default-avatar.jpg'


type PropsType = {
    follow: (usersID: string) => void
    unfollow: (usersID: string) => void
    setUsers: (users: UsersType[]) => void

    users: UsersType[]
}


class Users extends React.Component<any, any> {
    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
                debugger
            })
        }
    }
    onPageChanged = (pageNumber:number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            debugger
        })
    }
    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        const pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {pages.map(i => {
                        return <span
                            className={this.props.currentPage === i ? s.selectedPage : ""}
                            onClick={() => {this.onPageChanged(i)}}
                        >{i} </span>
                    })}
                </div>
                {
                    this.props.users.map((u: { id: React.Key | null | undefined; photos: { small: string | null | undefined; }; followed: any; name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; status: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) =>
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
                                                this.props.unfollow(u.id)
                                            }}>UNFOLLOW</button>
                                            : <button onClick={() => {
                                                this.props.follow(u.id)
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
        );
    }
}

export default Users