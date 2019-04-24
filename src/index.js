import React from "react";
import ReactDOM from "react-dom";
import App from "./app.js";
import "./styles.css";

function Todo() {
  return <App />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Todo />, rootElement);
