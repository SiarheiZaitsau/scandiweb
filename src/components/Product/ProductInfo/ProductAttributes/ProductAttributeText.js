import React, { Component } from "react";
import styled from "styled-components";

const StyledProductAttributeText = styled.h6`
  font-family: ${(props) =>
    props.type === "small" ? "Raleway" : "Roboto Condensed"};
  font-weight: ${(props) => (props.type === "small" ? "400" : "700")};
  font-size: ${(props) => (props.type === "small" ? "14px" : "18px")};
  line-height: ${(props) => (props.type === "small" ? "16px" : "18px")};
  margin-bottom: 8px;
`;
export default class ProductAttributeText extends Component {
  render() {
    return (
      <StyledProductAttributeText type={this.props.type}>
        {this.props.text}:
      </StyledProductAttributeText>
    );
  }
}
