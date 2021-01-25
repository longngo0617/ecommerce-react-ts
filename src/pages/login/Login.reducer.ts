import LocalStorage from "../../helper/LocalStorage";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./Login.constants";

const initialState = {
  loading: false,
  error: "",
};

export const LoginReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        loading: true,
      };
    case LOGIN_SUCCESS:
      LocalStorage.set("userInfo", action.payload);
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
      };
    case LOGIN_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    case LOGOUT_SUCCESS:
      LocalStorage.clear();
      return {
        ...state,
        userInfo:null
      }
    default:
      return state;
  }
};
