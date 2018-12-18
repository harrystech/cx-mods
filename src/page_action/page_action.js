const generateSwitchHTML = (isOn, id) => `
  <label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="switch-1">
    <input type="checkbox" id="${id}" class="mdl-switch__input" ${
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

const mods = [
  {
    name: `Search by Shipping Address | Harry's Admin`,
    id: `shipping`
  },
  {
    name: "Locale | Harrys.com",
    id: "locale"
  },
  {
    name: `Auto Seventeen Day SP Helper | Harry's Admin`,
    id: "seventeen"
  },
  {
    name: `Background Color | Harry's Admin`,
    id: "bgColor"
  }
];

const getModSettings = callback => {
  chrome.storage.sync.get(
    ["shipping", "locale", "seventeen", "bgColor", "bgColorValue"],
    result => {
      console.dir(result);
      if (result.shipping === "undefined") {
        chrome.storage.sync.set({ shipping: true });
      }
      if (!result.locale === "undefined") {
        chrome.storage.sync.set({ locale: true });
      }
      if (!result.seventeen === "undefined") {
        chrome.storage.sync.set({ seventeen: true });
      }
      if (!result.bgColor === "undefined") {
        chrome.storage.sync.set({ bgColor: false });
      }
      if (!result.bgColorValue === "undefined") {
        chrome.storage.sync.set({ bgColorValue: null });
      }
      callback({
        shipping: result.shipping || true,
        locale: result.locale || true,
        seventeen: result.seventeen || true,
        bgColor: result.bgColor || false,
        bgColorValue: result.bgColorValue || null
      });
    }
  );
};

const generateBgColorHTML = color => `
  <input type="color" value="${color || "#9B88BA"}">
  <button>Activate</button>
`;

const insertColorInput = () => {
  const bgColorMod = document.getElementById("mod-item-bgColor");
  chrome.storage.sync.get(["bgColorValue"], result => {
    const div = document.createElement("div");
    div.id = "bgColorInput";
    div.innerHTML = generateBgColorHTML(result.bgColorValue);
    bgColorMod.appendChild(div);
    bgColorMod.querySelector("button").addEventListener("click", evt => {
      const newColor = document.querySelector("#bgColorInput>input").value;
      chrome.storage.sync.set({ bgColorValue: newColor }, () => {});
    });
  });
};

const removeColorInput = () => {
  const bgColorEl = document.getElementById("bgColorInput");
  bgColorInput.parentNode.removeChild(bgColorInput);
};

const init = () => {
  getModSettings(settings => {
    const modsHTML = mods
      .map(mod => {
        return generateModHTML(mod.name, mod.id, settings[mod.id]);
      })
      .join("");

    const modListEl = document.querySelector("#mod-list");
    modListEl.innerHTML = modsHTML;
    Object.keys(settings).forEach(setting => {
      if (setting === "bgColorValue") return;
      const settingCheckbox = document.getElementById(setting);
      settingCheckbox.addEventListener("click", evt => {
        chrome.storage.sync.set({ [setting]: evt.target.checked }, () => {
          console.log(`${setting} set to ${evt.target.checked}`);
          if (setting === "bgColor") {
            if (evt.target.checked) {
              insertColorInput();
            } else {
              removeColorInput();
            }
          }
        });
      });
    });
    if (settings.bgColor) {
      insertColorInput();
    }
  });
};

document.addEventListener("DOMContentLoaded", function(event) {
  init();
});
