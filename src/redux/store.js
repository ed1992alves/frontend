import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export const createStoreWithInitialState = initialState =>
  createStore(
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
  );

export default store;
