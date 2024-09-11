import ReactDom from "react-dom";

const fname = "Yasser";
const lname = "tawfek";
const year = new Date().getFullYear();

const dev = (
  <div>
    <p>
      created by {fname} {lname}
    </p>
    <p>Copyright {year}.</p>
  </div>
);

ReactDom.render(dev, document.getElementById("root"));
