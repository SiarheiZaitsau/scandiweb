import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Header from "./components/Header/Header";
import { fetchCategories } from "./helpers/requests";

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
          {/* <Route exact path="/" element={<Home />} /> */}
          <Route path="/" element={<Products />} />
          <Route path="/:category" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
        </Routes>
      </div>
    );
  }
}
export default App;
