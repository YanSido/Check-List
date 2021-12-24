import React from "react";
import { Container } from "react-bootstrap";

export default function AddItem() {
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
            type="text"
            class="form-control"
            id="exampleInputCurrentQuantity"
            placeholder="Enter current quantity"
            required
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Add item
        </button>
      </form>
    </Container>
  );
}
