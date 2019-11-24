import React from "react";
import "./styles.scss";

const deviceShade = [
  { background: "#FF4563",},
  { background: "#8245E6",},
  { background: "#4AC0E0",},
  { background: "#1089EB",},
  { background: "#C791CD",}
];

const CheckBox = props => {
  const [ selectShade, setDeviceShade] = React.useState();
  console.log("shade", props);

  const onShadeClick = (i) => {
    setDeviceShade(i)
    console.log("selectShade", selectShade);
  }

  React.useEffect(() => {

  },[selectShade])

  const deviceShadeEl = deviceShade.map((ele, i, arr) => {
    return (
      <div index={i} className={selectShade == i ? "selectShadeWrap active" :"selectShadeWrap" } onClick={() => onShadeClick(i)} style={{ background: ele.background }}>
        <div className="deviceShadeImgWrap">
          <img src={process.env.PUBLIC_URL +'/img/tick-wh.png'} className={selectShade == i ?"selectShadeClass active" :"selectShadeClass" } />
        </div>
      </div>
    );
  });

  return deviceShadeEl;
};

export default CheckBox;
export { CheckBox };
