import React, { Component } from "react";
import styled from "styled-components";
import ProductName from "./ProductName";
import ProductPrice from "./ProductPrice";
import ProductAttributes from "../../Product/ProductInfo/ProductAttributes/ProductAttributes";

const StyledProductList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;
const StyledProductListItem = styled.li`
  margin-bottom: 40px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;
class ProductsList extends Component {
  handleChangeValue = () => {};
  render() {
    const { basket } = this.props;
    return (
      <StyledProductList>
        {basket.map((product) => {
          return (
            <StyledProductListItem key={product.stringifiedAttributes}>
              <ProductName text={product.productInfo.brand} />
              <ProductName text={product.productInfo.name} />
              <ProductPrice
                amount={product.amount}
                prices={product.productInfo.prices}
              />
              <ProductAttributes
                selectedInfo={product.stringifiedAttributes}
                type="small"
                data={product.productInfo.attributes}
                handleChangeValue={this.handleChangeValue}
              />
            </StyledProductListItem>
          );
        })}
      </StyledProductList>
    );
  }
}
export default ProductsList;
