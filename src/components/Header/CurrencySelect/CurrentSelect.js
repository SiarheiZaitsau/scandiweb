import styled from "styled-components";
import React, { Component } from "react";
import { ReactComponent as DropdownIcon } from "../../../images/dropdown.svg";
import { connect } from "react-redux";
import { changeCurrency } from "../../../redux/slices/currencySlice/currencySlice";
import { fetchCurrencies } from "../../../helpers/requests";
import { getCurrency } from "../../../redux/selectors";

const Main = styled("div")`
  margin: ${({ margin }) => margin || "0"};
`;

const DropDownContainer = styled.div`
  margin: 0 auto;
  display: flex;
  position: relative;
  justify-content: center;
`;

const DropDownHeader = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const StyledOpenButton = styled.button`
  font-size: 18px;
  font-weight: 500;
  line-height: 28.8px;
`;
const DropDownActiveButton = styled.button.attrs((props) => ({
  value: props.value,
}))`
  font-size: 18px;
  font-weight: 500;
  line-height: 28.8px;
  width: 100%;
  cursor: pointer;
  padding: ${(props) => !props.isActive && "20px"};
`;

const DropDownListContainer = styled.div`
  position: absolute;
  z-index: 10;
  top: calc(100% + 15px);
`;

const DropDownList = styled.ul`
  z-index: -1;
  background: #ffffff;
  filter: drop-shadow(0px 4px 35px rgba(168, 172, 176, 0.19));
  width: 114px;
`;

const ListItem = styled.li`
  list-style: none;
  &:hover {
    background: #eeeeee;
  }
`;

class CurrentSelect extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.state = {
      options: [],
      selectedOption: this.props.currency.symbol,
      isOpen: false,
    };
  }
  handleClickOutside(e) {
    if (this.ref.current && !this.ref.current.contains(e.target)) {
      this.setState({ isOpen: false });
      e.stopPropagation();
    }
  }

  async componentDidMount() {
    document.addEventListener("click", this.handleClickOutside, true);
    const responseData = await fetchCurrencies();
    this.setState({ options: responseData.currencies });
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside, true);
  }

  toggling = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  onOptionClicked = (option, symbol) => {
    this.props.changeCurrency({ name: option, symbol });
    this.setState({ selectedOption: symbol, isOpen: false });
  };

  render() {
    return (
      <Main>
        <DropDownContainer>
          <DropDownHeader onClick={() => this.toggling()}>
            <StyledOpenButton isActive={true}>
              {this.state.selectedOption || "$"}
            </StyledOpenButton>
            <DropdownIcon
              style={{
                transition: "all .3s ease",
                transform: `rotate(${this.state.isOpen ? "180deg" : 0})`,
                marginLeft: "10px",
              }}
            />
          </DropDownHeader>
          {this.state.isOpen && (
            <DropDownListContainer>
              <DropDownList ref={this.ref}>
                {this.state.options.map((option) => (
                  <ListItem key={Math.random()}>
                    <DropDownActiveButton
                      value={option.label}
                      onClick={(e) =>
                        this.onOptionClicked(e.target.value, option.symbol)
                      }
                    >
                      {option.symbol} {option.label}
                    </DropDownActiveButton>
                  </ListItem>
                ))}
              </DropDownList>
            </DropDownListContainer>
          )}
        </DropDownContainer>
      </Main>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeCurrency: (currency) => {
      dispatch(changeCurrency(currency));
    },
  };
};
const mapStateToProps = (state) => {
  return { currency: getCurrency(state) };
};
export default connect(mapStateToProps, mapDispatchToProps)(CurrentSelect);
