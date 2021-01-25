import { GET_CATEGORIES_SUCCESS,GET_CATEGORIES_REQUEST, GET_CATEGORIES_FAILURE } from "./Category.constants"


export const getCategoriesRequest = () => {
    return {
        type: GET_CATEGORIES_REQUEST,
    }
}
export const getCategoriesSuccess = (categories : any) => {
    return {
        type: GET_CATEGORIES_SUCCESS,
        payload: categories
    }
}

export const getCategoriesFailure = (error : string) => {
    return {
        type: GET_CATEGORIES_FAILURE,
        payload: error
    }
}

