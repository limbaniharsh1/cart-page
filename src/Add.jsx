import React, { useState } from "react";
// import App from "./App.css";
// import App from "./App.jsx";

function Add(props) {
  let [count, setcount] = useState(1);
  let [totle, settotle] = useState(0);
  let [first, setfirst] = useState();
  let incre = () => {
    setcount(++count);
    settotle(totle);
    let cc = setfirst(count * props.price)
    props.setftotal(props.ftotal + props.price)
    console.log(cc)
  };
  // console.log(count)
  // console.log(first)
  let decre = () => {
    if (count > 1) {
      setcount(--count);
      setfirst(count * props.price)
      props.setftotal(props.ftotal - props.price)
    } else {
      setcount((count = 1));
      setfirst('')
      props.setftotal(300)
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
  return first;
}

export default Add;
