import React from "react";
import ReactDom from "react-dom";

const name = "Yasser";
const number = 3;

const dev = (
  <div>
    <h1>Hello {name}</h1>
    <p>My lucky number is {number}</p>
  </div>
);

ReactDom.render(dev, document.getElementById("root"));
