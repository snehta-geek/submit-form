import {createStore, compose, applyMiddleware, combineReducers} from "redux";
import formReducer from "./reducers/formReducer";


const rootReducer=combineReducers({
    formData:formReducer
})

const store=createStore(rootReducer)

export default store;
