import React from "react";
import { DeviceSettings } from "../../fixtures";
import { SelectDeviceShade } from "../../components/SelectDeviceShade/SelectDeviceShade";
import "./styles.css";

const DeviceSettingsCard = props => {
  console.log("device settings", props);
  const { DeviceSettings } = props;
  return DeviceSettings.map((ele, i, arr) => {
    return (
      <section className="deviceSettingSection">
        <div className="deviceSettingName">
          <span>{ele.label}</span>
          <span className={ele.sideLine} />
        </div>
        <div className="deviceSettings">{ele.renderChildren}</div>
      </section>
    );
  });
};

export default DeviceSettingsCard;
export { DeviceSettingsCard };
