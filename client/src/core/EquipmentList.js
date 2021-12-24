import React, { useState, useRef } from "react";
import { Container } from "react-bootstrap";
import { fullEquipmentList } from "../db/equipment";

export default function EquipmentList() {
  const [missing, setMissing] = useState(0);
  return (
    <Container>
      <table class="table table-hover table-dark text-center">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Item's Name</th>
            <th scope="col">Full quantity</th>
            <th scope="col">Current quantity</th>
            <th scope="col">Missing</th>
          </tr>
        </thead>
        <tbody>
          {fullEquipmentList.map((equipment, index) => {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{equipment.name}</td>
                <td>{equipment.fullQuantity}</td>
                <td>
                  <input
                    class="text-center"
                    type="text"
                    id="lquantity"
                    name="lquantity"
                    placeholder="Enter current quantity"
                  />
                </td>
                <td>{missing}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}
