import React, { Component } from "react";
import styled from "styled-components";
import ProductAttribute from "./ProductAttribute";

const StyledProductAttributes = styled.ul`
  margin-bottom: ${(props) => (props.type === "small" ? "0" : "36px")};
  list-style: none;
`;

class ProductAttributes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAttributes: null,
    };
  }
  componentDidMount() {
    const { selectedInfo } = this.props;
    if (selectedInfo) {
      this.setState({ selectedAttributes: JSON.parse(selectedInfo) });
    }
  }
  render() {
    const { handleChangeValue, type, data, selectedInfo, productId, disabled } =
      this.props;
    const { selectedAttributes } = this.state;
    return (
      <StyledProductAttributes type={type}>
        {data.map((attribute) => {
          return (
            <ProductAttribute
              selectedValue={
                selectedAttributes
                  ? this.state.selectedAttributes[attribute.name]
                  : ""
              }
              selectedInfo={selectedInfo}
              type={type}
              handleChangeValue={handleChangeValue}
              key={attribute.name}
              attribute={attribute}
              productId={productId}
              disabled={disabled}
            />
          );
        })}
      </StyledProductAttributes>
    );
  }
}

export default ProductAttributes;
