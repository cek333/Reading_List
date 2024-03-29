import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./utils/store";
import { Provider } from "react-redux";
import { getBooks } from "./pages/SavedSlice";

store.dispatch(getBooks());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
