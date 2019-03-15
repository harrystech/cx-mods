
const modList = [
  {
    name: "Country Selector | Harrys.com",
    id: "locale",
    type: "switch",
    context: "harrys",
  },
  {
    name: `Search by Shipping Address | Admin`,
    id: `shipping`,
    type: "switch",
    context: 'admin',
  },
  {
    name: `Auto Seventeen Day SP Helper | Admin`,
    id: "seventeen",
    type: "switch",
    context: 'admin',
  },
  {
    name: `Accessible Create Order Page Nav Buttons | Admin `,
    id: "buttonsATF",
    type: "switch",
    context: 'admin',
  },
  {
    name: `Background Color | Admin`,
    id: "bgColor",
    type: "colorPicker",
    defaultColor: "#9B88BA",
    context: 'admin',
  }
];

const generateSwitchHTML = (isOn, id) => `
  <label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="switch-1">
    <input type="checkbox" id="checkbox-${id}" class="mdl-switch__input" ${
  isOn ? "checked" : ""
}>
    <span class="mdl-switch__label"></span>
  </label>
`;

const generateModHTML = (name, id, isOn) => `
  <li class="mod" id="mod-item-${id}">
    <span class="name">${name}</span>
    <span class="switch"  id="switch-${id}">${generateSwitchHTML(
  isOn,
  id
)}</span>
  </li>
`;


const getModSettings = callback => {
  modIds = modList.map(mod => mod.id);
  chrome.storage.sync.get(modIds, result => {
    const modSettings = modList.map(mod => {
      switch (mod.type) {
        case "switch": {
          if (result[mod.id] === "undefined") {
            chrome.storage.sync.set({ [mod.id]: true, `${mod.id}Context`: mod.context });
            mod.isOn = true;
          }
          return mod;
        }
        case "colorPicker": {
          if (result[mod.id] === "undefined") {
            chrome.storage.sync.set({ [mod.id]: false, `${mod.id}Color`: mod.defaultColor });
            mod.isOn = false;
            mod.color = mod.defaultColor;
          }
          return mod;
        }
        default:
          return mod;
      }
    });

    callback(modSettings);
  });
};

const generateBgColorHTML = color => `
  <input type="color" value="${color}">
  <button>Activate</button>
`;

const insertColorPicker = mod => {
  const modEl = document.getElementById(`mod-item-${mod.id}`);
  const div = document.createElement("div");
  const colorPickerId = `${mod.id}-input`;
  div.id = colorPickerId;
  div.innerHTML = generateColorPickerHTML(mod.color);
  bgColorMod.appendChild(div);
  bgColorMod.querySelector("button").addEventListener("click", evt => {
    const newColor = document.querySelector(`#${colorPickerId}`).value;
    chrome.storage.sync.set({ `${mod.id}Color`: newColor });
  });
};

const removeColorPicker = (mod) => {
  const bgColorEl = document.getElementById(`${mod.id}-input`);
  bgColorInput.parentNode.removeChild(bgColorInput);
};

const renderMods = (mods) => {
  const modsHTML = mods
      .map(mod => generateModHTML(mod.name, mod.id, mod.isOn))
      .join("");
  const modListEl = document.querySelector("#mod-list");
  modListEl.innerHTML = modsHTML;
};

const addModEventListeners = (mods) => {
  mods
  .forEach(mod => {
    const modCheckbox = document.getElementById(mod.id);
    switch(mod.type) {
      case "switch": {
        modCheckbox.addEventListener("click", evt => {
          chrome.storage.sync.set({[mod.id]: evt.target.checked});
        });
      }
      case "colorPicker": {
        modCheckbox.addEventListener("click", evt => {
          chrome.storage.sync.set({[mod.id]: evt.target.checked}, () => {
            mod.isOn = evt.target.checked;
            evt.target.checked ? insertColorInput(mod) : removeColorInput(mod);
          })
        })
      }
    }
  });
};

const init = () => {
  getModSettings(mods => {
    renderMods(mods);
    addModEventListeners(mods);
  });
};

document.addEventListener("DOMContentLoaded", function(event) {
  init();
});
