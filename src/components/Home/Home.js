import React, { Component } from "react";
import ProductsList from "./ProductsList";
import WidthContainer from "../../elements/WidthContainer";
import Title from "./Title";

export default class Home extends Component {
  render() {
    const { category, data } = this.props;
    return (
      <WidthContainer padding="80px 101px" direction="column">
        <Title text={category || "all"} />
        <ProductsList data={data} />
      </WidthContainer>
    );
  }
}
