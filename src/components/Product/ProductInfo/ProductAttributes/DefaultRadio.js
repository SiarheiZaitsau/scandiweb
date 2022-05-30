import React, { Component } from "react";
import styled from "styled-components";
const StyledLabel = styled.label.attrs((props) => ({
  htmlFor: props.htmlFor,
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${(props) => (props.styleType === "small" ? "24px" : "45px")};
  min-width: ${(props) => (props.styleType === "small" ? "24px" : "63px")};
  background: transparent;
  border: 1px solid #1d1f22;
  font-family: Source Sans Pro;
  font-size: ${(props) => (props.styleType === "small" ? "14px" : "16px")};
  font-weight: 400;
  padding: 4px;
  cursor: pointer;
  line-height: ${(props) => (props.styleType === "small" ? "22.4px" : "18px")};
  letter-spacing: 0.05em;
`;

const StyledInput = styled.input.attrs((props) => ({
  type: props.type,
  name: props.name,
  id: props.id,
  value: props.value,
  onChange: props.onChange,
}))`
  display: none;
  &:checked + ${StyledLabel} {
    color: #fff;
    background: #1d1f22;
  }
`;
const StyledContainer = styled.div`
  margin-right: ${(props) => (props.styleType === "small" ? "8px" : "12px")};
  &:last-of-type {
    margin-right: 0;
  }
  input[type="radio"]:checked + label:before {
    background: #1d1f22;
    color: #fff;
  }
`;

export default class DefaultRadio extends Component {
  render() {
    const { type, onChange, value, name, id } = this.props;
    console.log(id, "id");
    return (
      <StyledContainer styleType={type}>
        <StyledInput
          type="radio"
          onChange={onChange}
          value={value}
          name={name}
          id={id}
        />
        <StyledLabel styleType={type} htmlFor={id}>
          {value}
        </StyledLabel>
      </StyledContainer>
    );
  }
}
