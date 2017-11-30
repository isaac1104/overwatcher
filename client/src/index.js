import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import App from "./components/App";
import reducers from "./reducers";
import "./index.css";

const store = createStore(reducers, {});
console.log(store.getState());
ReactDOM.render(
<Provider store={store}>
  <App/>
</Provider>
  , document.getElementById("root"));
