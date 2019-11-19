import React from "react";

const HeaderWithIcon = props => {
  const { IconWithText } = props;
  console.log(props);
  return IconWithText.map((ele, i, arr) => {
    console.log(ele);
    return (
      <section className="hdrWithIconWrap">
        <div className="deviceHeading">
          <h2>{ele.label}</h2>
        </div>
        <div className={ele.iconWrap}>
          <span className={ele.icon} />
        </div>
      </section>
    );
  });
};

export { HeaderWithIcon };
