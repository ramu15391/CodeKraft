import React from "react";
import loadable from "@loadable/component";

import { DeviceSettings } from "./fixtures";
import "./styles.css";

const DeviceSettingsCard = props => {
  console.log("device settings", props);

  const LoadableComponent = loadable(props =>
    import(`../../../src/components/${props.child}`)
  );

  return DeviceSettings.map((ele, i, arr) => {
    const RenderChild = typeof ele.renderChildren ? ele.renderChildren : "";
    return (
      <section index={i} className="deviceSettingSection">
        <div className="deviceSettingName">
          <span className="settingName">{ele.label}</span>
          <span className="sideLine" />
        </div>
        <div className={`deviceSettings ${ele.direction}`}>
          {RenderChild ? <LoadableComponent child={ele.renderChildren} /> : ""}
        </div>
      </section>
    );
  });
};

export default DeviceSettingsCard;
export { DeviceSettingsCard };
