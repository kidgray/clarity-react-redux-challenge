/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from './utils/test-utils.js';
import { App } from './App.js';
import 'regenerator-runtime/runtime';

test('Renders without crashing', () => {
    render(<App />);
});