import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';


export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className="catch-of-the-day">
          <div className="menu">
            <Header tagline="Fresh Seafood Market" />
          </div>
          <Order />
          <Inventory />
        </div>
      </div>
    );
  }
}
