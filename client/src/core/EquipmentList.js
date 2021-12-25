import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Form } from "react-bootstrap";

export default function EquipmentList() {
  const dispatch = useDispatch();
  const fullEquipmentList = useSelector((state) => state);
  const [filter, setFilter] = useState("");

  const searchFilter = (e) => {
    setFilter(e.target.value);
  };

  const updateMissing = (current, index, fullQuantity) => {
    if (!current)
      dispatch({
        type: "UPDATE_ITEM",
        payload: { fullQuantity, index },
      });
    else
      dispatch({
        type: "UPDATE_ITEM",
        payload: { current, index },
      });
  };

  const handleDelete = (index) => {
    dispatch({
      type: "DELETE_ITEM",
      payload: { index },
    });
  };

  return (
    <Container id="search-bar">
      <Container style={{ margin: "0 auto", marginTop: "20px", width: "50%" }}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              onChange={(e) => {
                searchFilter(e);
              }}
              value={filter}
              type="text"
              placeholder="Search item"
            />
          </Form.Group>
        </Form>
      </Container>
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
          {fullEquipmentList
            .filter((item) => {
              return item.name.toLowerCase().includes(filter.toLowerCase());
            })
            .map((equipment, index) => {
              if (equipment.addedByUser) {
                return (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{equipment.name}</td>
                    <td>{equipment.fullQuantity}</td>
                    <td>
                      <input
                        class="text-center"
                        onChange={(e) =>
                          updateMissing(e.target.value, index, equipment.fullQuantity)
                        }
                        type="number"
                        id={`item-${index}`}
                        name="lquantity"
                        placeholder="Enter current quantity"
                        min={0}
                      />
                    </td>
                    <td>{equipment.fullQuantity - equipment.currentQuantity || 0}</td>)
                    <button
                      style={{
                        color: "white",
                        backgroundColor: "red",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                      }}
                      onClick={() => handleDelete(index)}
                    >
                      X
                    </button>
                  </tr>
                );
              }
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{equipment.name}</td>
                  <td>{equipment.fullQuantity}</td>
                  <td>
                    <input
                      class="text-center"
                      onChange={(e) => updateMissing(e.target.value, index, equipment.fullQuantity)}
                      type="number"
                      id={`item-${index}`}
                      name="lquantity"
                      placeholder="Enter current quantity"
                      min={0}
                    />
                  </td>
                  <td>{equipment.fullQuantity - equipment.currentQuantity || 0}</td>)
                </tr>
              );
            })}
        </tbody>
      </table>
    </Container>
  );
}
