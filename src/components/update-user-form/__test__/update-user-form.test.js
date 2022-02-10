/**
 * @jest-environment jsdom
 */

import React from 'react';
import { cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '../../../utils/test-utils';
import { UpdateUserForm } from '../update-user-form.component.jsx';
import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';

afterEach(cleanup);

const testUser = { id: 1 };
const testNameInput = "abc";
const testValueInput = "123";

test(
    "On initial render, form inputs should be empty",
    () => {
        render(<UpdateUserForm targetUser={testUser} />);

        expect(screen.getByPlaceholderText(/field name$/i)).toHaveValue("");
        expect(screen.getByPlaceholderText(/field value$/i)).toHaveValue("");
    }
);

test(
    "Fields can be filled in properly",
    async () => {
        const user = userEvent.setup();
        render(<UpdateUserForm targetUser={testUser} />);
        
        const newFieldName = screen.getByPlaceholderText(/field name$/i);
        const newFieldValue = screen.getByPlaceholderText(/field value$/i);
        await user.type(newFieldName, "abc");
        await user.type(newFieldValue, "123");

        expect(newFieldName).toHaveValue(testNameInput);
        expect(newFieldValue).toHaveValue(testValueInput);
    }
);

test(
    "After filling in the input fields and clicking the submit button, input fields are cleared",
    async () => {
        const user = userEvent.setup();
        render(<UpdateUserForm targetUser={testUser} />);
        
        const newFieldName = screen.getByPlaceholderText(/field name$/i);
        const newFieldValue = screen.getByPlaceholderText(/field value$/i);
        const acceptButton = screen.getByRole("button", { name: /add field/i })
        await user.type(newFieldName, "abc");
        await user.type(newFieldValue, "123");
        await user.click(acceptButton);

        expect(newFieldName).toHaveValue("");
        expect(newFieldValue).toHaveValue("");
    }
);