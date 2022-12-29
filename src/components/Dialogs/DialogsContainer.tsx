import React, {Dispatch} from "redux";
import {InitialStateType, newMessageTextActionCreator, sendMessageActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

type MapStateToPropsType = {
    dialogPage: InitialStateType
}
type MapDispatchToPropsType = {
    onSendMessage: () => void
    onSendChange: (text: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogPage: state.dialogPage,

    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onSendMessage: () => {
            dispatch(sendMessageActionCreator())
        },
        onSendChange: (text: string) => {
            dispatch(newMessageTextActionCreator(text))
        },
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)