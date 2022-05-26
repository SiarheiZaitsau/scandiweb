import React from "react";
import styled from "styled-components";
import NavItem from "./NavItem";
import CurrencySelect from "./CurrencySelect/CurrentSelect";
import WidthContainer from "../WidthContainer";
import Flex from "../Flex.js";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { ReactComponent as Basket } from "../../images/basket.svg";
import { getCategories } from "../../redux/selectors/index";
import { connect } from "react-redux";

const StyledHeader = styled.header`
  display: flex;
  width: 100%; // ??
  height: 80px;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
const StyledNavigation = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
`;
export const StyledNavLink = styled(NavLink)`
  top: 50%;
  left: 50%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
`;
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {}

  render() {
    const { categories } = this.props;
    return (
      <WidthContainer>
        <StyledHeader {...this.props}>
          <StyledNavigation>
            {categories.map((category) => {
              return <NavItem key={category.name} name={category.name} />;
            })}
          </StyledNavigation>
          <StyledNavLink to="/">
            <Logo />
          </StyledNavLink>
          <Flex align="center">
            <Flex margin="0 22px 0 0" align="center">
              <CurrencySelect margin="0 10px 0 0">$</CurrencySelect>
            </Flex>
            <Basket />
          </Flex>
        </StyledHeader>
      </WidthContainer>
    );
  }
}

export default Header;
