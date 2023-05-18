import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Select from '../../components/UI/Select';

describe('Select component', () => {
  test('renders options correctly', () => {
    const values = ['Option 1', 'Option 2', 'Option 3'];
    const onChange = jest.fn();
    const value = 'Option 2';
    
    const { asFragment } =  render(
      <Select values={values} onChange={onChange} value={value} />
    );
    expect(asFragment()).toMatchSnapshot();
    const selectElement = screen.getByRole('img', { name: value });
    expect(selectElement).toBeInTheDocument();
  });
});
