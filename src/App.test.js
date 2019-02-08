import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-testing-library"
import 'jest-dom/extend-expect'
import App from './App';

const { getByText, getByTestId } = render(<App />);

it('renders without crashing', () => {
  const div = document.createElement('div');
  const app = ReactDOM.render(<App />, div);
});


it('text loaded on page', () => {
  // this shows us the html at least
  expect(getByTestId('item-title')).toHaveTextContent("Ninja™ Professional Blender with Single Serve Blending Cups");
  expect(getByTestId('item-ship')).toHaveTextContent("spend $50, ship FREE");
  expect(getByTestId('item-gift')).toHaveTextContent("$25 gift card with purchase of a select Ninja Blender");
  expect(getByTestId('item-return')).toHaveTextContent("The item must be returned within 30 days of the ship date. See return policy for details. Price, promotions, styles and availiblity may vary by store and online.");
});

it('price is printed on page', () => {
  // price: price
  expect(getByTestId('item-price')).toHaveTextContent("139.99");
});

it('buttons are enabled or disabled based on instore or online availability', () => {
  // this.state.instore
  // this.state.online
  expect(getByTestId('item-instore')).toHaveTextContent("Pick Up In Store");
  expect(getByTestId('item-online')).toHaveTextContent("Add to Cart");
});
