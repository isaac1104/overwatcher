import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import App from "./components/App";
import rootReducer from "./reducers";
import "./index.css";

const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk));
console.log(store.getState());
ReactDOM.render(
<Provider store={store}>
  <App/>
</Provider>
  , document.getElementById("root"));
