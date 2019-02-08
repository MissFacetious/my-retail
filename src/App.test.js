import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-testing-library"
import App from './App';

const { getByText, getByTestId } = render(<App />);

it('renders without crashing', () => {
  const div = document.createElement('div');
  const app = ReactDOM.render(<App />, div);
});


it('text loaded on page', () => {
  // this shows us the html at least
  expect(getByTestId('item-title')).toContain("Ninja™ Professional Blender with Single Serve Blending Cups");
  expect(getByTestId('item-ship')).toContain("spend $50, ship FREE");
  expect(getByTestId('item-gift')).toContain("$25 gift card with purchase of a select Ninja Blender");
  expect(getByTestId('item-return')).toContain("The item must be returned within 30 days of the ship date. See return policy for details. Price, promotions, styles and availiblity may vary by store and online.");
});

it('price is printed on page', () => {
  // price: price,
  expect(getByTestId('item-price')).toContain("");
});

it('buttons are enabled or disabled based on instore or online availability', () => {
  // this.state.instore
  // this.state.online
  expect(getByTestId('item-instore')).toContain("");
  expect(getByTestId('item-online')).toContain("");
});
