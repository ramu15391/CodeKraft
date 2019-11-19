import React from "react";
import { DeviceCard } from "./components/DeviceCard/deviceCard";
import { HeaderWithIcon } from "./components/HeaderWithIcon/HeaderWithIcon";
import { DeviceSettingsCard } from "./components/DeviceSettingsCard/DeviceSettingsCard";
import { DeviceInfo, IconWithText, DeviceSettings } from "./fixtures";

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
          <DeviceSettingsCard DeviceSettings={DeviceSettings} />
        </section>
      </main>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

export default App;
