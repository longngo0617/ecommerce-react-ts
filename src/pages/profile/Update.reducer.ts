import {
  DISMISS_POPUP,
  SHOW_POPUP,
  UPDATE_PROFILE_FAILURE,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
} from "./Profile.constants";

const initialState = {
  loading: false,
  error: "",
  success: false,
  popup:false,
};

export const UpdateReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case UPDATE_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SHOW_POPUP:
      return {
        ...state,
        popup:true,
      };
    case DISMISS_POPUP:
      return {
        ...state,
        popup:false,
      };
    default:
      return state;
  }
};
