const uncheckSPCheckbox = () => {
  const shavePlanCheckbox = document.querySelector(
    "input#shave_plan_send_immediately"
  );
  shavePlanCheckbox.click();
};

const seventeen = () => {
  if (
    !location.href.includes("/show_create_order") &&
    !location.href.includes("/create_order")
  )
    return;
  const datePickerEl = document.querySelector("#shave_plan_first_send_date");
  if (!datePickerEl) return;
  uncheckSPCheckbox();
  const d = new Date();
  const ts = d.getTime();
  const seventeenDays = ts + 17 * 24 * 60 * 60 * 1000;
  const sev = new Date(seventeenDays);
  const dateListItemParent = datePickerEl.parentNode;

  const datePickerListItem = document.createElement("li");
  datePickerListItem.setAttribute("class", "cx-mods");
  const dateListHTML = `
		<div class='date-picker-seventeen'>
			<p>17 days out would be:</p>
			<p>${sev.toString()};</p>
		</div>
	`;

  datePickerListItem.innerHTML = dateListHTML;
  dateListItemParent.appendChild(datePickerListItem);
};

export default seventeen;
