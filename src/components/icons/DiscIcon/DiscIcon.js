import React from 'react';
import propTypes from 'prop-types';
import React95Disc from '../../../images/React95Disc.png';

const DiscIcon = ({ style }) => {
  const baseClass = 'DiscIcon';
  return (
    <span
      className={baseClass}
      style={{ ...style, display: 'inline-block', height: '40px' }}
    >
      <img
        src={React95Disc}
        alt='Windows 95 disc'
        style={{ height: '100%', width: 'auto' }}
      />
    </span>
  );
};

DiscIcon.defaultProps = {
  style: {}
};

DiscIcon.propTypes = {
  style: propTypes.shape([propTypes.string, propTypes.number])
};

export default DiscIcon;
