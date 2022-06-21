import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import ProductName from "./ProductName";
import ProductPrice from "./ProductPrice";
import ProductStatus from "./ProductStatus";
import ProductToBasket from "./ProductToBasket";
import { NavLink } from "react-router-dom";
import Flex from "../../elements/Flex";
import { addProduct } from "../../redux/slices/basketSlice/basketSlice";
import { autoCompleteProduct } from "../../helpers/autoCompleteProduct";

const StyledProductItem = styled.li`
  margin-right: 40px;
  padding: 16px;
  width: calc(33.33% - (40px * 2 / 3));
  margin-bottom: 120px;
  height: 444px;
  transition: all 0.3s ease;
  opacity: ${(props) => props.inStock || "0.5"};
  pointer-events: ${(props) => (props.inStock ? "auto" : "none")};
  transition: all 0.3s ease;
  :nth-child(3n) {
    margin-right: 0;
  }
  &:nth-last-child(-n + 3) {
    margin-bottom: 0;
  }
  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }
  &:hover button {
    display: block;
  }
`;

const StyledProductImg = styled.img`
  width: 100%;
  height: 330px;
  margin-bottom: 24px;
  object-fit: cover;
  object-position: top;
  src: ${(props) => props.src};
`;

export const StyledNavLink = styled(NavLink)`
  display: block;
`;

class ProductItem extends Component {
  forceProductToBasket = (e) => {
    e.preventDefault();
    this.props.productToBasket(autoCompleteProduct(this.props.product));
  };
  render() {
    const { product } = this.props;
    return (
      <StyledProductItem inStock={product.inStock}>
        <StyledNavLink to={`/products/${product.id}`}>
          <Flex direction="column" position="relative">
            <StyledProductImg src={product.gallery[0]} />
            {!product.inStock && <ProductStatus text="OUT OF STOCK" />}
            {product.inStock && (
              <ProductToBasket toBasket={this.forceProductToBasket} />
            )}
          </Flex>
          <ProductName text={`${product.brand} ${product.name}`} />
          <ProductPrice prices={product.prices} />
        </StyledNavLink>
      </StyledProductItem>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    productToBasket: (product) => {
      dispatch(addProduct(product));
    },
  };
};
export default connect(null, mapDispatchToProps)(ProductItem);
