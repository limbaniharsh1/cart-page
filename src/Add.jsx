import React, { useState } from "react";
import App from "./App.css";
// import App from "./App.jsx";

function Add(props) {
  let [count, setcount] = useState(0);
  let [totle, settotle] = useState(0);
  let incre = () => {
    setcount(count + 1);
    settotle(totle);
  };
  let decre = () => {
    if (count > 1) {
      setcount(count - 1);
    } else {
      setcount((count = 0));
    }
  };
  return (
    <div>
      <div className="list">
        <h3>
          {props.name} -<span>{props.price}</span>{" "}
        </h3>
        <div className="qty">
          {count == 0 ? (
            <p onClick={() => decre()} style={{ display: "none" }}>
              -
            </p>
          ) : (
            <p onClick={() => decre()} style={{ display: "block" }}>
              -
            </p>
          )}
          <h6>{count}</h6>
          <p onClick={() => incre()}>+</p>
        </div>
      </div>
    </div>
  );
}

export default Add;
