import React from "react";
import EquipmentList from "./EquipmentList";
import WorkerForm from "./WorkerForm";

export default function Main() {
  return (
    <div>
      <WorkerForm />
      <hr />
      <EquipmentList />
    </div>
  );
}
