import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItems] = React.useState([]);
 

  function adding(inputData) {
    setItems((prevValue) => [...prevValue, inputData]);

  }
  function deleting(id){
    setItems(prevValue =>{
      return prevValue.filter((item,index) => index !== id)
    } )
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={adding} />
      {items.map((item,index ) => (
        <Note key = {index} id = {index} title={item.title} content={item.content} onDelete = {deleting}/>
      ))}

      <Footer />
    </div>
  );
}

export default App;
