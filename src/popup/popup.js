import modList from "../shared/modList.js";
import generateModHTML from "./generateModHTML.js";

const getModSettings = callback => {
  const modIds = modList.map(mod => mod.id);
  chrome.storage.sync.get(modIds, result => {
    console.log(result);
    const modSettings = modList.map(mod => {
      switch (mod.type) {
        case "switch": {
          if (result[mod.id] === "undefined") {
            chrome.storage.sync.set({
              [mod.id]: mod.defaultOn,
              [`${mod.id}Context`]: mod.context
            });
            mod.isOn = true;
          }
          return mod;
        }
        case "colorPicker": {
          if (result[mod.id] === "undefined") {
            chrome.storage.sync.set({
              [mod.id]: mod.defaultOn,
              [`${mod.id}Color`]: mod.defaultColor
            });

            mod.isOn = mod.defaultOn;
            mod.color = mod.defaultColor;
            console.log("defaultcolor", mod.defaultColor, mod.color);
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

const generateColorPickerHTML = color => `
  <input type="color" value="${color}">
  <button>Activate</button>
`;

const insertColorPicker = mod => {
  const modEl = document.getElementById(`mod-item-${mod.id}`);
  const div = document.createElement("div");
  const colorPickerId = `${mod.id}-input`;
  div.id = colorPickerId;
  console.log(mod);
  div.innerHTML = generateColorPickerHTML(mod.color);
  modEl.appendChild(div);
  modEl.querySelector("button").addEventListener("click", evt => {
    const newColor = document.querySelector(`#${colorPickerId}`).value;
    chrome.storage.sync.set({ [`${mod.id}Color`]: newColor });
  });
};

const removeColorPicker = mod => {
  const bgColorEl = document.getElementById(`${mod.id}-input`);
  bgColorInput.parentNode.removeChild(bgColorInput);
};

const renderMods = mods => {
  const modsHTML = mods
    .map(mod => generateModHTML(mod.name, mod.id, mod.isOn))
    .join("");
  const modListEl = document.querySelector("#mod-list");
  modListEl.innerHTML = modsHTML;
};

const addModEventListeners = mods => {
  mods.forEach(mod => {
    const modCheckbox = document.getElementById(`checkbox-${mod.id}`);
    switch (mod.type) {
      case "switch": {
        modCheckbox.addEventListener("click", evt => {
          chrome.storage.sync.set({ [mod.id]: evt.target.checked });
        });
      }
      case "colorPicker": {
        modCheckbox.addEventListener("click", evt => {
          chrome.storage.sync.set({ [mod.id]: evt.target.checked }, () => {
            mod.isOn = evt.target.checked;
            evt.target.checked
              ? insertColorPicker(mod)
              : removeColorPicker(mod);
          });
        });
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
