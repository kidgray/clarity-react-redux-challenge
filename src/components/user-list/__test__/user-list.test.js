/**
 * @jest-environment jsdom
 */

import React from "react";
import { cleanup, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { render } from "../../../utils/test-utils.js";
import { UserList } from "../user-list.component.jsx";
import "@testing-library/jest-dom";
import "regenerator-runtime/runtime";

afterEach(cleanup);

test(
    "On initial render, user list is empty, so user list panel should not be displayed",
    () => {
        render(<UserList />);

        expect(screen.queryByTestId(/user-list-panel/i)).not.toBeInTheDocument();
    }
)

test(
    "Clicking the Get Users button populates the user list and displays the user list panel",
    async () => {
        const user = userEvent.setup();
        render(<UserList />);

        user.click(screen.getByRole('button', { name: /get users/i }));
        const userListPanel = await screen.findByTestId(/user-list-panel/i);

        expect(userListPanel).toBeInTheDocument();
        expect(screen.getAllByTestId(/user-list-item-[0-9]+/i)).toHaveLength(7);
    }
)