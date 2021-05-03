import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SaleSection from './SaleSection';

describe('<SaleSection />', () => {
  test('it should mount', () => {
    render(<SaleSection />);
    
    const saleSection = screen.getByTestId('SaleSection');

    expect(saleSection).toBeInTheDocument();
  });
});