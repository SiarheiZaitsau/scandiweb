import React, { Component } from "react";
import styled from "styled-components";
import ProductAttributeText from "./ProductAttributeText";
import Flex from "../../../Flex";
import DefaultRadio from "./DefaultRadio";
import ColorRadio from "./ColorRadio";

const StyledProductAttribute = styled.li`
  margin-bottom: ${(props) => (props.type === "small" ? "8px" : "24px")};
  &:last-of-type {
    margin-bottom: 0;
  }
`;

class ProductAttribute extends Component {
  render() {
    const {
      attribute,
      type,
      handleChangeValue,
      selectedInfo,
      selectedValue,
      productId,
      disabled,
    } = this.props;
    if (attribute.name === "Color") {
      return (
        <StyledProductAttribute type={type}>
          <ProductAttributeText text={attribute.name} />
          <Flex>
            {attribute.items.map((item) => {
              return (
                <ColorRadio
                  id={selectedInfo ? selectedInfo + item.value : item.value}
                  type={type}
                  key={item.value}
                  value={item.value}
                  name={attribute.name}
                  disabled={disabled}
                  onChange={() =>
                    handleChangeValue(
                      attribute.name,
                      item.value,
                      selectedInfo,
                      productId
                    )
                  }
                  color={item.value}
                  selectedValue={selectedValue}
                />
              );
            })}
          </Flex>
        </StyledProductAttribute>
      );
    }
    return (
      <StyledProductAttribute type={type}>
        <ProductAttributeText type={type} text={attribute.name} />
        <Flex>
          {attribute.items.map((item) => {
            return (
              <DefaultRadio
                id={
                  selectedInfo
                    ? selectedInfo + attribute.name + item.value
                    : item.value + attribute.name
                }
                type={type}
                key={item.value}
                value={item.value}
                name={
                  selectedInfo ? selectedInfo + attribute.name : attribute.name
                }
                onChange={() =>
                  this.props.handleChangeValue(
                    attribute.name,
                    item.value,
                    selectedInfo,
                    productId
                  )
                }
                disabled={disabled}
                selectedValue={selectedValue}
              />
            );
          })}
        </Flex>
      </StyledProductAttribute>
    );
  }
}

export default ProductAttribute;
