import React, { Component } from "react";
import styled from "styled-components";
import Flex from "../../Flex";
import { NavLink } from "react-router-dom";

const StyledButton = styled.button`
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: center;
  width: 140px;
  height: 43px;
  cursor: pointer;
  background: ${(props) =>
    props.type ? "transparent" : `${props.theme.colors.primary}`};
  color: ${(props) => (props.type ? "#1D1F22" : "#fff")};
  box-shadow: none;
  border: ${(props) => (props.type ? "1px solid #1D1F22" : `none`)};
  transition: all 0.3s ease;
  &:first-child {
    margin-right: 12px;
  }
  &:hover {
    background: ${(props) => (props.type ? "#1D1F22" : `#8edca2`)};
    color: #fff;
  }
`;

class BasketButtons extends Component {
  render() {
    const { closeBasket, basket } = this.props;
    return (
      <Flex align="center">
        <NavLink to="/basket">
          <StyledButton onClick={closeBasket}>View bag</StyledButton>
        </NavLink>
        <StyledButton onClick={console.log(basket)} type="secondary">
          CHECK OUT
        </StyledButton>
      </Flex>
    );
  }
}

export default BasketButtons;
