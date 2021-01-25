import { Categories } from "../../../type";
import { GET_CATEGORIES_FAILURE, GET_CATEGORIES_REQUEST, GET_CATEGORIES_SUCCESS } from "./Category.constants";

const initialState = { 
    loading: false,
    categories: [] as Categories[],
    error: ''
}

export const CategoriesReducer = (state = initialState, action : any) => {
    switch(action.type) {
        case GET_CATEGORIES_REQUEST: 
            return {
                ...state,
                loading:true
            }
        case GET_CATEGORIES_SUCCESS:
            return {
                loading:false,
                categories: action.payload,
                error: ''
            }
        case GET_CATEGORIES_FAILURE:
            return {
                loading:false,
                categories: [],
                error: action.payload
            }
        default: return state
    }
}