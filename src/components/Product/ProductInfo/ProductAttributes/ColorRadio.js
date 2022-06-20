import React, { Component } from "react";
import styled from "styled-components";

const StyledLabel = styled.label.attrs((props) => ({
  htmlFor: props.htmlFor,
}))`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  height: ${(props) => (props.styleType === "small" ? "14px" : "31px")};
  width: ${(props) => (props.styleType === "small" ? "14px" : "31px")};
  margin-left: ${(props) => (props.styleType === "small" ? "2px" : "0")};
  margin-bottom: 2px;
  border: ${({ color }) =>
    color === "#FFFFFF" ? "1px solid #1d1f22" : "none"};
  background: ${({ color }) => color || "transparent"};
  cursor: pointer;
`;

const StyledInput = styled.input.attrs((props) => ({
  type: props.type,
  name: props.name,
  id: props.id,
  value: props.value,
  onChange: props.onChange,
  defaultChecked: props.defaultChecked,
  disabled: props.disabled,
}))`
  display: none;
  &:checked + ${StyledLabel}::before {
    content: "";
    position: absolute;
    width: ${(props) => (props.styleType === "small" ? "16px" : "33px")};
    height: ${(props) => (props.styleType === "small" ? "16px" : "33px")};
    background: transparent;
    border: ${(props) => `1px solid ${props.theme.colors.primary}`};
  }
`;
const StyledContainer = styled.div`
  margin-right: ${(props) => (props.styleType === "small" ? "8px" : "12px")};
  &:last-of-type {
    margin-right: 0;
  }
`;

export default class DefaultRadio extends Component {
  render() {
    const { onChange, value, name, type, color, id, selectedValue, disabled } =
      this.props;
    return (
      <StyledContainer styleType={type}>
        <StyledInput
          styleType={type}
          type="radio"
          onChange={onChange}
          value={value}
          name={name}
          id={id}
          defaultChecked={selectedValue ? value === selectedValue : null}
          disabled={disabled}
        />
        <StyledLabel styleType={type} color={color} htmlFor={id} />
      </StyledContainer>
    );
  }
}
