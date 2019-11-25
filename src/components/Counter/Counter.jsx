import React from 'react';
import ReactDOM from "react-dom";
import { CircleSlider } from "react-circle-slider";
import "./styles.scss";
 
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 };
    }
 
    handleChange = value => {
        console.log(`Changed value ${value}`);
        this.setState({ value });
    };
 
    handleChangeRange = event => {
        this.setState({
            value: event.target.valueAsNumber,
        });
    };
 
    render() {
        const { value } = this.state;
        return (
            <div className="counterWrap">
                <CircleSlider showPercentage={true} knobRadius={8} progressWidth={8} circleWidth={5} min={0} max={100} showTooltip={true} value={value} onChange={this.handleChange} />
            </div>
        );
    }
}
 

export { Counter }
export default Counter;
