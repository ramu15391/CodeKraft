const DeviceSettings = [
  {
    label: "Shades",
    divider: "sideLine",
    renderChildren: "CheckBox/CheckBox",
    direction: "row",
  },
  {
    label: "Mode",
    divider: "sideLine",
    renderChildren: "DeviceMode/DeviceMode",
    direction: "column"
  },
  {
    label: "Intensity",
    divider: "sideLine",
    renderChildren: "Counter/Counter",
    direction: "row"
  }
];

export { DeviceSettings };
