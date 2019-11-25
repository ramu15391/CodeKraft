import React,{useEffect, useState} from "react";
import {IconWithText} from './fixtures.jsx'
import "./styles.scss";
const imgPath = process.env.PUBLIC_URL + '/img';

const HeaderWithIcon = props => {
  const [toggle, handleToggle] = React.useState(false);
  console.log('toggle',toggle);
  
  const handleClick = (action) =>{
    if(action=="toggle"){
      handleToggle(!toggle)
    }
  }
  React.useEffect(()=>{

  },[toggle])

  return IconWithText.map((ele, i, arr) => {
    console.log(ele);
    return (
      <section id={`hdrWithIconWrap${i}`} className="hdrWithIconWrap">
        <div className="deviceHeading">
          <h2>{ele.label}</h2>
        </div>
        <div className="iconContainer" onClick={() => handleClick(ele.action)}>
          <div className={ele.iconWrap + (toggle ? ' active' : '')}>
            <img src={ele.icon ? imgPath + ele.icon : ''} className={ele.icon ? "iconClass" : "toggleIcon"} />
          </div>
        </div>
      </section>
    );
  });
};

export { HeaderWithIcon };
