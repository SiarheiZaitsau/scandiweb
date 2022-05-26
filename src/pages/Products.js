import React from "react";
import withRouter from "../HOCs/withRouter";
import HomeContent from "../components/Home/Home";
import { fetchCategoryData } from "../helpers/requests";
class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    const { category } = this.props.match.params;
    const categoryData = await fetchCategoryData(category);
    this.setState({ data: categoryData.category.products });
  }
  async componentDidUpdate(prevProps) {
    const { category } = this.props.match.params;
    if (category !== prevProps.match.params.category) {
      const categoryData = await fetchCategoryData(category);
      this.setState({ data: categoryData.category.products });
    }
  }
  render() {
    const { category } = this.props.match.params;
    return (
      <HomeContent category={category} data={this.state.data}></HomeContent>
    );
  }
}

export default withRouter(Products);
