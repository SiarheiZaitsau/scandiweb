import React, { Component } from "react";
import styled from "styled-components";

const StyledProductImage = styled.img.attrs((props) => ({
  src: props.src,
  alt: "mainImage",
}))`
  width: 121px;
  height: 190px;
  object-fit: contain;
  margin-left: 8px;
`;

class ProductImage extends Component {
  render() {
    return <StyledProductImage src={this.props.image} />;
  }
}

export default ProductImage;
