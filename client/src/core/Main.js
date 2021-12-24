import React from "react";
import AddItem from "./AddItem";
import EquipmentList from "./EquipmentList";
import WorkerForm from "./WorkerForm";

export default function Main() {
  return (
    <div>
      <WorkerForm />
      <hr />
      <EquipmentList />
      <AddItem />
    </div>
  );
}
