import React from 'react';
import propTypes from 'prop-types';
import React95Computer from '../../../images/React95Computer.png';

const ComIcon = ({ style }) => {
  const baseClass = 'ComIcon';
  return (
    <span
      className={baseClass}
      style={{ ...style, display: 'inline-block', height: '40px' }}
    >
      <img
        src={React95Computer}
        alt='Windows 95 bin'
        style={{ height: '100%', width: 'auto' }}
      />
    </span>
  );
};

ComIcon.defaultProps = {
  style: {}
};

ComIcon.propTypes = {
  style: propTypes.shape([propTypes.string, propTypes.number])
};

export default ComIcon;
