import React, { useState } from "react";
import Todolist from "./Todolist";
const App = () => {
  const [itemList, setItemList] = useState("");
  const [items, setItems] = useState([]);
  const itemEvent = (e) => {
    setItemList(e.target.value);
  };
  const addItem = () => {
    setItems((oldItems) => {
      return [...oldItems, itemList];
    });
    setItemList("");
  };
  const deleteItem = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrEle, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input
          type="text"
          placeholder="add something"
          onChange={itemEvent}
          value={itemList}
        />
        <button onClick={addItem}>+</button>
        <ol>
          {items.map((itemVal, index) => {
            return (
              <Todolist
                text={itemVal}
                id={index}
                key={index}
                onSelect={deleteItem}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default App;
