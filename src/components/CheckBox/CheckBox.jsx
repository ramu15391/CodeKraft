import React, { useState, useEffect } from "react";
import "./styles.scss";

const deviceShade = [
  { background: "#FF4563" },
  { background: "#8245E6" },
  { background: "#4AC0E0" },
  { background: "#1089EB" },
  { background: "#C791CD" }
];

const CheckBox = props => {
  const { selectShade, setDeviceShade } = useState();
  console.log("shade", props);
  useEffect(() => {}, [selectShade]);

  const deviceShadeEl = deviceShade.map((ele, i, arr) => {
    return (
      <div className="selectShadeWrap" style={{ background: ele.background }}>
        <span className="selectShadeClass" />
      </div>
    );
  });

  return deviceShadeEl;
};

export default CheckBox;
export { CheckBox };
