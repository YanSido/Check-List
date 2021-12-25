import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addItem } from "../contexts/actions";

export default function AddItem() {
  const dispatch = useDispatch();
  const nameInputEl = useRef();
  const fullQuantityInputEl = useRef();
  const currentQuantityInputEl = useRef();

  const handleClick = () => {
    const name = nameInputEl.current.value;
    const fullQuantity = fullQuantityInputEl.current.value;
    const currentQuantity = currentQuantityInputEl.current.value;
    if (/^\d+$/.test(fullQuantity) && /^\d+$/.test(currentQuantity) && name)
      dispatch({
        type: "ADD_ITEM",
        payload: { name: name, fullQuantity: fullQuantity, currentQuantity: currentQuantity },
      });
  };

  return (
    <Container>
      <h2>Add item:</h2>
      <hr />
      <form>
        <div class="mb-3">
          <label for="items-name" class="form-label">
            Item's name
          </label>
          <input
            ref={nameInputEl}
            type="name"
            class="form-control"
            id="exampleInputItemName"
            aria-describedby="itemNameHelp"
            placeholder="Enter item's name"
            required
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputFullQuantity" class="form-label">
            Full quantity
          </label>
          <input
            ref={fullQuantityInputEl}
            type="text"
            class="form-control"
            id="exampleInputFullQuantity"
            placeholder="Enter full quantity"
            required
          />
        </div>
        <div class="mb-4">
          <label for="exampleInputCurrentQuantity" class="form-label">
            Current quantity
          </label>
          <input
            ref={currentQuantityInputEl}
            type="text"
            class="form-control"
            id="exampleInputCurrentQuantity"
            placeholder="Enter current quantity"
            required
          />
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            handleClick();
          }}
          type="submit"
          class="btn btn-primary"
        >
          Add item
        </button>
      </form>
    </Container>
  );
}
