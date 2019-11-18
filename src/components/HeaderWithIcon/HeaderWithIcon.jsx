import React from "react";

const HeaderWithIcon = props => {
  const { label } = props;

  return (
    <section className="hdrWithIconWrap">
      <div className="deviceHeading">
        <h2>{label}</h2>
      </div>
      <div className="iconCls">
        <span className="iconToggle" />
      </div>
    </section>
  );
};

export { HeaderWithIcon };
