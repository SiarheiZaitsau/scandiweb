import React, { Component } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: center;
  width: ${(props) => (props.size === "small" ? "140px" : "279px")};
  height: 43px;
  cursor: pointer;
  background: ${(props) =>
    props.type ? "transparent" : `${props.theme.colors.primary}`};
  color: ${(props) => (props.type ? "#1D1F22" : "#fff")};
  box-shadow: none;
  border: ${(props) => (props.type ? "1px solid #1D1F22" : `none`)};
  transition: all 0.3s ease;
  margin: ${({ margin }) => margin || "0"};
  &:first-child {
    margin-right: 12px;
  }
  &:hover {
    background: ${(props) => (props.type ? "#1D1F22" : `#8edca2`)};
    color: #fff;
  }
`;
class Button extends Component {
  render() {
    const { text, onClick, size, margin } = this.props;
    return (
      <StyledButton margin={margin} size={size} onClick={onClick}>
        {text}
      </StyledButton>
    );
  }
}

export default Button;
