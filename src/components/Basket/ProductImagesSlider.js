import React, { Component } from "react";
import ImagesSliderButtons from "./ImagesSliderButtons";
import styled from "styled-components";
import Flex from "../../elements/Flex";

const StyledProductSliderMainImage = styled.img.attrs((props) => ({
  src: props.src,
  alt: "product image",
}))`
  position: relative;
  max-height: 288px;
  object-fit: contain;
  align-self: center;

  width: 200px;
  margin-left: 24px;
`;

class ProductImagesSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImgIndex: 0,
      activeImage: this.props.images[0],
    };
  }
  changeImage = (type) => {
    const { currentImgIndex } = this.state;
    const { images } = this.props;
    if (type === "next") {
      if (currentImgIndex === images.length - 1) {
        this.setState({
          currentImgIndex: 0,
          activeImage: images[0],
        });
      } else {
        this.setState({
          currentImgIndex: currentImgIndex + 1,
          activeImage: images[currentImgIndex + 1],
        });
      }
    }
    if (type === "prev") {
      if (currentImgIndex === 0) {
        this.setState({
          currentImgIndex: images.length - 1,
          activeImage: images[images.length - 1],
        });
      } else {
        this.setState({
          currentImgIndex: currentImgIndex - 1,
          activeImage: images[currentImgIndex - 1],
        });
      }
    }
  };
  render() {
    const { activeImage } = this.state;

    return (
      <Flex position="relative">
        <StyledProductSliderMainImage src={activeImage} />
        <ImagesSliderButtons changeImage={this.changeImage} />
      </Flex>
    );
  }
}

export default ProductImagesSlider;
