import React from "react";
import {IconWithText} from './fixtures.jsx'
import "./styles.scss";
const imgPath = process.env.PUBLIC_URL + '/img';

const HeaderWithIcon = props => {
  return IconWithText.map((ele, i, arr) => {
    console.log(ele);
    return (
      <section id={`hdrWithIconWrap${i}`} className="hdrWithIconWrap">
        <div className="deviceHeading">
          <h2>{ele.label}</h2>
        </div>
        <div className="iconContainer">
          <div className={ele.iconWrap}>
            <img src={ele.icon ? imgPath + ele.icon : ''} className={ele.icon ? "iconClass" : "toggleIcon"} />
          </div>
        </div>
      </section>
    );
  });
};

export { HeaderWithIcon };
