import React from 'react';
import { CircleSlider } from "react-circle-slider";
import Roundy from "roundy";
import "./styles.scss";

function Counter() {
  const [value, setValue] = React.useState(0);
  return (
    <div className="CounterApp">
      <Roundy
        value={value}
        radius={100}
        color="linear-gradient(-135deg, #AD6BFF 0%, #74BCF7 100%);"
        arcSize={180}
        strokeWidth={3}
        onChange={value => {
          console.log(value);
          setValue(value);
        }}
      />
      <div className="sliderLimit">{value}</div>
    </div>
  );
}
export { Counter }
export default Counter;
