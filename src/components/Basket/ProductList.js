import React, { Component } from "react";
import styled from "styled-components";

import ProductListItem from "./ProductListItem";

const StyledProductList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-bottom: 32px;
`;
class ProductList extends Component {
  render() {
    const { basket } = this.props;
    return (
      <StyledProductList>
        {basket.map((product) => {
          return (
            <ProductListItem
              key={product.stringifiedAttributes}
              product={product}
            />
          );
        })}
      </StyledProductList>
    );
  }
}

export default ProductList;
