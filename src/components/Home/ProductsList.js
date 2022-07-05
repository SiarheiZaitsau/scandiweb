import React, { Component } from "react";
import styled from "styled-components";
import ProductItem from "./ProductItem";

const StyledProductsList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 100%;
`;

export default class ProductsList extends Component {
  render() {
    return (
      <StyledProductsList>
        {this.props.data?.map((product) => {
          return <ProductItem key={product.id} product={product} />;
        })}
      </StyledProductsList>
    );
  }
}
