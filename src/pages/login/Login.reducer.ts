import LocalStorage from "../../helper/LocalStorage";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS, UPDATE_USER_REQUEST } from "./Login.constants";

const initialState = {
  userInfo: LocalStorage.get('userInfo'),
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
    case UPDATE_USER_REQUEST:
      return {
        ...state,
      }
    default:
      return state;
  }
};
