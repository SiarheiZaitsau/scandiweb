import React, { Component } from "react";
import styled from "styled-components";
const StyledLabel = styled.label.attrs((props) => ({
  htmlFor: props.htmlFor,
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 63px;
  background: transparent;
  border: 1px solid #1d1f22;
  font-family: Source Sans Pro;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  line-height: 18px;
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
  margin-right: 12px;
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
    return (
      <StyledContainer>
        <StyledInput
          type="radio"
          onChange={this.props.onChange}
          value={this.props.value}
          name={this.props.name}
          id={this.props.name + this.props.value}
        />
        <StyledLabel htmlFor={this.props.name + this.props.value}>
          {this.props.value}
        </StyledLabel>
      </StyledContainer>
    );
  }
}
