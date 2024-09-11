import React from "react";
import ReactDom from "react-dom";

var costumeStyle = {
  color: "red",
};
var hour = new Date().getHours();
let message;
if (hour > 12 && hour <= 18) {
  message = "Good Afternoon";
  costumeStyle.color = "green";
} else if (hour > 18 && hour <= 23) {
  message = "Good Evening";
  costumeStyle.color = "blue";
} else {
  message = "Good Morning";
  costumeStyle.color = "red";
}

ReactDom.render(
  <h1 className="h1Style" style={costumeStyle}>
    {message}
  </h1>,
  document.getElementById("root")
);
