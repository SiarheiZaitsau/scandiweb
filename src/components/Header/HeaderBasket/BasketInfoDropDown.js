import React, { Component } from "react";
import styled from "styled-components";
import { SIZES } from "../../../helpers/styleVariables";
import BasketTitle from "./BasketTitle";
import ProductsList from "./ProductsList";
import BasketPrice from "./BasketPrice";
import BasketButtons from "./BasketButtons";
import withRouter from "../../../HOCs/withRouter";
import { clearBasket } from "../../../redux/slices/basketSlice/basketSlice";
import { connect } from "react-redux";

const StyledBasketInfoDropDown = styled.div`
  position: absolute;
  right: -28px;
  z-index: 12;
  background: #ffffff;
  padding: 32px 16px;
  top: calc(100% + 28px);
  width: 325px;
  max-height: 677px;
`;
const StyledBasketContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const StyledOverlay = styled.div`
  position: fixed;
  top: ${SIZES.headerHeight};
  left: 0;
  width: 100%;
  height: 100%;
  background: #393748;
  opacity: 0.22;
  z-index: 11;
  transition: all 0.3s ease;
`;

class BasketInfoDropDown extends Component {
  makeOrder = () => {
    this.props.clearBasket();
    this.props.navigate("/");
    console.log(this.props.basket);
  };
  render() {
    const { innerRef, basket, closeBasket, price, symbol } = this.props;
    return (
      <>
        <StyledBasketInfoDropDown ref={innerRef}>
          <StyledBasketContainer>
            <BasketTitle length={basket.length} />
            <ProductsList basket={basket} />
          </StyledBasketContainer>
          <BasketPrice price={price} symbol={symbol} />
          <BasketButtons
            makeOrder={this.makeOrder}
            basket={basket}
            closeBasket={closeBasket}
          />
        </StyledBasketInfoDropDown>
        <StyledOverlay />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearBasket: () => {
      dispatch(clearBasket());
    },
  };
};
export default withRouter(
  connect(null, mapDispatchToProps)(BasketInfoDropDown)
);
