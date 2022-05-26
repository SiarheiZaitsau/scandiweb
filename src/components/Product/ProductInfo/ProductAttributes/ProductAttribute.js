import React, { Component } from "react";
import styled from "styled-components";
import ProductAttributeText from "./ProductAttributeText";
import Flex from "../../../Flex";
import DefaultRadio from "./DefaultRadio";
import ColorRadio from "./ColorRadio";

const StyledProductAttribute = styled.li`
  margin-bottom: 24px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

class ProductAttribute extends Component {
  render() {
    if (this.props?.attribute.name === "Color") {
      return (
        <StyledProductAttribute>
          <ProductAttributeText text={this.props?.attribute?.name} />
          <Flex>
            {this.props?.attribute.items.map((item) => {
              return (
                <ColorRadio
                  key={item.value}
                  value={item.value}
                  name={this.props?.attribute?.name}
                  onChange={() =>
                    this.props.handleChangeValue(
                      this.props?.attribute?.name,
                      item.value
                    )
                  }
                  color={item.value}
                />
              );
            })}
          </Flex>
        </StyledProductAttribute>
      );
    }
    return (
      <StyledProductAttribute>
        <ProductAttributeText text={this.props?.attribute?.name} />
        <Flex>
          {this.props?.attribute === "Color"}
          {this.props?.attribute.items.map((item) => {
            return (
              <DefaultRadio
                key={item.value}
                value={item.value}
                name={this.props?.attribute?.name}
                onChange={() =>
                  this.props.handleChangeValue(
                    this.props?.attribute?.name,
                    item.value
                  )
                }
              />
            );
          })}
        </Flex>
      </StyledProductAttribute>
    );
  }
}

export default ProductAttribute;
