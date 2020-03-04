import React from 'react';
import propTypes from 'prop-types';
import React95Bin from '../../../images/React95Bin.png';

const BinIcon = ({ style }) => {
  const baseClass = 'BinIcon';
  return (
    <span
      className={baseClass}
      style={{ ...style, display: 'inline-block', height: '40px' }}
    >
      <img
        src={React95Bin}
        alt='Windows 95 bin'
        style={{ height: '100%', width: 'auto' }}
      />
    </span>
  );
};

BinIcon.defaultProps = {
  style: {}
};

BinIcon.propTypes = {
  style: propTypes.shape([propTypes.string, propTypes.number])
};

export default BinIcon;
