import { React } from "react";
import { SelectDeviceShade } from "./components/SelectDeviceShade/SelectDeviceShade";

const DeviceInfo = [
  {
    deviceName: "Bed lamp",
    deviceLocation: "In Bedroom",
    deviceImage: "lamp.png"
  },
  {
    deviceName: "Noria AC",
    deviceLocation: "In Bedroom",
    deviceImage: "ac.png"
  },
  {
    deviceName: "Door Lock",
    deviceLocation: "In Home office",
    deviceImage: "lock.png"
  },
  {
    deviceName: "LG TV",
    deviceLocation: "In Living room",
    deviceImage: "tv.png"
  },
  {
    deviceName: "Thermostat",
    deviceLocation: "In Bedroom",
    deviceImage: "thermostat.png"
  }
];

const IconWithText = [
  {
    label: "Devices",
    icon: "addDeviceIcon",
    iconWrap: "addDeviceIconWrap"
  },
  {
    label: "Bed lamp",
    icon: "toggleIcon",
    iconWrap: "toggleWrap"
  }
];

const DeviceSettings = [
  {
    label: "Shades",
    divider: "sideLine",
    renderChildren: "SelectDeviceShade"
  },
  {
    label: "Mode",
    divider: "sideLine",
    renderChildren: ""
  },
  {
    label: "Intensity",
    divider: "sideLine",
    renderChildren: ""
  }
];

export { IconWithText, DeviceSettings, DeviceInfo };
