import React, { Component } from "react";
import styled from "styled-components";

const StyledProductAttributeText = styled.h6`
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  margin-bottom: 8px;
`;
export default class ProductAttributeText extends Component {
  render() {
    return (
      <StyledProductAttributeText>
        {this.props.text}:
      </StyledProductAttributeText>
    );
  }
}
