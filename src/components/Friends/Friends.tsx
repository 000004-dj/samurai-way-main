import React from "react";
import s from "./Friends.module.css"
import s1 from "../Dialogs/DialogItem/DialogsItem.module.css"
import {RootStateType} from "../../redux/store";

type PropsType = {
    state: RootStateType
}

export const Friends = (props: PropsType) => {
    return (
        <div>

            <div className={s.title}>
                <p>My Friends:</p>
            </div>

            <div className={s.friend}>

                <div className={s1.userAvatar}>
                    <img src={props.state.dialogPage.dialogItemData[0].userAvatar} alt="friendAvatar"/>
                    <div className={s.friendName}>{props.state.dialogPage.dialogItemData[0].name}</div>
                </div>
                <div className={s1.userAvatar}>
                    <img src={props.state.dialogPage.dialogItemData[1].userAvatar} alt="friendAvatar"/>
                    <div className={s.friendName}>{props.state.dialogPage.dialogItemData[1].name}</div>
                </div>
                <div className={s1.userAvatar}>
                    <img src={props.state.dialogPage.dialogItemData[2].userAvatar} alt="friendAvatar"/>
                    <div className={s.friendName}>{props.state.dialogPage.dialogItemData[2].name}</div>
                </div>

            </div>

        </div>
    )
}



