import React, { Component } from "react";
import styled from "styled-components";

const StyledTitle = styled.h2`
  font-size: 42px;
  font-weight: 400;
  line-height: 67px;
  text-align: left;
  text-transform: capitalize;
`;
class Title extends Component {
  render() {
    return <StyledTitle>{this.props.text}</StyledTitle>;
  }
}

export default Title;
