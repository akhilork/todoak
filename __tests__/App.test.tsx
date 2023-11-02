/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shiped with jest.
import {jest, it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer, {act} from 'react-test-renderer';

jest.useFakeTimers();

it('renders correctly', async () => {
  await act(async () => {
    renderer.create(<App />);
  });
});
