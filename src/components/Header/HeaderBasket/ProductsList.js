import React, { Component } from "react";
import styled from "styled-components";
import ProductName from "./ProductName";
import ProductPrice from "./ProductPrice";
import ProductAttributes from "../../../elements/ProductAttributes/ProductAttributes";
import Flex from "../../Flex";
import BasketProductCounter from "./BasketProductCounter";
import ProductImage from "./ProductImage";
import { connect } from "react-redux";
import { changeAttributeValue } from "../../../redux/slices/basketSlice/basketSlice";

const StyledProductList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-bottom: 41px;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 350px;
`;
const StyledProductListItem = styled.li`
  margin-bottom: 40px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;
const StyledAttributesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 136px;
`;

class ProductsList extends Component {
  handleChangeValue = (name, value, currentId, productId) => {
    this.props.changeAttribute({ productId, currentId, name, value });
  };
  render() {
    const { basket } = this.props;
    return (
      <StyledProductList>
        {basket.map((product) => {
          return (
            <StyledProductListItem key={product.stringifiedAttributes}>
              <Flex>
                <StyledAttributesContainer>
                  <ProductName text={product.productInfo?.brand} />
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
                    productId={product.productId}
                    disabled={true}
                  />
                </StyledAttributesContainer>
                <BasketProductCounter
                  product={product}
                  amount={product.amount}
                  buttonsType="small"
                />
                <ProductImage image={product.productInfo.gallery[0]} />
              </Flex>
            </StyledProductListItem>
          );
        })}
      </StyledProductList>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeAttribute: (product, name, newValue) => {
      dispatch(changeAttributeValue(product, name, newValue));
    },
  };
};
export default connect(null, mapDispatchToProps)(ProductsList);
