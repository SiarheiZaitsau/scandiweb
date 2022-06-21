import React, { Component } from "react";
import styled from "styled-components";

const StyledProductButton = styled.button`
  background: ${(props) => `${props.theme.colors.primary}`};
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  box-shadow: none;
  color: #fff;
  border: none;
  padding: 16px;
  width: 292px;
  text-transform: uppercase;
  margin-bottom: 40px;
  cursor: pointer;
  &:hover {
    background-color: #8edca2;
  }
`;

class ProductButton extends Component {
  render() {
    return (
      <StyledProductButton onClick={(e) => this.props.onClick(e)} type="submit">
        Add to cart
      </StyledProductButton>
    );
  }
}

export default ProductButton;
