import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  incrementAmount,
  decrementAmount,
} from "../redux/slices/basketSlice/basketSlice";

const StyledCounterContainer = styled.div.attrs((props) => ({
  isBasket: props.isBasket,
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-left: ${(props) => (props.isBasket ? "auto" : "4px")};
`;

const StyledCounterButton = styled.button.attrs((props) => ({
  type: props.type,
}))`
  border: 0;
  box-shadow: none;
  width: ${(props) => (props.type === "small" ? "24px" : "45px")};
  height: ${(props) => (props.type === "small" ? "24px" : "45px")};
  font-weight: 500;
  font-size: 16px;
  border: 1px solid #1d1f22;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    background: #1d1f22;
    border: 0;
    color: #fff;
  }
`;
const StyledCounterValue = styled.p.attrs((props) => ({
  isBasket: props.isBasket,
}))`
  font-weight: 500;
  font-size: ${(props) => (props.isBasket ? "24px" : "16px")};
  line-height: ${(props) => (props.isBasket ? "38.4px" : "25.6px")};
`;

class Counter extends Component {
  incrementProduct = (product) => {
    this.props.increment(product);
  };
  decrementProduct = (product) => {
    this.props.decrement(product);
  };
  render() {
    const { amount, product, buttonsType, isBasket } = this.props;

    return (
      <StyledCounterContainer isBasket={isBasket}>
        <StyledCounterButton
          type={buttonsType}
          onClick={() => this.incrementProduct(product)}
        >
          +
        </StyledCounterButton>
        <StyledCounterValue isBasket={isBasket}>{amount}</StyledCounterValue>
        <StyledCounterButton
          type={buttonsType}
          onClick={() => this.decrementProduct(product)}
        >
          -
        </StyledCounterButton>
      </StyledCounterContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (product) => {
      dispatch(incrementAmount(product));
    },
    decrement: (product) => {
      dispatch(decrementAmount(product));
    },
  };
};
export default connect(null, mapDispatchToProps)(Counter);
