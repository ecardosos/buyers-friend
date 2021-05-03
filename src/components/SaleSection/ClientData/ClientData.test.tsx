import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ClientData from './ClientData';

describe('<ClientData />', () => {
  test('it should mount', () => {
    render(<ClientData />);
    
    const clientData = screen.getByTestId('ClientData');

    expect(clientData).toBeInTheDocument();
  });
});