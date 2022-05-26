import React, { Component } from "react";
import "./Loader.module.css";
export default class Loader extends Component {
  render() {
    return (
      <div className="lds0-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}
