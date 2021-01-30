import Api, { addToken } from "../../helper/Api";
import * as actions from "./Login.actions";

export const login = (payload: ReqLogin) => async (dispatch: any) => {
  dispatch(actions.loginRequest());
  try {
    const data: any = await Api("login").post({ body: payload });
    if (data?.data?._id){
      dispatch(actions.loginSuccess(data.data));
      addToken(data.data.token);
    }
    else{
    dispatch(actions.loginFailed("Username or password incorrect!"));
    }
  } catch(err) {
    
  }
};
