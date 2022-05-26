import React, { Component } from "react";
import styled from "styled-components";

const StyledMainImage = styled.img.attrs((props) => ({
  src: props.src,
  alt: "mainImage",
}))`
  width: 610px;
  height: 511px;
  object-fit: cover;
  object-position: top;
  margin-right: 100px;
`;

class MainImage extends Component {
  render() {
    return <StyledMainImage src={this.props.image} />;
  }
}

export default MainImage;
