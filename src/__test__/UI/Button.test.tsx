import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../../components/UI/Button';

describe('Button', () => {
  it('should render with the correct props', () => {
    const onChange = jest.fn();
    const { asFragment } = render(
      <Button variant="contained" color="primary" onClick={onChange} disabled={false}>
        Click Me
      </Button>
    );

    const buttonElement = screen.getByText('Click Me');

    expect(asFragment()).toMatchSnapshot();
    expect(buttonElement).toHaveClass('custom-button');
    expect(buttonElement).toHaveClass('primary-color');
    expect(buttonElement).not.toHaveClass('outlined');
    expect(buttonElement).not.toHaveClass('text');
    expect(buttonElement).not.toHaveClass('secondary-color');
    expect(buttonElement).toHaveClass('btn');
    expect(buttonElement).toHaveAttribute('disabled');
  });

  it('should render with disabled state', () => {
    const { asFragment } = render(
      <Button variant="contained" color="primary" onClick={() => {}} disabled={true}>
        Click Me
      </Button>
    );

    expect(asFragment()).toMatchSnapshot();
    const buttonElement = screen.getByText('Click Me');

    expect(buttonElement).not.toHaveAttribute('disabled');
    expect(buttonElement).toHaveClass('custom-button--false');
    expect(buttonElement).not.toHaveClass('custom-button--true');
  });
});
