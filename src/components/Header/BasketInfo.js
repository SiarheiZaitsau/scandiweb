import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getBasket } from "../../redux/selectors/index";
import { ReactComponent as BasketIcon } from "../../images/basket.svg";
import BasketInfoDropDown from "./BasketInfoDropDown";

const StyledBasketInfoContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledBasketButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
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
  toggling = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  render() {
    const { length } = this.props.basket;
    return (
      <StyledBasketInfoContainer>
        <StyledBasketButton onClick={() => this.toggling()}>
          <BasketIcon
            style={{ fill: "#1D1F22", width: "20px", height: "20px;" }}
          />
          {length > 0 && <StyledBasketInfo>{length}</StyledBasketInfo>}
        </StyledBasketButton>
        {this.state.isOpen && <BasketInfoDropDown />}
      </StyledBasketInfoContainer>
    );
  }
}
const mapStateToProps = (state) => {
  return { basket: getBasket(state) };
};
export default connect(mapStateToProps)(BasketInfo);
