import React from "react";
import { render as RTLRender } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../features/store.js";

export const render = (component) => {
    return RTLRender(
        <Provider store={store}>
            { component }
        </Provider>
    );
};