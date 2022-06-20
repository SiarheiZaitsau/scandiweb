import React, { Component } from "react";
import styled from "styled-components";
import Flex from "../../Flex";
const StyledPriceText = styled.p`
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
`;
const StyledPriceValue = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 25.6px;
`;

class ProductPrice extends Component {
  render() {
    const { price, symbol } = this.props;
    return (
      <Flex margin="0 0 32px 0" justify="space-between" align="center">
        <StyledPriceText>Total</StyledPriceText>
        <StyledPriceValue>
          {symbol}
          {price}
        </StyledPriceValue>
      </Flex>
    );
  }
}

export default ProductPrice;
