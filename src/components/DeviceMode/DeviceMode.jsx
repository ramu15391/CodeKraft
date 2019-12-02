import React from "react";
import "./styles.scss";

const deviceMode = [
  { icon: "/morning-wh.png", mode: "Morning", percentage: "50%", bg:'#000'},
  { icon: "/day-dk.png", mode: "Afternoon", percentage: "30%",bg:'none'},
  { icon: "/night-dk.png", mode: "Day", percentage: "100%",bg:'unset'}
];

const imgPath = process.env.PUBLIC_URL;

const DeviceMode = props => {
  const [mode, setDeviceMode] = React.useState();
  const getDeviceModeCard = (ele, i) => {
    return (   
      <section
        onClick={() =>onSelectDeviceMode(i)}
        index={i}
        className={mode==i ? "deviceModeWrap active" : "deviceModeWrap"}
        style={{ background: ele.background }}
      >
        <div className="deviceModeLeftWrap">
          <img src={imgPath +'/img'+ ele.icon} style={{ background: ele.bg }} alt="shade icon" className="deviceModeIcon"/>
          <span className="deviceModeText">{ele.mode}</span>
        </div>
        <div className="deviceModeRightWrap" style={{ background: ele.background }}>
          <span className="deviceModeLevel">{ele.percentage}</span>
          <img src={imgPath  + (mode==i ? '/img/tick-wh.png' : '/img/tick-wh-lt.png')} alt="tick icon" className="tickIcon"/>
        </div>
      </section>
    )
  }

  const onSelectDeviceMode = (i) =>{
    setDeviceMode(i);
  }

  const deviceModeEl = deviceMode.map((ele, i, arr) => {
    return getDeviceModeCard(ele,i);

  });

  return deviceModeEl;
};




export default DeviceMode;
export { DeviceMode };
