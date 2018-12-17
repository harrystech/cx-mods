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
  if (!location.href.includes("/create_order")) return;
  const datePickerEl = document.querySelector("#shave_plan_first_send_date");
  if (!datePickerEl) return;
  const d = new Date();
  const ts = d.getTime();
  const seventeenDays = ts + 17 * 24 * 60 * 60 * 1000;
  const sev = new Date(seventeenDays);
  console.log(sev.toString());
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

const injectLocalePicker = () => {
  const localeHTML = `
		<span>
			<a href="https://www.harrys.com/en/us?sticky=true">
				<img border="0" id="cx-mods-us-image" src="https://lh3.googleusercontent.com/TAE6oIlZf4mO1_y0KjaEOXDxnq-aAaGDVBWpem9rXWDNDKYm-2SGxHz1IiW4aCViRf5-LyfJdxVCdA7vn8Efx5RYAd4n-r30525492Tcw8peH9u-pMjHAxOAS27JrBqWvWecfFh0M-6fvQkcb3cmYNjuhQc8FEQkzk9QQw8jVjf3u-r4VXaBLnxJ51w9iA37l1fBD191gKZuUtgm_jIbahU86q22N568AG21c4fdKBkYu9aevFROoU2ZJQwJNPxD0Oa7xLyIj8R52JmSeC6YnwPraQtxtT7aT-g0Dxcovikjjt35kB5YgMVaWd5sbmTJQfqtKLfPNYMTQ7HAvqQKOxCU2IzOFn3KiHJxgnKN3VTWEQZDnqfkW3HjR7iOlzK6OdoJl2RTepwKG__tCaG4-5ETOXv3EZlqSlj5VPn0_c1_mKAbmzoIDLAMd70A-KtFEvu5KlUwqlTTHgzbXb4Kq1R3uXObtsgL7W6iRnJ2WI42dkHzXy-6IORWDugUnXqsCefypt-kLd12bBQV3blzT8wRMU55de52Roz8qd4ALan8nIXtcocUGj0kXKVQgQI0TPeee1AS-nnBZNCBzUBBYpWLDbDLkHnj-QYQHJEqPKLtHBY_q-AS8KGfkFZtcImSXMU2t0ARMt9yYEjuQUFzXr-H=s803-no"style="float: left; margin-right: 1%; margin-bottom: 0.5em;" width="25" height="25">
			</a>
		</span>
		<span>
			<a href="https://www.harrys.com/en/ca/?sticky=true">
				<img border="0" id="cx-mods-ca-image" src="https://lh3.googleusercontent.com/E9byc5eLVPPGODyhsO-nOhFEPtjgOVEOXlVPv_glsm539roY5bB-iYdnRZ7g96bf5w2iTNLWE15hgYaQ9XOeCq3E5QN9pJu5wJhlHWCLaP7eHZXtFLhexoYiFH7Vncj8XImZUYbOu5A69liAho_xaD7rEStQhEcVYjUU4hYSeo5NTbMmZOojyv5XjR8tsJHcsxLKse7x8n5Oj-C9tSAzezeCpBkdk_gQozHzZ_fknNoiUllllGp1W971OmLHHBDA_u6CEFhOD_MSr4d4bdbKvFnuQZGNYaZk2MaCNQRMAZZpK-sKyXuSnwUV4oJiRqme5HyzKjW10l-WRtfNDSr9z9AENOtjh06w6P35SDXZiSa7pOq1HHpiakOwBGvQ3C0tqqyT-T8duvhoRtu0NybtMJsq-MCXHKI1Bmtlf75W_svRKa4KlJpmCsjQaAqO_dpIqOXVRDHyEF5obM5XSxyYslODgnKgwLl8H27Ul3Z7qYNiMw-V23qyv8tNSY1g2UIjKR2q_qKXvdYT--qBUo78Bd3ipqcBj6RrqzpToR5-q4DyW3b-RAEEDhqVi8G7Rs5J9yBwR2bWzGq3pygBUGeZR_ztA74Y4IA_MyOFC_Gt1M3bXfO0dpc-uShWUSY-O03CepbIgLEH48KcpzOJwoRdyFUW=s803-no"style="float: left; margin-right: 1%; margin-bottom: 0.5em;" width="25" height="25">
			</a>
		</span>
		<span>
			<a href="https://www.harrys.com/en/gb?sticky=true">
				<img id="cx-mods-gb-image" border="0" src="https://lh3.googleusercontent.com/WuYvHZXIG3UVJlGTERSmOj9DaQ0Ku-ExpJ3hJQEs3hxAtf-rlqrC_VGNrH_zg_BCOcVU7Q2SE6LRO2WlqxhpPdMKJvqMsrOm8WOmSLJl_KCaOg2rBjhRrJLeP8OaGHI9tp1eknRC2Gr-EBOqWI_caCue2Xh5OvCJu1lJIrPc6qAd8NlyXM8yrje2UROIBVARGeWnF8l1MCjhMVw0k8G81MM_pglVRuHn8YrmaK-fWqld1p5_k6XDNI10bJVjGNIMdlPOP-gwRv0mYdb7j6jn0JLjc0flwQXH9_c_3UBKHPl42Zj-BS1BycjxLm1PLtFvRzcLfBpQPSLpL2wUVpBJsYkcDwbcNAsHzpuSRJSn_SL32PLG5JT8mN11efefpwlY4NmmsBiOONsC44FQ7-l30ElCIDwmFxNO5AH9tP5UXCAyWjttCPNreUqfw00Ic1zpl4LKePn1T-iQ3Iwg2aHEnewDK-WtQHTZNLUa7PgqlThXmMy2lDfClB1CE34Qig7BV3SkJUz1h8ApsYcFUewMAgW2VGxT4RIDwxqgmQ_Zj6YTWEg4t52lBKiU_bPcuay_ArEIZn-8I7wdzzBsIudfvzttab3OC0D4x83MRiotRVoZagm2x6u4_PvlcNIbpwvnRhW9JbCIhGpFFLD4rKKlAg45=s334-no"style="float: left; margin-right: 1%; margin-bottom: 0.5em;" width="25" height="25">
			</a>
		</span>
	`;

  const localeContainer = document.createElement("span");
  localeContainer.id = "cx-mods-locale-container";
  localeContainer.innerHTML = localeHTML;
  const secondaryNav = document.querySelector(".secondary-nav");
  secondaryNav.prepend(localeContainer);

  if (location.href.includes("/en/us")) {
    const img = localeContainer.querySelector("#cx-mods-us-image");
    img.setAttribute(
      "src",
      "https://lh3.googleusercontent.com/2_R0t1JPr_kxkhYqK9gcf01fHQQIdVpxIRpsqQfv0pHZTDjNI0lkj9R_kCXrZtaZs8mTeLgg30iCroLk3vKyMqGZxcc4DSLV5Wr1G2y5yksqpJhUDZQhYHAWMtiEjAwMuJD2fqxMhX2BnO9Qja9h8YS8MYRrjIfXSeuOdnFicm4vru1nf4toOSguxjq-3SSNaz97a7Oped5HWHhKN2fTqVMNXrb2xkdGyGHOjglB8qtJ_kKiiVMBCI5-icNiG1aV_EQisD4pnKG4zRFqFmXhrjZbRdLBMXuRxZ4A2ON0wUj9MrI_pwumO6Jv33YAD4IZSlDvDjkQDzpNDHJTrowT6IH_3Qb7YODALJkA8pBee1Hs2Um_vQgainDkowe11VJnXUUtwVRR7V4l-BE3JTsBkhnIBy9gIoTOqGMY_Bvh2VS9Q8xgsztXnpY0uadQNgZCRf-XHOPxBOJmuGMRtlQRYNRaBV7PeKb4rKozxqhr0DSpWo-HLx0_hlASYZfgQ388ZhTv_oDthFI0vGqo_m5I0E8-87ivIxKO4bfatXwGOWSY6BM8f3tcttvEcwzN75_CF6a1UK6FXaFtS7Py3lpNocUWDvkifTYKl5XJztnEqwpC06tN0RTAesXJ_PgbmdGO9mN7JphyUnvIHa--IUJ2b5Tt=s803-no"
    );
  } else if (location.href.includes("/en/ca")) {
    const img = localeContainer.querySelector("#cx-mods-ca-image");
    img.setAttribute(
      "src",
      "https://lh3.googleusercontent.com/TklKpR83bN-5O9VSn8u9jylV9mUzDwasRIqjQXVvsUt8xt74iOWpFlVFmfsytohg4nicX5vyUxMAqEBQcLkL__SSeb3bSZLUD5gFiAG329ePWcYkwWgI3yYIX9GD9-uQnOHV74gUUp0_vC_JtJaqlHpzCk4Ryiu1lJab6xPjTulL2vywsPmCZkUGsZkOc2_bf_b2nbDotjnO6R7Zt_BvPvU4CsvSLJUSC3o25X7zJSbgCN4fL5aAq7vMJzhfG2aRmPJo1C39DWhHV0lp0_zbQXbN5eYJWxyP4oPuLMqI95hdU5yMcYh527GRqpfHc6XqEgk-lzJmldCrQWgcHBHrFwXR3-rigJ1y9k8WdQ_E7vxXw4wlUuOOX4ZSiBIgeI03OddIm2NIGoZBJZeDVW1GHPj6M7zwkwRU1WcaAAcenGae8bz1qeMUObK9bTEdCLB8d1VPJVFoz85qauiKsNpDQ-UUNy-G08xgLoOb3PNm2pPT2W-lQYQngQZx7WYxD8uuLXaobHgRGXsk6_4ki1MxhDFsG7zsz_mRz9wBE_yyvbVtanwffWfLVnrfe5vDawN300RJ2VRKSr8-k_aJsgaNskSbk8p0kD5zirSY4brnySL6HUBcAOBzCA1S8Zv7NxbUeoYhMaRjzHjWFYy0iIVo_Rsd=s803-no"
    );
  } else if (location.href.includes("/en/gb")) {
    const img = localeContainer.querySelector("#cx-mods-gb-image");
    img.setAttribute(
      "src",
      "https://lh3.googleusercontent.com/pgKi8heM4mrjCu38-iJGoaus4CrGv85HIuJVNSYETxq8MGsM9ViNL-_6Z7xuI28bRVRTRc3XI3jCJEaKIP-FC6YUoqpTR_uBJdEYVpcqriNOUVCt0gXD7b1f0Lz6zC5kn70Vd79n3t5pbTDBanGmhKASensC162lJPBHZ42RiWL0grnOyap7OYVJujdqbOjBI9bNdDmcTOHQbyXpXjmPUj9ehreCHaJ7w98ZbY6QtZ03RKfd1OJeEcc99x1O3DqIa3ZSO3rQrsOnDLydsercSbpe63K4bbYKS5M_xqzsWU2UJVba6NmwlyzV842I5t28nx-t3lFv_FHjFQLdaT1ETdIJeDLt3ntLP4UB75AQE0e0Rn8PTP-fPuhNU2KCqnRtQf2KtIkbfflTEap89ESV4BjQUQIC35a52mgBhDpuKAobj1lM4_RkA7IR9V0SE0Ms1VoPAhlSTds5N2TFFUR1tv98U4VwVnkUmefDoGakzIMSaGX4KqgsvaoCkbiYlPIx8SYMlPz95ZHWxzZmpf2PP1shPqGZcYzav15wFMIUMoP3pO285VpIXJyFhX0asU2xA-u0uXG77XHR0mDpuH3hlP7Q5_pct9EAcTeV1Z8ou22QJPk5M46oVTRVIESFW5ILCLBO4udmcyLes40qeF8e4Vp5=s803-no"
    );
  }
};

const initialize = () => {
  if (location.href.includes("/admin")) {
    injectSearchByAddress();
    injectSeventeenDays();
  } else {
    injectLocalePicker();
  }
};

chrome.extension.sendMessage({}, function(response) {
  var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);
      initialize();
    }
  }, 10);
});
