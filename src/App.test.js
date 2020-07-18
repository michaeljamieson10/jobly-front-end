import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it("renders w/o crashing", function(){
  render(<App />);
});