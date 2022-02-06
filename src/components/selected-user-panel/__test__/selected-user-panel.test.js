/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '../../../utils/test-utils.js';
import { SelectedUserPanel } from '../selected-user-panel.component.jsx';

test("Renders without crashing", () => {
    render(<SelectedUserPanel />)
});