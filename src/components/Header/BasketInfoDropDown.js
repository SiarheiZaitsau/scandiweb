import React, { Component } from "react";
import styled from "styled-components";
import { SIZES } from "../../helpers/styleVariables";

const StyledBasketInfoDropDown = styled.div`
  position: absolute;
  right: -28px;
  z-index: 12;
  background: #ffffff;
  padding: 32px 16px;
  top: calc(100% + 28px);

  width: 325px;
  height: 677px;
`;
const StyledOverlay = styled.div`
  position: fixed;
  top: ${SIZES.headerHeight};
  left: 0;
  width: 100%;
  height: 100%;
  background: #393748;
  opacity: 0.22;
  z-index: 11;
  transition: all 0.3s ease;
`;

class BasketInfoDropDown extends Component {
  render() {
    return (
      <>
        <StyledBasketInfoDropDown> </StyledBasketInfoDropDown>
        <StyledOverlay />
      </>
    );
  }
}

export default BasketInfoDropDown;
