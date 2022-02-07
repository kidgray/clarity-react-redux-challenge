/**
 * @jest-environment jsdom
 */

import React from 'react';
import { cleanup, screen } from '@testing-library/react';
import { render } from '../../../utils/test-utils.js';
import { UserList } from '../user-list.component.jsx';
import '@testing-library/jest-dom';

afterEach(cleanup);

test(
    "On initial render, user list is empty, so user list panel should not be displayed",
    () => {
        render(<UserList />);

        expect(screen.queryByTestId(/user-list-panel/i)).not.toBeInTheDocument();
    }
)