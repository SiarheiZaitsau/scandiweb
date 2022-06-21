import React, { Component } from "react";
import ImagesList from "./ImagesList";
import WidthContainer from "../../elements/WidthContainer";
import MainImage from "./MainImage";
import ProductInfo from "./ProductInfo/ProductInfo";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImage: this.props.product.gallery[0],
    };
  }
  getImage = (image) => {
    this.setState({ mainImage: image });
  };
  render() {
    const { product } = this.props;
    return (
      <WidthContainer padding="80px 101px">
        <ImagesList changeMainImage={this.getImage} gallery={product.gallery} />
        <MainImage image={this.state.mainImage} />
        <ProductInfo product={product} />
      </WidthContainer>
    );
  }
}
