import React, { Component } from "react";
import styled from "styled-components";

const StyledProductName = styled.p`
  font-size: 30px;
  font-weight: 400;
  line-height: 27px;
  margin-bottom: 20px;
`;
class ProductName extends Component {
  render() {
    const { name } = this.props;
    return <StyledProductName>{name}</StyledProductName>;
  }
}

export default ProductName;
