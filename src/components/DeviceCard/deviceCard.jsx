import React from "react";
import "./styles.scss";
import { DeviceInfo } from './fixtures';

const DeviceCard = (props) => { 
  const [deviceCardIdx, setDeviceCardIdx] = React.useState(0);

  const SelectDeviceCard = (i) =>{
    setDeviceCardIdx(i);
  }

  return DeviceInfo.map((device, i, arr) => {
    console.log("index", i,deviceCardIdx);
      return (
        <section className={deviceCardIdx == i ? "deviceCardWrapper active": "deviceCardWrapper"} onClick={() => SelectDeviceCard(i)}>
          <div className="deviceTextContainer">
            <label className="deviceNameText">{device.deviceName}</label>
            <label className="deviceLocationText">{device.deviceLocation}</label>
          </div>
          <div className="deviceImgContainer">
            <img alt=" Home Appliance" src={process.env.PUBLIC_URL +'/img'+ device.deviceImage} />
          </div>
        </section>
      );
    })

}

export default DeviceCard;
export { DeviceCard };
