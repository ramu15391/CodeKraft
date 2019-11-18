import React from "react";
import { DeviceSettings } from "../../fixtures";

const DeviceSettingsCard = props => {
  console.log("device settings", props);
  const { DeviceSettings } = props;
  return DeviceSettings.map((ele, i, arr) => {
    return (
      <section>
        <div className="deviceSettingName">
          <span>{ele.label}</span>
          <span />
        </div>
        <div className="deviceSettings">{ele.renderChildren}</div>
      </section>
    );
  });
};

export default DeviceSettingsCard;
export { DeviceSettingsCard };
