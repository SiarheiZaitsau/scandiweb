import React, { Component } from "react";
import styled from "styled-components";

const StyledTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  margin-bottom: 55px;
`;
class Title extends Component {
  render() {
    return <StyledTitle>{this.props.text}</StyledTitle>;
  }
}

export default Title;
