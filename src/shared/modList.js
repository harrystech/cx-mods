const modList = [
  {
    name: "Country Selector | Harrys.com",
    id: "locale",
    type: "switch",
    context: "www",
    defaultOn: false
  },
  {
    name: `Search by Shipping Address | Admin`,
    id: `shipping`,
    type: "switch",
    context: "admin",
    defaultOn: false
  },
  {
    name: `Auto Seventeen Day SP Helper | Admin`,
    id: "seventeen",
    type: "switch",
    context: "admin",
    defaultOn: false
  },
  {
    name: `Accessible Create Order Page Nav Buttons | Admin `,
    id: "buttonsATF",
    type: "switch",
    context: "admin",
    defaultOn: false
  },
  {
    name: `Background Color | Admin`,
    id: "bgColor",
    type: "colorPicker",
    defaultColor: "#9B88BA",
    context: "admin",
    defaultOn: true
  }
];

export default modList;
