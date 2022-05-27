import React, { Component } from "react";
import Flex from "../../Flex";
import ProductAttributes from "./ProductAttributes/ProductAttributes";
import ProductBrand from "./ProductBrand";
import ProductName from "./ProductName";
import ProductPrice from "./ProductPrice";
import ProductButton from "./ProductButton";
import ProductDescription from "./ProductDescription";
import ErrorText from "./ErrorText";
import { connect } from "react-redux";
import { addProduct } from "../../../redux/slices/basketSlice/basketSlice";
import styled from "styled-components";

const StyledProductForm = styled.form``;

class ProductInfo extends Component {
  submitForm = (e) => {
    e.preventDefault();
    const { selectedAttributes } = this.state;

    if (Object.values(selectedAttributes).includes(null)) {
      this.setState({ isError: true });
    } else {
      const productId = this.props.product.id;
      const stringifiedAttributes = JSON.stringify(selectedAttributes);
      this.props.productToBasket({
        ...selectedAttributes,
        productId,
        stringifiedAttributes,
      });
      this.setState({ isError: false });
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      selectedAttributes: {},
      isError: false,
    };
  }
  componentDidMount() {
    let selectedAttributes = {};
    this.props?.product?.attributes.forEach(
      (attribute) => (selectedAttributes[attribute?.name] = null)
    );

    this.setState({ selectedAttributes });
  }
  handleChangeValue = (name, value) => {
    const { selectedAttributes } = this.state;
    this.setState({
      selectedAttributes: {
        ...selectedAttributes,
        [name]: value,
      },
    });
  };
  render() {
    const { product } = this.props;
    return (
      <Flex direction="column">
        <StyledProductForm>
          <ProductBrand text={product.brand} />
          <ProductName name={product.name} />
          <ProductAttributes
            handleChangeValue={this.handleChangeValue}
            id={product.id}
            data={product?.attributes}
          />
          {this.state.isError && <ErrorText />}
          <ProductPrice prices={product.prices} />
          <ProductButton onClick={this.submitForm} />
          <ProductDescription text={product.description} />
        </StyledProductForm>
      </Flex>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    productToBasket: (product) => {
      dispatch(addProduct(product));
    },
  };
};
export default connect(null, mapDispatchToProps)(ProductInfo);
