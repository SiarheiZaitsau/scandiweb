import React, { Component } from "react";
import styled from "styled-components";

const StyledBasketTitle = styled.h4`
  font-size: 16px;
  font-weight: 500;
  line-height: 25.6px;
  margin-bottom: 32px;
  span {
    font-weight: 700;
  }
`;

class BasketTitle extends Component {
  render() {
    return (
      <StyledBasketTitle>
        <span>My Bag, </span> {this.props.length} items
      </StyledBasketTitle>
    );
  }
}

export default BasketTitle;
