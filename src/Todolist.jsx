import React from "react";
//import { FaRegHeart } from "react-icons/fa";
const Todolist = (props) => {
  return (
    <>
      <div className="todo_style">
        <li>
          {" "}
          <i
            className="fa fa-times"
            aria-hidden="true"
            onClick={() => {
              props.onSelect(props.id);
            }}
          />
          {props.text}
        </li>
      </div>
    </>
  );
};

export default Todolist;
