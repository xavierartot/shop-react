import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ tagline }) => (
  <div className="top">
    <h1>Catch
      <span className="ofThe">
        <span className="of">of</span>
        <span className="the">the</span>
      </span>
      day
    </h1>
    <h3 className="tagline"><span>{tagline}</span></h3>
  </div>
);

Header.propTypes = {
  tagline: PropTypes.string,
};
Header.defaultProps = {
  tagline: PropTypes.string,
};

export default Header;
