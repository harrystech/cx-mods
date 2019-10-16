const admin = () => location.href.includes("harrys.com/admin");
const www = () => !location.href.includes("harrys.com/admin");
const order = () =>
  location.href.includes("/show_create_order") ||
  location.href.includes("/create_order") ||
  location.href.includes("/create_replacement");

const contextTests = {
  admin,
  www,
  order
};

export default contextTests;
