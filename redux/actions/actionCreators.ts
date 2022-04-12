import { Action } from "redux"
import { ThunkDispatch } from "redux-thunk"
import ACTIONS from "./actionNames"

export const userLogsInAction = () => ({ type: ACTIONS.USER_LOGS_IN })
export const userLogsOutAction = () => ({ type: ACTIONS.USER_LOGS_OUT })
export const addInfoToCurrentUserAction = (user: IUser) => ({ type: ACTIONS.ADD_INFO_TO_CURRENT_USER, payload: user })