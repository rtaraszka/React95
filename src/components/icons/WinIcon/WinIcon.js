import React from 'react';
import propTypes from 'prop-types';
import React95Win from '../../../images/React95Win.png';

const WinIcon = ({ style }) => {
  const baseClass = 'WinIcon';
  return (
    <span
      className={baseClass}
      style={{ ...style, display: 'inline-block', height: '22px' }}
    >
      <img
        src={React95Win}
        alt='Windows 95 logo'
        style={{ height: '100%', width: 'auto' }}
      />
    </span>
  );
};

WinIcon.defaultProps = {
  style: {}
};

WinIcon.propTypes = {
  style: propTypes.shape([propTypes.string, propTypes.number])
};

export default WinIcon;
