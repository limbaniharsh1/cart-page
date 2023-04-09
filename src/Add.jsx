import React, { useState } from "react";
// import App from "./App.css";
// import App from "./App.jsx";

function Add(props) {
  let [count, setcount] = useState(0);
  let [totle, settotle] = useState(0);
  let [first, setfirst] = useState();
  let incre = () => {
    setcount(++count);
    settotle(totle);
    setfirst(count * props.price)
  };
  console.log(count)
  console.log(first)
  let decre = () => {
    if (count > 1) {
      setcount(--count);
      setfirst(count * props.price)
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
          <h6>{first}</h6>
        </div>
      </div>
    </div>
  );
}

export default Add;
