import { Provider } from "react-redux";
import React from "react";
import App from "./App";
import store from "./store";

const AppWrapper = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

export default AppWrapper