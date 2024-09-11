import React from "react";
import ReactDom from "react-dom";

const image = "https://picsum.photos/200";
const dev = (
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      Hello
    </h1>
    <ul>
      <li>first</li>
      <li>second</li>
      <li>third</li>
    </ul>
    <div>
      <img src={image + "?grayscale"} />{" "}
      {/* we add this grayscalequery to convert to gray according tje picsumwebsite url */}
    </div>
    <div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Cairo%2C_Gizeh%2C_Pyramid_of_Menkaure%2C_Egypt%2C_Oct_2005.jpg/450px-Cairo%2C_Gizeh%2C_Pyramid_of_Menkaure%2C_Egypt%2C_Oct_2005.jpg"
        alt="Pyramids"
        className="pyramid-img "
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Gizeh_Mykerinos_02.JPG/330px-Gizeh_Mykerinos_02.JPG"
        alt="Pyramids"
        className="pyramid-img "
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Giza_Plateau_-_Pyramid_of_Menkaure.JPG/330px-Giza_Plateau_-_Pyramid_of_Menkaure.JPG"
        alt="Pyramids"
        className="pyramid-img "
      />
    </div>
  </div>
);

ReactDom.render(dev, document.getElementById("root"));
