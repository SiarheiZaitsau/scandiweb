import React, { Component } from "react";
import styled from "styled-components";
import ProductBrand from "./ProductBrand";
import ProductName from "./ProductName";
import ProductPrice from "./ProductPrice";
import ProductAttributes from "../../elements/ProductAttributes/ProductAttributes";
import Counter from "../../elements/Counter";
import Flex from "../../elements/Flex";
import ProductImagesSlider from "./ProductImagesSlider";

const StyledProductsListItem = styled.li`
  padding: 24px 0;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
`;
class ProductListItem extends Component {
  render() {
    const { product } = this.props;
    return (
      <StyledProductsListItem>
        <Flex direction="column">
          <ProductBrand name={product.productInfo.brand} />
          <ProductName name={product.productInfo.name} />
          <ProductPrice
            amount={product.amount}
            prices={product.productInfo.prices}
          />
          <ProductAttributes
            selectedInfo={product.stringifiedAttributes}
            data={product.productInfo.attributes}
            handleChangeValue={this.handleChangeValue}
            productId={product.productId}
            disabled={true}
          />
        </Flex>
        <Counter isBasket={true} product={product} amount={product.amount} />
        <ProductImagesSlider images={product.productInfo.gallery} />
      </StyledProductsListItem>
    );
  }
}

export default ProductListItem;
