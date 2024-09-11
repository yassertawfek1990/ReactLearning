import React from "react";
import ReactDom from "react-dom";

const fname = "Yasser";
const lname = "tawfek";
const number = 3;

const dev = (
  <div>
    <h1>
      Hello {fname} {lname}
    </h1>
    <h2>same as {`${fname} and spaces and ${lname}`}</h2>
    <h3>samae as {fname + " " + lname}</h3>
    <p>
      My lucky number is {number} and {Math.floor(Math.random() * 10)}
    </p>
  </div>
);

ReactDom.render(dev, document.getElementById("root"));
