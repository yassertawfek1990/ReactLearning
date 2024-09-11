import React from "react";
import ReactDom from "react-dom";

const image = "https://picsum.photos/200";
const costumeStyle = {
  color: "purple",
  border: "1px solid black",
  fontSize: "30px",
};

costumeStyle.color = "green";
ReactDom.render(
  <h1 style={costumeStyle}> Hello Yasser</h1>,
  document.getElementById("root")
);
