import React, { Component } from "react";
import styled from "styled-components";

const StyledProductBrand = styled.h6`
  font-size: 30px;
  font-weight: 600;
  line-height: 27px;
  margin-bottom: 16px;
`;
class ProductBrand extends Component {
  render() {
    const { name } = this.props;
    return <StyledProductBrand>{name}</StyledProductBrand>;
  }
}

export default ProductBrand;
