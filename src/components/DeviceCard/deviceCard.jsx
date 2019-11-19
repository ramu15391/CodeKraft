import React from "react";
import "./styles.scss";

class DeviceCard extends React.Component {
  render() {
    const { deviceName, deviceImage, deviceLocation } = this.props.device;
    console.log("device card", this.props);
    console.log("deviceImage", deviceImage);
    return (
      <section className="deviceCardWrapper">
        <div className="deviceTextContainer">
          <label>{deviceName}</label>
          <label>{deviceLocation}</label>
        </div>
        <div className="deviceImgContainer">
          <img src="logo.png" />
        </div>
      </section>
    );
  }
}

export default DeviceCard;
export { DeviceCard };
