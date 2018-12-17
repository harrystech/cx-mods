const injectSearchByAddress = () => {
  headerTabs = document.querySelector("#tabs");
  if (!headerTabs) {
    return;
  }
  const searchByAddressListItem = document.createElement("li");
  searchByAddressListItem.setAttribute("class", "cx-mods");
  searchByAddressListItem.setAttribute("id", "search-by-address");
  const searchByAddressHTML = `
	  <div class="search-by-address-heading">
	  	<h4>Address Search</h4>
	  </div>
    <form action="/admin/shipping_addresses" id="shipping-address-form">
			<input name="q[name_cont]" type="text" placeholder="Name (contains)">
			<input name="q[address_line_1_cont]" type="text" placeholder="Address (contains)">
			<input name="q[zip_eq]" type="text" placeholder="Zip (exact)">
			<input type="submit" class="cx-mods-hidden">
    </form>
	`;

  searchByAddressListItem.innerHTML = searchByAddressHTML;
  headerTabs.appendChild(searchByAddressListItem);
};


const injectSeventeenDays = () => {
	if (!location.href.includes('/create_order')) return;
	const datePickerEl = document.querySelector('#shave_plan_first_send_date');
	if (!datePickerEl) return;
	const d = new Date();
	const ts = d.getTime();
	const seventeenDays = ts + (17 * 24 * 60 * 60 * 1000);
	const sev = new Date(seventeenDays);
	console.log(sev.toString());
	const dateListItemParent = datePickerEl.parentNode
	
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

}



const initialize = () => {
  injectSearchByAddress();
  injectSeventeenDays();
};

chrome.extension.sendMessage({}, function(response) {
  var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);
      initialize();
    }
  }, 10);
});
