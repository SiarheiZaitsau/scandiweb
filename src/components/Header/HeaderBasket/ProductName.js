import React, { Component } from "react";
import styled from "styled-components";

const StyledProductName = styled.h6`
  font-size: 16px;
  font-weight: 300;
  line-height: 26px;
  text-align: left;
`;

class ProductName extends Component {
  render() {
    return <StyledProductName> {this.props.text} </StyledProductName>;
  }
}

export default ProductName;
