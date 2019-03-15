const admin = () => location.href.includes("harrys.com/admin");
const www = () => !location.href.includes("harrys.com/admin");

const contextTests = {
  admin,
  www
};

export default contextTests;
