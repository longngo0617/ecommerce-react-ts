import {
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./Register.constants";

const initialState = {
  loading: false,
  error: '',
};

export const RegisterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
      };
    case REGISTER_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
