import React, { Component } from "react";
import styled from "styled-components";
import ProductStatus from "../../elements/ProductStatus";
const StyledMainImage = styled.img.attrs((props) => ({
  src: props.src,
  alt: "mainImage",
}))`
  width: 610px;
  height: 100%;
  object-fit: contain;
  margin-right: 100px;
`;
const StyledImageContainer = styled.div`
  position: relative;
  opacity: ${(props) => props.inStock || "0.5"};
  display: flex;
  max-height: 511px;
`;

class MainImage extends Component {
  render() {
    const { inStock, image } = this.props;
    return (
      <StyledImageContainer inStock={inStock}>
        <StyledMainImage src={image} />
        {!inStock && <ProductStatus type="big" text="Out of Stock" />}
      </StyledImageContainer>
    );
  }
}

export default MainImage;
