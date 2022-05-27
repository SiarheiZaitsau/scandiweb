import Header from "../components/Header/Header";
import React from "react";

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

export default Home;
