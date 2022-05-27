import React, { Component } from "react";
import styled from "styled-components";
import { ReactComponent as BasketIcon } from "../../images/basket.svg";

const StyledProductToBasket = styled.button`
  position: absolute;
  right: 15px;
  bottom: 0;
  width: 52px;
  height: 52px;
  border-radius: 100%;
  box-shadow: none;
  background: ${(props) => `${props.theme.colors.primary}`};
  border: 0;
  display: none;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #8edca2;
  }
`;

export default class ProductToBasket extends Component {
  render() {
    return (
      <StyledProductToBasket onClick={(e) => this.props.toBasket(e)}>
        <BasketIcon fill="#fff" />
      </StyledProductToBasket>
    );
  }
}
