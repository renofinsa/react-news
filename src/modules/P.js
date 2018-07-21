import React from "react";
import "./Button.css";

function Button(props) {
  return <p style={{ paddingTop: 10 }}>{props.children}</p>;
}
export default Button;
