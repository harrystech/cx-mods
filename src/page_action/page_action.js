const switchHTML = `
  <label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="switch-1">
    <input type="checkbox" id="switch-1" class="mdl-switch__input" checked>
    <span class="mdl-switch__label"></span>
  </label>
`;

const generateModHTML = (name, id) => `
  <li class="mod">
    <span class="name">${name}</span>
    <span class="switch"  id=${id}>${switchHTML}</span>
  </li>
`;

const mods = [
  {
    name: `Search by Shipping Address | Harry's Admin`,
    id: `shipping`
  }
];

const init = () => {
  const modsHTML = mods
    .map(mod => {
      return generateModHTML(mod.name, mod.id);
      console.log(componentHandler);
    })
    .join("");

  const modListEl = document.querySelector("#mod-list");
  console.log("modListEl", modListEl);
  console.log("modsHTML", modsHTML);
  modListEl.innerHTML = modsHTML;
};

document.addEventListener("DOMContentLoaded", function(event) {
  init();
});

console.log("This code ran. Pea is the best.");
