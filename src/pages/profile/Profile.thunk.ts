import Api from "../../helper/Api";
import { loginSuccess } from "../login/Login.actions";
import * as actions from "./Profile.actions";


export const updateProfile = (payload: any) => async (dispatch: any) => {
    dispatch(actions.showPopup());
    dispatch(actions.updateRequest());
    try {
      const data: any = await Api("update-profile").post({ body: payload });
      dispatch(actions.updateSuccess(data.data));
      dispatch(loginSuccess(data.data));
      setTimeout(() => {
        dispatch(actions.dismissPopup());
      }, 3000);
    } catch {
      dispatch(actions.updateFailure("Update fail!"));
    }
  };