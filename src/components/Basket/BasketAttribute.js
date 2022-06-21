import React, { Component } from "react";
import styled from "styled-components";
import Flex from "../../elements/Flex";
const StyledText = styled.p`
  font-size: 24px;
  font-weight: ${(props) => (props.type === "price" ? 500 : 400)};
  line-height: 28px;
  width: 120px;
  &:last-child {
    margin-bottom: 16px;
  }
`;
const StyledValue = styled.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
`;
export default class BasketAttribute extends Component {
  render() {
    const { text, value, type, symbol } = this.props;
    return (
      <Flex margin="0 0 8px 0">
        <StyledText type={type}>{text}:</StyledText>
        <StyledValue>
          {type === "price" ? `${symbol}` : ""}
          {value}
        </StyledValue>
      </Flex>
    );
  }
}
