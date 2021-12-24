import React from "react";
import { Container } from "react-bootstrap";

export default function WorkerForm() {
  return (
    <Container>
      <h2>Worker details</h2>
      <hr />
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Full Name
          </label>
          <input
            type="name"
            class="form-control"
            id="exampleInputName"
            aria-describedby="NameHelp"
            placeholder="Enter name"
            required
          />
        </div>
        <div>
          <label for="exampleInputPassword1" class="form-label">
            Work Place
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputWorkPlace"
            placeholder="Enter work place"
            required
          />
        </div>
        <div class="form-check"></div>
        <div class="mb-3">
          <label class="mb-1">Date</label>
          <br />
          <input type="date" name="party" min="2017-04-01" max="2022-04-20" required />
          <span class="validity"></span>
        </div>
      </form>
    </Container>
  );
}
