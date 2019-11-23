import React, { useState, useEffect } from "react";
import "./styles.scss";

const deviceMode = [
  { icon: "#FF4563", mode: "Morning", percentage: "50%", tickIcon: "" },
  { icon: "#FF4563", mode: "Afternoon", percentage: "30%", tickIcon: "" },
  { icon: "#FF4563", mode: "Day", percentage: "100%", tickIcon: "" }
];

const DeviceMode = props => {
  const deviceModeEl = deviceMode.map((ele, i, arr) => {
    return (
      <section
        className="deviceModeSection"
        style={{ background: ele.background }}
      >
        <div className="deviceModeWrap" style={{ background: ele.background }}>
          <span className="selectShadeClass">{ele.icon}</span>
          <span className="selectShadeClass">{ele.mode}</span>
        </div>
        <div className="deviceModeWrap" style={{ background: ele.background }}>
          <span className="selectShadeClass">{ele.percentage}</span>
          <span className="selectShadeClass">{ele.tickIcon}</span>
        </div>
      </section>
    );
  });

  return deviceModeEl;
};

export default DeviceMode;
export { DeviceMode };
