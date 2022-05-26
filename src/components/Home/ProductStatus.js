import React, { Component } from "react";
import styled from "styled-components";

const StyledProductStatus = styled.p`
  font-size: 24px;
  font-weight: 400;
  line-height: 38px;
  position: absolute;
  top: 50%;
  width: 100%;
  text-align: center;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
`;

export default class ProductsList extends Component {
  render() {
    return <StyledProductStatus>{this.props.text}</StyledProductStatus>;
  }
}
