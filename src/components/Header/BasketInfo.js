import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getBasket } from "../../redux/selectors/index";
import { ReactComponent as Basket } from "../../images/basket.svg";

const StyledBasketInfoContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledBasketInfo = styled.div`
  font-family: Roboto;
  font-weight: 700;
  font-size: 14px;
  line-height: 16.41px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: calc(-50% + 2px);
  right: calc(-50% - 2px);
  position: absolute;
  background: #000;
  color: #fff;
  width: 20px;
  height: 20px;
  border-radius: 60px;
`;
class BasketInfo extends Component {
  render() {
    const { length } = this.props.basket;
    return (
      <StyledBasketInfoContainer>
        <Basket style={{ width: "20px", height: "20px;" }} />
        {length > 0 && <StyledBasketInfo>{length}</StyledBasketInfo>}
      </StyledBasketInfoContainer>
    );
  }
}
const mapStateToProps = (state) => {
  return { basket: getBasket(state) };
};
export default connect(mapStateToProps)(BasketInfo);
