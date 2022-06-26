import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Header from "./components/Header/Header";
import { fetchCategories } from "./helpers/requests";
import Basket from "./pages/Basket";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }
  async componentDidMount() {
    const responseData = await fetchCategories();
    this.setState({ categories: responseData.categories });
  }

  render() {
    return (
      <div className="App">
        <Header categories={this.state.categories} />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/:category" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </div>
    );
  }
}
export default App;
