import React from 'react';
// import PropTypes from 'prop-types';
import { getFunName } from '../helpers';

export default class Storepicker extends React.Component {
  goToStore = (event) => {
    event.preventDefault();
    console.log(event.target);
    // first grab the test from the box
    const storeId = this.toto.value;
    // second we're going to transition from / to /store/:storeIt
    // redirect the page
    this.props.history.push(`store/${storeId}`);
  }
  render() {
    return (
      <div>
        <form className="store-selector" onSubmit={this.goToStore}>
          {/* sss */}
          <h2>Please Enter A Store</h2>
          <input
            type="text"
            required
            placeholder="Store Name"
            defaultValue={getFunName()}
            ref={(input) => { this.toto = input; }}
          />
          <button type="submit" className="btn">
            Visit Store <span role="img" aria-label="go">🔥</span>
          </button>
        </form>
      </div>
    );
  }
}
// Storepicker.contextTypes = {
// history: PropTypes.object,
// };
