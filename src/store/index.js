import { createStore, compose, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import contactReducer from "../reducer/contact"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const combineReducer = combineReducers({
  contact: contactReducer,
})

const configureStore = () =>
  createStore(combineReducer, composeEnhancers(applyMiddleware(thunk)))

export default configureStore
