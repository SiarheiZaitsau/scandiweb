import React, { Component } from "react";
import styled from "styled-components";

const StyledProductName = styled.p`
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  h1 {
    line-height: 40px;
    font-size: 30px;
  }
  h2 {
    font-size: 24px;
  }
`;

class ProductName extends Component {
  render() {
    return (
      <StyledProductName
        dangerouslySetInnerHTML={{ __html: this.props.text }}
      />
    );
  }
}

export default ProductName;
