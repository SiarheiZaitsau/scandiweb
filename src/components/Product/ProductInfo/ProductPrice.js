import React, { Component } from "react";
import styled from "styled-components";
import { getPrice } from "../../../helpers/prices";
import { connect } from "react-redux";
import { getCurrency } from "../../../redux/selectors/index";
const StyledProductPriceTitle = styled.h6`
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  margin-bottom: 16px;
`;
const StyledProductPrice = styled.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 18px;
  text-align: left;
  margin-bottom: 32px;
`;
class ProductPrice extends Component {
  render() {
    return (
      <>
        <StyledProductPriceTitle>Price:</StyledProductPriceTitle>
        <StyledProductPrice>
          {getPrice(this.props.prices, this.props.currency)}
        </StyledProductPrice>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { currency: getCurrency(state) };
};
export default connect(mapStateToProps)(ProductPrice);
