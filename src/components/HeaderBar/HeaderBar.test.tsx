import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeaderBar from './HeaderBar';

describe('<Header />', () => {
  test('it should mount', () => {
    render(<HeaderBar />);
    
    const header = screen.getByTestId('Header');

    expect(header).toBeInTheDocument();
  });
});