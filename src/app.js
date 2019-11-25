import React from "react";
import { DeviceCard } from "./components/DeviceCard/deviceCard";
import { HeaderWithIcon } from "./components/HeaderWithIcon/HeaderWithIcon";
import { DeviceSettingsCard } from "./components/DeviceSettingsCard/DeviceSettingsCard";

function App() {
  return (
    <div className="App">
      <main className="container">
        <section className="sidePanel">
          <DeviceCard />
        </section>
        <section className="deviceContainer">
          <HeaderWithIcon />
          <DeviceSettingsCard />
        </section>
      </main>
    </div>
  );
}

export default App;
