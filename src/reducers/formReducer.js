import { GET_FORM_DATA } from "../actions/formAction";

const initial_state = {
    loading: false,
    data: {}
}

 const formReducer = (state = initial_state, action) => {
    switch (action.type) {
        case GET_FORM_DATA:
            return {
                ...state,
                loading: true,
                data: action.payload,
            }
        default: return { ...state }
    }
}
export default formReducer