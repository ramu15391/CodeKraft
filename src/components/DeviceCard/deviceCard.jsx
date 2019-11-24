import React from "react";
import "./styles.scss";
import { DeviceInfo } from './fixtures';

const DeviceCard = (props) => { 
  const [deviceCard, setDeviceCard] = React.useState();

  const SelectDeviceCard = (i) =>{
    setDeviceCard(i);
  }

  React.useEffect(()=>{

  },[deviceCard])

  return DeviceInfo.map((device, i, arr) => {
    console.log("index", i,deviceCard);
      return (
        <section className={deviceCard == i ? "deviceCardWrapper active": "deviceCardWrapper"} onClick={() => SelectDeviceCard(i)}>
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

// class DeviceCard extends React.Component {
//   render() {
//     const { deviceName, deviceImage, deviceLocation } = this.props.device;
//     console.log("device card", this.props);
//     console.log("deviceImage", deviceImage);
//     return (
//       <section className="deviceCardWrapper" onClick={}>
//         <div className="deviceTextContainer">
//           <label>{deviceName}</label>
//           <label>{deviceLocation}</label>
//         </div>
//         <div className="deviceImgContainer">
//           <img alt=" Home Appliance" src={process.env.PUBLIC_URL +'/img'+ deviceImage} />
//         </div>
//       </section>
//     );
//   }
// }

export default DeviceCard;
export { DeviceCard };
