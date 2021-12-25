import React from "react";
import { notify } from "react-notify-toast";

export default function SendButton() {
  return (
    <div>
      <button
        onClick={() => {
          notify.show("Report Submitted Successfully", "success");
        }}
        type="submit"
        class="btn btn-outline-success"
      >
        Send
      </button>
    </div>
  );
}
