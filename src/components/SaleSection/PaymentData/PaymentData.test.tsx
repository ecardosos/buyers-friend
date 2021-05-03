import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PaymentData from './PaymentData';

describe('<PaymentData />', () => {
  test('it should mount', () => {
    render(<PaymentData />);
    
    const paymentData = screen.getByTestId('PaymentData');

    expect(paymentData).toBeInTheDocument();
  });
});