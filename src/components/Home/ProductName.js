import React, { Component } from "react";
import styled from "styled-components";

const StyledProductName = styled.p`
  font-size: 18px;
  font-weight: 300;
  line-height: 29px;
  text-align: left;
`;
class ProductName extends Component {
  render() {
    return <StyledProductName>{this.props.text}</StyledProductName>;
  }
}

export default ProductName;
