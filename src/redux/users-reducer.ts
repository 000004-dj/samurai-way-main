import {v1} from "uuid";
import {ProfilePageType} from "./store";

export type FollowACType = ReturnType<typeof followAC>
export type UnfollowACType = ReturnType<typeof unfollowAC>

type LocationType = {
    city: string,
    country: string,
}
export type UsersType = {
    id: string,
    userAvatar: string,
    followed: boolean,
    fullName: string,
    Status: string,
    location: LocationType

}
export type InitialStateType = {
    users: UsersType[]

}

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"

export const followAC = (userID: string) => {
    return {
        type: FOLLOW,
        userID: userID
    }
}
export const unfollowAC = (userID: string) => {
    return {
        type: UNFOLLOW,
        userID: userID
    }
}
export const setUsersAC = (users: UsersType[]) => {
    return {
        type: "SET-USERS",
        users: []
    }
}

const initialState: InitialStateType = {
    users: [
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


    ],
}

const usersReducer = (state: InitialStateType = initialState, action: any) => {
    {
        switch (action.type) {
            case FOLLOW:
                return {
                    ...state,
                    users: state.users.map(u => {
                            if (u.id === action.userID) {
                                return {...u, followed: true}
                            }
                            return u
                        }
                    )
                }
            case UNFOLLOW:
                return {
                    ...state,
                    users: state.users.map(u => {
                            if (u.id === action.userID) {
                                return {...u, followed: false}
                            }
                            return u
                        }
                    )
                }
            case SET_USERS: {
                return {...state, users: [...state.users, ...action.users]}
            }
            default:
                return state;
        }
    }
}


export default usersReducer;