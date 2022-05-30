import React, { Component } from "react";
import styled from "styled-components";
import ProductAttribute from "./ProductAttribute";

const StyledProductAttributes = styled.ul`
  margin-bottom: ${(props) => (props.type === "small" ? "0" : "36px")};
  list-style: none;
`;

class ProductAttributes extends Component {
  render() {
    const { handleChangeValue, type, data, selectedInfo } = this.props;
    return (
      <StyledProductAttributes type={type}>
        {data.map((attribute) => {
          return (
            <ProductAttribute
              selectedInfo={selectedInfo}
              type={type}
              handleChangeValue={handleChangeValue}
              key={attribute.name}
              attribute={attribute}
            />
          );
        })}
      </StyledProductAttributes>
    );
  }
}

export default ProductAttributes;
