import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createStore, combineReducers, compose } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import myDayReducer from "./store/reducers/myDayReducers";
import importantReducer from "./store/reducers/importantReducers";
import uiReducer from "./store/reducers/uiReducers";

const combiningStore = combineReducers({
  myDay: myDayReducer,
  ui: uiReducer,
  important: importantReducer,
});

const store = createStore(combiningStore);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
