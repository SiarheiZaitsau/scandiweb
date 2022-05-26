import React, { Component } from "react";
import styled from "styled-components";

const StyledErrorText = styled.p`
  font-size: 16px;
  color: #d43f21;
  margin-bottom: 12px;
`;
export default class ProductAttributeText extends Component {
  render() {
    return <StyledErrorText>You have to select all attributes</StyledErrorText>;
  }
}
