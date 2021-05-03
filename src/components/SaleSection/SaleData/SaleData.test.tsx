import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SaleData from './SaleData';

describe('<SaleData />', () => {
  test('it should mount', () => {
    render(<SaleData />);
    
    const saleData = screen.getByTestId('SaleData');

    expect(saleData).toBeInTheDocument();
  });
});