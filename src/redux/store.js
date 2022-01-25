import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import usersReducer from "./usersDucks";
import rolesReducer from "./rolesDucks";

const rootReducer = combineReducers({
  users: usersReducer,
  roles: rolesReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generatorStore(){
  const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ))
  return store;
}