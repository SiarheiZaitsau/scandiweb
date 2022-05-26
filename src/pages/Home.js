import Header from "../components/Header/Header";
import React from "react";
import Products from "./Products.js";
import { Routes, Route } from "react-router-dom";
import getQuery from "../HOCs/getQuery";
import { GET_ALL_PRODUCTS } from "../query/products";
import { dataToStore } from "../redux/actions/actions";
import { connect } from "react-redux";
import Product from "./Product";
import Loader from "../components/Loader/Loader";

class Home extends React.Component {
  // componentDidMount() {
  //   if (this.props?.data?.responseData?.category?.products) {
  //     this.props.saveData(this.props.data?.responseData.category?.products);
  //   }
  // }
  componentDidUpdate() {
    if (this.props.data?.responseData?.category?.products) {
      this.props.saveData(this.props?.data.responseData.category?.products);
    }
  }
  render() {
    if (this.props.data.responseData) {
      return (
        <>
          <Header />
        </>
      );
    }
    return (
      <>
        <Loader />
      </>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    saveData: (data) => {
      dispatch(dataToStore(data));
    },
  };
};
export default connect(
  null,
  mapDispatchToProps
)(
  getQuery({
    query: GET_ALL_PRODUCTS,
  })(Home)
);
