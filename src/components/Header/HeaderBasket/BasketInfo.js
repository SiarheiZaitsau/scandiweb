import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getBasket, getCurrency } from "../../../redux/selectors/index";
import { ReactComponent as BasketIcon } from "../../../images/basket.svg";
import BasketInfoDropDown from "./BasketInfoDropDown";
import withRouter from "../../../HOCs/withRouter";
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
  font-family: "Roboto";
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
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.state = {
      isOpen: false,
      basketValue: null,
      currencySymbol: "",
    };
  }
  handleClickOutside(e) {
    if (this.ref.current && !this.ref.current.contains(e.target)) {
      this.toggling();
      e.stopPropagation();
    }
  }
  toggling = () => {
    this.setState({ isOpen: !this.state.isOpen });
    this.state.isOpen
      ? (document.body.style.overflow = "unset")
      : (document.body.style.overflow = "hidden");
  };
  componentDidMount() {
    document.addEventListener("click", this.handleClickOutside, true);
    this.calculateBasketValue(this.props.basket, this.props.currency);
  }
  componentDidUpdate(prevProps) {
    if (this.props !== prevProps && this.props.basket.length < 1) {
      this.setState({ isOpen: false });
      document.body.style.overflow = "unset";
    }
    if (
      this.props !== prevProps &&
      (this.props.basket !== prevProps.basket ||
        this.props.currency !== prevProps.currency)
    ) {
      this.calculateBasketValue(this.props.basket, this.props.currency);
    }
  }
  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside, true);
  }

  calculateBasketValue = (basket, currency) => {
    let symbol = "";
    const res = basket.reduce((acc, current) => {
      current.productInfo.prices.forEach((prices) => {
        if (prices.currency.label === currency.name) {
          acc += prices.amount * current.amount;
          symbol = prices.currency.symbol;
        }
      });
      return acc;
    }, 0);
    this.setState({ basketValue: res.toFixed(2), currencySymbol: symbol });
  };

  render() {
    const { length } = this.props.basket;
    const { basketValue, currencySymbol } = this.state;
    const { location } = this.props;
    return (
      <StyledBasketInfoContainer>
        <StyledBasketButton
          disabled={length < 1 || location.pathname === "/basket"}
          onClick={() => this.toggling()}
        >
          <BasketIcon
            style={{ fill: "#1D1F22", width: "20px", height: "20px" }}
          />
          {length > 0 && <StyledBasketInfo>{length}</StyledBasketInfo>}
        </StyledBasketButton>
        {this.state.isOpen && (
          <BasketInfoDropDown
            closeBasket={this.toggling}
            basket={this.props.basket}
            innerRef={this.ref}
            price={basketValue}
            symbol={currencySymbol}
          />
        )}
      </StyledBasketInfoContainer>
    );
  }
}
const mapStateToProps = (state) => {
  return { basket: getBasket(state), currency: getCurrency(state) };
};
export default withRouter(connect(mapStateToProps)(BasketInfo));
