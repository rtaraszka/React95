import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { blockSizes, padding } from "../common/system";

const StyledWrapper = styled.div`
  position: relative;
  display: inline-block;
  z-index: 999;
`;
const StyledSnackbar = styled.div`
  box-sizing: border-box;
  padding: ${padding.md};
  border: 2px solid ${({ theme }) => theme.borderDarkest};
  background: ${({ theme }) => theme.tooltip};
`;
const StyledShadow = styled.div`
  position: absolute;
  z-index: -1;
  display: inline-block;
  
  width: 100%;
  height: 100%;
  left: ${padding.sm};
  top: ${padding.sm};
/* 
  left: 0;
  top: 0;
  width: calc(100% + ${padding.sm});
  height: calc(100% + ${padding.sm}); */

  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAGklEQVQYV2NkYGD4zwABjDACQwCqAEkZsggAb94CBbvnhMEAAAAASUVORK5CYII=)
    repeat;
  background-position: -1px 1px;
`;
const Snackbar = ({ children, ...otherProps }) => {
  return (
    <StyledWrapper>
      <StyledShadow />
      <StyledSnackbar {...otherProps}>{children}</StyledSnackbar>
    </StyledWrapper>
  );
};

Snackbar.defaultProps = {};
Snackbar.propTypes = {};
export default Snackbar;
