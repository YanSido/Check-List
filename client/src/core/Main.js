import React, { useState } from "react";
import { Container } from "react-bootstrap";
import AddButton from "./AddButton";
import AddItem from "./AddItem";
import EquipmentList from "./EquipmentList";
import SendButton from "./SendButton";
import WorkerForm from "./WorkerForm";

export default function Main() {
  const [visible, setVisible] = useState("hidden");
  return (
    <div>
      <WorkerForm />
      <hr />
      <EquipmentList />
      <div class="text-center">
        <SendButton />
        <AddButton visibility={visible} setVisibility={setVisible} />
      </div>
      <AddItem visibility={visible} setVisibility={setVisible} />
    </div>
  );
}
