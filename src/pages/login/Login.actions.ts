import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./Login.constants";

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (data : any) => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

export const loginFailed = (error: string) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const logout = () => ({
  type: LOGOUT_SUCCESS,
});
