import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchData } from "./store/action/homeAction";
import produce from "immer";

function MainComp() {
  const dispatch = useDispatch();
  const { count, items } = useSelector((state) => state);
  // const [state, setState] = useState([
  //   {
  //     id: "React",
  //     title: "Learn React",
  //     done: true,
  //   },
  //   {
  //     id: "Immer",
  //     title: "Try Immer",
  //     done: false,
  //   },
  // ]);

  //SAMPLE STATE UPDATE WITH IMMERJS
  // const handleAdd = () => {
  //   let test = { id: "nextjs", title: "vera maari", done: false };
  //   setState(
  //     produce((draft) => {
  //       draft.push({
  //         id: "todo_" + Math.random(),
  //         title: "A new todo",
  //         done: false,
  //       });
  //     })
  //   );
  // };
  return (
    <div>
      <p>MainComp </p>
      {/* <button onClick={() => handleAdd()}> Immer Test</button> */}
      <div>
        <button
          onClick={() => {
            dispatch(fetchData(count + 1));
          }}
        >
          Add
        </button>
        <span>{count}</span>
        <button onClick={() => dispatch(fetchData(count - 1))}>Sub</button>
      </div>
      {items.map((ele, ind) => {
        return (
          <div key={ind}>
            <p>{ele.email}</p>
          </div>
        );
      })}
    </div>
  );
}

export default MainComp;
