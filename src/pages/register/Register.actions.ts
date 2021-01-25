import {
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./Register.constants";

export const registerRequest = () => {
  return {
    type: REGISTER_REQUEST,
  };
};
export const registerSuccess = (data: any) => {
  return {
    type: REGISTER_SUCCESS,
    payload: data,
  };
};
export const registerFail = (error: string) => {
  return {
    type: REGISTER_FAILURE,
    payload: error,
  };
};
