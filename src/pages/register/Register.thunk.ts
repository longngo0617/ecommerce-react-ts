import Api, { addToken } from "../../helper/Api";
import * as actions from "./Register.actions";
import {loginSuccess} from "../login/Login.actions";

export const register = (payload: ReqRegister) => async (dispatch: any) => {
  dispatch(actions.registerRequest());
  try {
    const data: any = await Api("register").post({ body: payload });
    dispatch(actions.registerSuccess(data.data));
    dispatch(loginSuccess(data.data));
    addToken(data.data.token);
  } catch {
    dispatch(actions.registerFail("Email or Username is invalid!"));
  }
};
