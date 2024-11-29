import React from "react";
import Dashboard from "../Dashboard";
import TabButton from "./TabButton";

function TraslaTe() {
  const [tab, setTab] = useState("dashboard");
  return (
    <>
      <TabButton
        isActive={tab === "dashboard"}
        onClick={() => setTab("dashboard")}
      >
        Dashboard
      </TabButton>
      <hr />

      {tab === "dashboard" && <Dashboard />}
    </>
  );
}

export default TraslaTe;
