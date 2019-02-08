import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-testing-library"
import 'jest-dom/extend-expect'
import Carousel from './Carousel';

const { getByText, getByTestId } = render(<Carousel />);

it('test carousel 3 images', () => {

//  expect(getByTestId('quantity-number')).toHaveTextContent("3");
});

it('test carousel 1 image', () => {

//  expect(getByTestId('quantity-number')).toHaveTextContent("3");
});
