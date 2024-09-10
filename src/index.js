import React from "react";
import ReactDom from "react-dom";

const dev = (
  <div>
    <h1>Hello</h1>
    <ul>
      <li>first</li>
      <li>second</li>
      <li>third</li>
    </ul>
  </div>
);

ReactDom.render(dev, document.getElementById("root"));
