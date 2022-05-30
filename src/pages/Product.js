import React from "react";
import withRouter from "../HOCs/withRouter";
import ProductContent from "../components/Product/Product";
import { fetchProductData } from "../helpers/requests";
import Loader from "../components/Loader/Loader";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  async componentDidMount() {
    const { id } = this.props.match.params;
    const productData = await fetchProductData(id);
    this.setState({ data: productData.product });
  }

  render() {
    const { data } = this.state;
    if (!data) {
      return <Loader />;
    }
    return <ProductContent product={data} />;
  }
}

export default withRouter(Product);
