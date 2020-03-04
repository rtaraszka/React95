import React from 'react';
import propTypes from 'prop-types';
import React95Docs from '../../../images/React95Docs.png';

const DocsIcon = ({ style }) => {
  const baseClass = 'DocsIcon';
  return (
    <span
      className={baseClass}
      style={{ ...style, display: 'inline-block', height: '40px' }}
    >
      <img
        src={React95Docs}
        alt='Windows 95 docs'
        style={{ height: '100%', width: 'auto' }}
      />
    </span>
  );
};

DocsIcon.defaultProps = {
  style: {}
};

DocsIcon.propTypes = {
  style: propTypes.shape([propTypes.string, propTypes.number])
};

export default DocsIcon;
