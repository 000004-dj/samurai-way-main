export type FollowACType = ReturnType<typeof followAC>
export type UnfollowACType = ReturnType<typeof unfollowAC>
//
// type LocationType = {
//     city: string,
//     country: string,
// }
type PhotosType = {
    small: string
    large: string
}

export type UsersType = {
    id: string,
    followed: boolean,
    name: string,
    status: string,
    photos: PhotosType

}
export type InitialStateType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"

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
        users: users
    }
}
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage,

    }
}
export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount
    }
}
export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}


const initialState: InitialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
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
                return {...state, users: action.users}
            }
            case SET_CURRENT_PAGE:
                return {
                    ...state,
                    currentPage: action.currentPage
                }
            case SET_TOTAL_USERS_COUNT:
                return {
                    ...state,
                    totalUsersCount: action.totalUsersCount
                }
            case TOGGLE_IS_FETCHING:
                return {
                    ...state,
                    isFetching: action.isFetching
                }

            default:
                return state;
        }
    }
}


export default usersReducer;