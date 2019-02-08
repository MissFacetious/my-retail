import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-testing-library"
import Quantity from './Quantity';

const { getByText, getByTestId } = render(<Quantity quantity="3" />);

it('test set quantity', () => {

  expect(getByTestId('quantity-number')).toEqual("3");
});

it('test increasing quantity', () => {

  expect(getByTestId('quantity-number')).toEqual("3");
});

it('test decreasing quantity', () => {

  expect(getByTestId('quantity-number')).toEqual("3");
});
