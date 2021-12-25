import React, { useState } from "react";
import { Container } from "react-bootstrap";

export default function AddButton(props) {
  const [color, setColor] = useState("white");
  const handleClick = () => {
    if (props.visibility === "visible") {
      props.setVisibility("hidden");
      setColor("white");
    }
    if (props.visibility === "hidden") {
      props.setVisibility("visible");
      setColor("#A9A9A9");
    }
  };
  return (
    <div style={{ textAlign: "center", padding: "10px 20px" }}>
      <button style={{ backgroundColor: color }} onClick={() => handleClick()}>
        Add Item
      </button>
    </div>
  );
}
