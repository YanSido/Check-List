import React from "react";
import SignaturePad from "react-signature-pad";

export default function Signature() {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Signature:</h2>
      <div
        style={{
          textAlign: "center",
          marginLeft: "auto",
          marginRight: "auto",
          border: "2px solid",
          width: "25%",
          height: "25$",
          marginBottom: "50px",
        }}
      >
        <SignaturePad clearButton="true" />
      </div>
    </div>
  );
}
