/**
 * @jest-environment jsdom
 */

import React from "react";
import { cleanup, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "./utils/test-utils.js";
import { App } from "./App.js";
import "@testing-library/jest-dom";
import "regenerator-runtime/runtime";

afterEach(cleanup);

// UNIT

test(
    "Renders with proper initial setup", 
    () => {
        render(<App />);
        
        expect(screen.getByTestId(/user-list-div/i)).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /get users/i })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /display selected user details/i })).toBeInTheDocument();
        expect(screen.queryByTestId(/user-list-panel/i)).not.toBeInTheDocument();
        expect(screen.queryByTestId(/selected-user-panel/i)).not.toBeInTheDocument();
    }
);

// INTEGRATION

test(
    "When a user is selected from the user list and the Display Selected Users button is clicked, the Selected User Panel is displayed and contains the user that was selected",
    async () => {
        // Arrange
        const user = userEvent.setup();
        render(<App />);

        // Click Get Users button to populate the User List
        user.click(screen.getByRole('button', { name: /get users/i }));

        // Attempt to get the first element of the User List
        const firstUser = await screen.findByTestId(/user-list-item-0$/i);
        expect(firstUser).toBeDefined();

        // Click on the user
        user.click(firstUser);

        // Click the Display Selected User Details button
        user.click(screen.getByRole('button', { name: /display selected user details/i }));

        // The Selected User Panel should now be displayed
        const selectedUserPanel = await screen.findByTestId(/selected-user-panel/i);
        expect(selectedUserPanel).toBeInTheDocument();

        // The user displayed in the Selected User Panel should be the one that was clicked
        expect(screen.queryByTestId(/selected-user-list-item-0-name$/i)).toBeInTheDocument();
    }
)