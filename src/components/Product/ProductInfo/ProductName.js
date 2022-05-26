import React, { Component } from "react";
import styled from "styled-components";

const StyledProductName = styled.h6`
  font-size: 30px;
  font-weight: 400;
  line-height: 27px;
  margin-bottom: 40px;
`;

class ProductName extends Component {
  render() {
    return <StyledProductName> {this.props.name} </StyledProductName>;
  }
}

export default ProductName;
