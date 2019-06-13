const modList = [
  {
    name: `Country Selector | Harrys.com`,
    id: "locale",
    type: "switch",
    context: "www",
    defaultOn: true
  },
  {
    name: `Search by Shipping Address | Admin`,
    id: `shipping`,
    type: "switch",
    context: "admin",
    defaultOn: true
  },
  {
    name: `Auto Seventeen Day SP Helper | Admin`,
    id: "seventeen",
    type: "switch",
    context: "admin",
    defaultOn: true
  },
  {
    name: `Accessible Create Order Page Nav Buttons | Admin`,
    id: "buttonsATF",
    type: "switch",
    context: "admin",
    defaultOn: true
  },
  {
    name: `Hide Excess Discount Links | Admin`,
    id: "hideDiscounts",
    type: "switch",
    context: "admin",
    defaultOn: false
  },
  {
    name: `Next Send Date SP Helper | Admin`,
    id: "nextSPSend",
    type: "switch",
    context: "admin",
    defaultOn: true
  },
  {
    name: `Background Color | Admin`,
    id: "bgColor",
    type: "colorPicker",
    defaultColor: "#9B88BA",
    context: "admin",
    defaultOn: false
  }
];

export default modList;
