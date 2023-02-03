import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import LocaleContext from "./context/localeContext/LocaleContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <LocaleContext>
        <App />
      </LocaleContext>
    </Provider>
  </React.StrictMode>
);
