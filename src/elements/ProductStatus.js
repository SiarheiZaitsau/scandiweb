import React, { Component } from "react";
import styled from "styled-components";

const StyledProductStatus = styled.p`
  font-size: ${(props) => (props.type ? "36px" : "24px")};
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
    const { type } = this.props;
    return (
      <StyledProductStatus type={type}>{this.props.text}</StyledProductStatus>
    );
  }
}
