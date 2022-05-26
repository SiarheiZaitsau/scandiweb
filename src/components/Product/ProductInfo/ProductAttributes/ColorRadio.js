import React, { Component } from "react";
import styled from "styled-components";

const StyledLabel = styled.label.attrs((props) => ({
  htmlFor: props.htmlFor,
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 31px;
  border: ${({ color }) =>
    color === "#FFFFFF" ? "1px solid #1d1f22" : "none"};
  width: 31px;
  background: ${({ color }) => color || "transparent"};
  cursor: pointer;
`;

const StyledInput = styled.input.attrs((props) => ({
  type: props.type,
  name: props.name,
  id: props.id,
  value: props.value,
  onChange: props.onChange,
}))`
  display: none;
  &:checked + ${StyledLabel}::before {
    content: "";
    position: absolute;
    width: 33px;
    height: 33px;
    background: transparent;
    border: ${(props) => `1px solid ${props.theme.colors.primary}`};
  }
`;
const StyledContainer = styled.div`
  margin-right: 12px;
  &:last-of-type {
    margin-right: 0;
  }
`;

export default class DefaultRadio extends Component {
  render() {
    return (
      <StyledContainer>
        <StyledInput
          type="radio"
          onChange={this.props.onChange}
          value={this.props.value}
          name={this.props.name}
          id={this.props.value}
        />
        <StyledLabel color={this.props.color} htmlFor={this.props.value} />
      </StyledContainer>
    );
  }
}
