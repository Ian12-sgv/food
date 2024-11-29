import React from "react";
import Setting_left from "./components/Setting_left";
import Setting_rigth from "./components/Setting_rigth";
import Setting_title from "./components/setting_title";
import "../src/styles/settings.css";
function Settings() {
  return (
    <>
      <div className="Settings">
        <div className="Settings-content">
          <div className="Settings-title">
            <div className="Settings-title-content">
              <Setting_title />
            </div>
          </div>
          <div className="Settings-content-completo">
            <div className="settings-left">
              <Setting_left />
            </div>
            <div className="settings-right">
              <Setting_rigth />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
