import React, { Component } from "react";
import styled from "styled-components";

const StyledImagesListImage = styled.img.attrs((props) => ({
  src: props.src,
  alt: "productImg",
}))`
  width: 79px;
  height: 80px;
  object-fit: cover;
  object-position: top;
  cursor: pointer;
`;

class ImageListImage extends Component {
  render() {
    return (
      <StyledImagesListImage
        onClick={() => this.props.onClick(this.props.image)}
        src={this.props.image}
      />
    );
  }
}

export default ImageListImage;
