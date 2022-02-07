/**
 * @jest-environment jsdom
 */

import React from 'react';
import { cleanup, screen } from '@testing-library/react';
import { render } from '../../../utils/test-utils.js';
import { SelectedUserPanel } from '../selected-user-panel.component.jsx';
import '@testing-library/jest-dom';

afterEach(cleanup);

test(
    "On initial render, there are no selected users, so selected user panel should not be visible", 
    () => {
        render(<SelectedUserPanel />);

        expect(screen.queryByTestId(/selected-user-panel/i)).not.toBeInTheDocument();
    }
);