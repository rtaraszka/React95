import React from 'react';
import propTypes from 'prop-types';
import React95Network from '../../../images/React95Network.png';

const NetworkIcon = ({ style }) => {
  const baseClass = 'NetworkIcon';
  return (
    <span
      className={baseClass}
      style={{ ...style, display: 'inline-block', height: '40px' }}
    >
      <img
        src={React95Network}
        alt='Windows 95 Network'
        style={{ height: '100%', width: 'auto' }}
      />
    </span>
  );
};

NetworkIcon.defaultProps = {
  style: {}
};

NetworkIcon.propTypes = {
  style: propTypes.shape([propTypes.string, propTypes.number])
};

export default NetworkIcon;
