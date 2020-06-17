const admin = () => location.href.includes("harrys.com/admin");
const www = () => !location.href.includes("harrys.com/admin");
const order = () =>
  location.href.includes("/show_create_order") ||
  location.href.includes("/create_order") ||
  location.href.includes("/create_replacement");
const orderStepOne = () => !!document.querySelector("#product-filter-list");

const contextTests = {
  admin,
  www,
  order,
  orderStepOne
};

export default contextTests;
