import { DISMISS_POPUP, SHOW_POPUP, UPDATE_PROFILE_FAILURE, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS } from "./Profile.constants"


export const updateRequest = () => {
    return {
        type:UPDATE_PROFILE_REQUEST
    }
}
export const updateSuccess = (data: any ) => {
    return {
        type:UPDATE_PROFILE_SUCCESS,
        payload: data,
    }
}
export const updateFailure = (err: string) => {
    return {
        type:UPDATE_PROFILE_FAILURE,
        payload: err,
    }
}
export const showPopup = () => {
    const popupSuccess = document.getElementsByClassName("modal-transition-enter-done")[0];
    popupSuccess.classList.add('fresh-popup');
    return {
        type:SHOW_POPUP,
    }
}
export const dismissPopup = () => {
    const popupSuccess = document.getElementsByClassName("modal-transition-enter-done")[0];
    popupSuccess.classList.remove('fresh-popup');
    return {
        type:DISMISS_POPUP,
    }
}