function addCSS(code) {
  const style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML = code;

  document.getElementsByTagName("head")[0].appendChild(style);
}

export default addCSS;
