import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNavItem = styled.li`
  display: flex;
  list-style: none;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  position: relative;
  & .active {
    transition: all 0.3s ease;
    color: ${(props) => props.theme.colors.primary};
  }
  & .active:before {
    content "";
    left: 0;
    bottom: -32px;
    position: absolute;
    width: 100%;
    transition: all 0.3s ease;
    border-bottom: ${(props) => `2px solid ${props.theme.colors.primary}`};
  }
`;
export const Tab = styled(NavLink)`
  height: 100%;
  width: 100%;
  padding: 0 16px;
  transition: all 0.3s ease;
  &:hover {
    color: #5ece7b;
  }
`;
class NavItem extends React.Component {
  render() {
    const { name } = this.props;

    if (name === "all") {
      return (
        <StyledNavItem {...this.props}>
          <Tab to={`/`} params={{ category: "" }}>
            all
          </Tab>
        </StyledNavItem>
      );
    }
    return (
      <StyledNavItem {...this.props}>
        <Tab to={`${name}`} params={{ category: name }}>
          {name}
        </Tab>
      </StyledNavItem>
    );
  }
}

export default NavItem;
