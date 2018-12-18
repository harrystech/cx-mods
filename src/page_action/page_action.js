const generateSwitchHTML = (isOn, id) => `
  <label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="switch-1">
    <input type="checkbox" id="${id}" class="mdl-switch__input" ${
  isOn ? "checked" : ""
}>
    <span class="mdl-switch__label"></span>
  </label>
`;

const generateModHTML = (name, id, isOn) => `
  <li class="mod">
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
  }
];

const getModSettings = callback => {
  chrome.storage.sync.get(["shipping", "locale", "seventeen"], result => {
    console.dir(result);
    if (result.shipping === "undefined") {
      result.shipping = true;
      chrome.storage.sync.set({ shipping: true });
      console.log("shipping initialized");
    }
    if (!result.locale === "undefined") {
      result.locale = true;
      chrome.storage.sync.set({ locale: true });
      console.log("locale initialized");
    }
    if (!result.seventeen === "undefined") {
      result.seventeen = true;
      chrome.storage.sync.set({ seventeen: true });
      console.log("seventeen initialized");
    }
    callback({
      shipping: result.shipping,
      locale: result.locale,
      seventeen: result.seventeen
    });
  });
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
      const settingCheckbox = document.getElementById(setting);
      settingCheckbox.addEventListener("click", evt => {
        chrome.storage.sync.set({ [setting]: evt.target.checked }, () => {
          console.log(`${setting} set to ${evt.target.checked}`);
        });
      });
    });
  });
};

document.addEventListener("DOMContentLoaded", function(event) {
  init();
});
