import React, { Component } from "react";
import styled from "styled-components";
import { getPrice } from "../../helpers/prices";
import { connect } from "react-redux";
import { getCurrency } from "../../redux/selectors/index";

const StyledProductPrice = styled.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  margin-bottom: 20px;
`;
class ProductPrice extends Component {
  render() {
    const { prices, currency } = this.props;
    const { symbol, price } = getPrice(prices, currency.name);
    return (
      <StyledProductPrice>{`${symbol}${price.toFixed(2)}`}</StyledProductPrice>
    );
  }
}

const mapStateToProps = (state) => {
  return { currency: getCurrency(state) };
};
export default connect(mapStateToProps)(ProductPrice);
