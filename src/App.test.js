/**
 * @jest-environment jsdom
 */

import React from "react";
import { cleanup } from "@testing-library/react";
import { render } from "./utils/test-utils.js";
import { App } from "./App.js";
import "regenerator-runtime/runtime";

afterEach(cleanup);

test("Renders without crashing", () => {
    render(<App />);
});