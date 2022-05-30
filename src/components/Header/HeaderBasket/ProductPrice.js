import React, { Component } from "react";
import styled from "styled-components";
import { getPrice } from "../../../helpers/prices";
import { connect } from "react-redux";
import { getCurrency } from "../../../redux/selectors/index";

const StyledProductPrice = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
  margin-top: 4px;
  margin-bottom: 8px;
`;
class ProductPrice extends Component {
  render() {
    const { prices, currency, amount } = this.props;
    const { symbol, price } = getPrice(prices, currency);
    return (
      <StyledProductPrice>{`${symbol}${price * amount}`}</StyledProductPrice>
    );
  }
}

const mapStateToProps = (state) => {
  return { currency: getCurrency(state) };
};
export default connect(mapStateToProps)(ProductPrice);
