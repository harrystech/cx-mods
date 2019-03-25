const bgColor = color => {
  const wrapperEl = document.querySelector("div#wrapper");
  if (wrapperEl) {
    wrapperEl.setAttribute("style", `background-color:${color}`);
  }
};

export default bgColor;
