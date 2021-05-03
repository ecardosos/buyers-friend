import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductData from './ProductData';

describe('<ProductData />', () => {
  test('it should mount', () => {
    render(<ProductData />);
    
    const productData = screen.getByTestId('ProductData');

    expect(productData).toBeInTheDocument();
  });
});