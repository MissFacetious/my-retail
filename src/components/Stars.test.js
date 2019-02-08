import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-testing-library"
import 'jest-dom/extend-expect'
import Stars from './Stars';


const { getByText, getByTestId } = render(<Stars option="5"/>);

it('test set stars', () => {

  //expect(getByTestId('stars-numbers')).toHaveProperty("data-id", "5");
});
