import modList from "../shared/modList.js";
import modHandlers from "./modHandlers/index.js";
import contextTests from "./contextTests.js";

const settings = JSON.parse(localStorage.getItem("__cxmods"));

modList.forEach(mod => {
  mod.isOn = settings[mod.id] || modList.defaultOn;
  // If the mod is in the wrong context, don't run it
  if (!contextTests[mod.context]()) return;
  // If the mod is off, don't run it
  if (!mod.isOn) return;

  switch (mod.type) {
    case "switch":
      {
        modHandlers[mod.id]();
      }
      break;
    case "colorPicker":
      {
        const modColor = settings[`${mod.id}Color`];
        modHandlers[mod.id](modColor);
      }
      break;
    default:
      return;
  }
});
