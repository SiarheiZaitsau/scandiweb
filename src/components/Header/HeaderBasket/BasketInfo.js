import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getBasket } from "../../../redux/selectors/index";
import { ReactComponent as BasketIcon } from "../../../images/basket.svg";
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
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.state = {
      isOpen: false,
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
      : (document.body.style.overflow = "hidden"); // ??
  };
  componentDidMount() {
    document.addEventListener("click", this.handleClickOutside, true);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside, true);
  }

  render() {
    const { length } = this.props.basket;
    return (
      <StyledBasketInfoContainer>
        <StyledBasketButton onClick={() => this.toggling()}>
          <BasketIcon
            style={{ fill: "#1D1F22", width: "20px", height: "20px" }}
          />
          {length > 0 && <StyledBasketInfo>{length}</StyledBasketInfo>}
        </StyledBasketButton>
        {this.state.isOpen && (
          <BasketInfoDropDown basket={this.props.basket} innerRef={this.ref} />
        )}
      </StyledBasketInfoContainer>
    );
  }
}
const mapStateToProps = (state) => {
  return { basket: getBasket(state) };
};
export default connect(mapStateToProps)(BasketInfo);
