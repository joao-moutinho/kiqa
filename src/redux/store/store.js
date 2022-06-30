import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import cartReducer from "../reducer";
import logReducer from "../reducer/loginred";

const rootReducers = combineReducers({ cart: cartReducer, loggedUser: logReducer });

export const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware())
);
