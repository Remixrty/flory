import { combineReducers, createStore } from "redux"
import { chooseReducer } from "./reducers/chooseReducer";

const rootReducer = combineReducers({
    choose: chooseReducer,
})

export const store = createStore(rootReducer)