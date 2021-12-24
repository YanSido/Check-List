import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { filterList } from "../contexts/actions";
export default function SearchBar() {
  const dispatch = useDispatch();
  const fullEquipmentList = useSelector((state) => state);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    initialData();
  }, [filter]);

  const handleChange = (e) => {
    setFilter(e.target.value);
    dispatch(filterList());
    dispatch(filterList(e.target.value));
  };

  const initialData = () => {
    if (filter.length === 0) dispatch(filterList());
  };

  return (
    <Container style={{ margin: "0 auto", marginTop: "20px", width: "50%" }}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            onChange={(e) => {
              handleChange(e);
            }}
            value={filter}
            type="text"
            placeholder="Search item"
          />
        </Form.Group>
      </Form>
    </Container>
  );
}
