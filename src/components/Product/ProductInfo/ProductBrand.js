import React, { Component } from "react";
import styled from "styled-components";

const StyledProductBrand = styled.h4`
  font-size: 30px;
  font-weight: 600;
  line-height: 27px;
  margin-bottom: 16px;
`;

class ProductBrand extends Component {
  render() {
    return <StyledProductBrand> {this.props.text} </StyledProductBrand>;
  }
}

export default ProductBrand;
