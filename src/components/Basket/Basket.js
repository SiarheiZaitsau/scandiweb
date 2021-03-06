import React, { Component } from "react";
import WidthContainer from "../../elements/WidthContainer";
import PageTitle from "./PageTitle";
import ProductList from "./ProductList";
import BasketAttribute from "./BasketAttribute";
import Button from "../../elements/Button";
import { connect } from "react-redux";
import { getBasket, getCurrency } from "../../redux/selectors";
import { clearBasket } from "../../redux/slices/basketSlice/basketSlice";
import withRouter from "../../HOCs/withRouter";
import { calculateTax, calculateQuantity } from "../../helpers/prices";
import { discount } from "../../constants/index";

class Basket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      basketValue: null,
      currencySymbol: "",
      taxValue: null,
    };
  }
  makeOrder = () => {
    this.props.clearBasket();
    this.props.navigate("/");
    console.log(this.props.basket, "basket");
  };
  componentDidMount() {
    if (this.props.basket.length < 1) {
      this.props.navigate("/");
    }
    this.calculateBasketValue(this.props.basket, this.props.currency.name);
  }
  componentDidUpdate(prevProps) {
    if (this.props !== prevProps && this.props.basket.length < 1) {
      this.props.navigate("/");
    }
    if (
      this.props !== prevProps &&
      (this.props.basket !== prevProps.basket ||
        this.props.currency !== prevProps.currency)
    ) {
      this.calculateBasketValue(this.props.basket, this.props.currency.name);
    }
  }
  calculateBasketValue = (basket, currency) => {
    let symbol = "";
    const res = basket.reduce((acc, current) => {
      current.productInfo.prices.forEach((prices) => {
        if (prices.currency.label === currency) {
          acc += prices.amount * current.amount;
          symbol = prices.currency.symbol;
        }
      });
      return acc;
    }, 0);
    this.setState({
      basketValue: calculateTax(res).sum.toFixed(2),
      currencySymbol: symbol,
      taxValue: calculateTax(res).tax.toFixed(2),
    });
  };
  render() {
    const { basket } = this.props;
    const { basketValue, currencySymbol, taxValue } = this.state;
    return (
      <WidthContainer padding="80px 101px" direction="column">
        <PageTitle text="Cart" />
        <ProductList basket={basket} />
        <BasketAttribute
          text={`Tax ${discount}%`}
          value={`${currencySymbol}${taxValue}`}
        />
        <BasketAttribute text="Quantity" value={calculateQuantity(basket)} />
        <BasketAttribute
          text="Price"
          value={basketValue}
          symbol={currencySymbol}
          type="price"
        />
        <Button
          margin="16px 0 0 0"
          onClick={this.makeOrder}
          text="Order"
          type="large"
        />
      </WidthContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return { basket: getBasket(state), currency: getCurrency(state) };
};
const mapDispatchToProps = (dispatch) => {
  return {
    clearBasket: () => {
      dispatch(clearBasket());
    },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Basket));
