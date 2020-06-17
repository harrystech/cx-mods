const modList = [
  {
    name: `Country Selector | Harrys.com`,
    id: "locale",
    type: "switch",
    contexts: ["www"],
    defaultOn: true,
  },
  {
    name: `Search by Shipping Address | Admin`,
    id: `shipping`,
    type: "switch",
    contexts: ["admin"],
    defaultOn: true,
  },
  {
    name: `Auto Seventeen Day SP Helper | Admin`,
    id: "seventeen",
    type: "switch",
    contexts: ["admin", "order"],
    defaultOn: true,
  },
  {
    name: `Accessible Create Order Page Nav Buttons | Admin`,
    id: "buttonsATF",
    type: "switch",
    contexts: ["admin", "order"],
    defaultOn: true,
  },
  {
    name: `Hide Excess Discount Links | Admin`,
    id: "hideDiscounts",
    type: "switch",
    contexts: ["admin"],
    defaultOn: false,
  },
  {
    name: `Next Send Date SP Helper | Admin`,
    id: "nextSPSend",
    type: "switch",
    contexts: ["admin"],
    defaultOn: true,
  },
  {
    name: `Tracking Window Preview | Admin`,
    id: "embedTracking",
    type: "switch",
    contexts: ["admin"],
    defaultOn: true,
  },
  {
    name: `Background Color | Admin`,
    id: "bgColor",
    type: "colorPicker",
    defaultColor: "#9B88BA",
    contexts: ["admin"],
    defaultOn: false,
  },
  {
    name: "Create Order Cart | Admin",
    id: "createOrderCart",
    type: "switch",
    contexts: ["admin", "order", "orderStepOne"],
    defaultOn: true,
  },
];

export default modList;
