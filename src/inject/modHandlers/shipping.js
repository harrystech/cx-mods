const shipping = () => {
  const headerTabs = document.querySelector("#tabs");
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

export default shipping;
