import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getCurrency } from "../../redux/selectors/index";
import { getPrice } from "../../helpers/prices";
const StyledProductPrice = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 29px;
`;
class ProductPrice extends Component {
  render() {
    return (
      <StyledProductPrice>
        {getPrice(this.props.prices, this.props.currency)}
      </StyledProductPrice>
    );
  }
}
const mapStateToProps = (state) => {
  return { currency: getCurrency(state) };
};
export default connect(mapStateToProps)(ProductPrice);
