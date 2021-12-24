import React from "react";
import AddItem from "./AddItem";
import EquipmentList from "./EquipmentList";
import SearchBar from "./SearchBar";
import SendButton from "./SendButton";
import WorkerForm from "./WorkerForm";

export default function Main() {
  return (
    <div>
      <WorkerForm />
      <hr />
      <SearchBar />
      <EquipmentList />
      <SendButton />
      <AddItem />
    </div>
  );
}
