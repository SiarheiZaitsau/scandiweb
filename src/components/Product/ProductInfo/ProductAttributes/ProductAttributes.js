import React, { Component } from "react";
import styled from "styled-components";
import ProductAttribute from "./ProductAttribute";

const StyledProductAttributes = styled.ul`
  list-style: none;
  margin-bottom: 36px;
`;

class ProductAttributes extends Component {
  render() {
    return (
      <StyledProductAttributes>
        {this.props?.data?.map((attribute) => {
          return (
            <ProductAttribute
              handleChangeValue={this.props.handleChangeValue}
              key={attribute.name}
              attribute={attribute}
            />
          );
        })}
      </StyledProductAttributes>
    );
  }
}

export default ProductAttributes;
