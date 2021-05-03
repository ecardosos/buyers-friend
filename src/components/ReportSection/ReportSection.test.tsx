import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReportSection from './ReportSection';

describe('<ReportSection />', () => {
  test('it should mount', () => {
    render(<ReportSection />);
    
    const saleSection = screen.getByTestId('ReportSection');

    expect(saleSection).toBeInTheDocument();
  });
});