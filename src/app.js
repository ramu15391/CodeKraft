import React from "react";
import { DeviceCard } from "./components/DeviceCard/deviceCard";
import { HeaderWithIcon } from "./components/HeaderWithIcon/HeaderWithIcon";
import { DeviceSettingsCard } from "./components/DeviceSettingsCard/DeviceSettingsCard";
import { DeviceInfo, IconWithText } from "./fixtures";

function App() {
  return (
    <div className="App">
      <main className="container">
        <section className="sidePanel">
          <img src="logo.png" />
          {DeviceInfo.map((device, i, arr) => {
            return <DeviceCard key={i} device={device} />;
          })}
        </section>
        <section className="deviceContainer">
          <HeaderWithIcon IconWithText={IconWithText} />
          <DeviceSettingsCard />
        </section>
      </main>
    </div>
  );
}

export default App;
