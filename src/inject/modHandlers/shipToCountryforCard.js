const shipToCountryforCard = () => {
  if (location.href.includes("/create_billing_profile")) {
    init();
  }
};

const init = () => {
  const countrySelectorLabel = document.querySelector(".label");
  countrySelectorLabel.innerText = "Ship to Country";
};

export default shipToCountryforCard;
