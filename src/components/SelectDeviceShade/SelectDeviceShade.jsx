import React, { useState, useEffect } from "react";

const deviceShade = [{}, {}, {}, {}, {}];

const SelectDeviceShade = props => {
  const { selectShade, setDeviceShade } = useState();
  console.log("shade", props);
  useEffect(() => {}, [selectShade]);

  return deviceShade.map((ele, i, arr) => {
    <div className="selectShadeWrap">
      <span className="selectShadeClass" />
    </div>;
  });
};

export default SelectDeviceShade;
export { SelectDeviceShade };
