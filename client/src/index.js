import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { equipmentReducer } from "./reducers/reducer";
import { Provider } from "react-redux";

const store = createStore(equipmentReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
