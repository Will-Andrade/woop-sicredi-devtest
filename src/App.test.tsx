import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('should render the App component', () => {
    render(<App />);

    const app = screen.getByTestId('app');
    expect(app).toBeInTheDocument();
  });
});
