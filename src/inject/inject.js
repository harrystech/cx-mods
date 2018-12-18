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

const injectUncheckSPCheckbox = () => {
  const shavePlanCheckbox = document.querySelector(
    "input#shave_plan_send_immediately"
  );
  shavePlanCheckbox.click();
  console.log("It worked!");
};

const injectSeventeenDays = () => {
  if (!location.href.includes("/create_order")) return;
  const datePickerEl = document.querySelector("#shave_plan_first_send_date");
  if (!datePickerEl) return;
  injectUncheckSPCheckbox();
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
				<img border="0" id="cx-mods-us-image" src="https://lh3.googleusercontent.com/tJtZLcdfLJITp6ZUTXQ5HCBghabUt6Eo_jppCTpRobHR9iOtDr33B80HSXDhwt6IAYZ8slPPULu8MgqtW44lIwffX8R165AmUMUu1LCrMfNwdzLsUxni8R4tdxJZW2GMsjFtCB30EvBu62WEGdWFzFx9WxUp7smmVV4tTqkEg_KNg_lo19ENtVP7NRCG9j_HLA5CkFkjgWQ1bjFd3-H48WpTBSe_GYCe3bVpPpb8bvpVZW7UgFqIiEdYVOv3LJZUQkqA8-kufR41TYGZBfxximIk49NcDwnN01xebtxsvxqG4cmY76Yr3ojyaCDAVDIGd8BaEpmj5eeMZ8g4lu8n5A02spNsUn7Q1Q3VnRr6mpRindN-MpCQfu47yOE7BycNjZ9lGL3ITvCLPsOblDOPZlrCPtVSUnLvkKmzHp-LtIwauOpYbls3n4SpptAfDGtzOfFQEvvNuTe7gcZ21au5K3jlrO9IlHhrDS2Osq6wJQA87KjjoRwAXqfkyHFzdMDfauyqbwadXtPg8wKwVtd0pPYaPtFKqizCQtBl--9BCDAQIvJLTyACoD-VgGSDAh3l1piAgBdDZLQruRCGaU5eJu2nxOYuc2fohyQBr6PGTJ_GUvNYjeBenDxFZXyTQQ-EDmHPAGR69A2ccUmMlOikihwY=s803-no">
			</a>
		</span>
		<span>
			<a href="https://www.harrys.com/en/ca/?sticky=true">
				<img border="0" id="cx-mods-ca-image" src="https://lh3.googleusercontent.com/DKujtHKcD0TccBnbO1mBDNAARTAJiG1Ve3wHyFyiDZ3KzyMzYt9YOj6s5Big8nQ7Xi3g5sEfo7Ps9FsbP2R_U5yjwi9zMso39cRoThSD3YZYyfEus5d2KHb3NX9UioSGpT2QOTMXbNuwikP-h-eFqnpFpUKhpAB35AVQLWLtP7zXNT8Dcd-C16A1Tp9i8aYomMpe_ff5XMzPUEFzaDkmYOI_S_isg1yP1hmgNehpkztzjWFxKS7zNXdLpsNddzS5HB3VBT9oxldk6zfQnVfYUxPOQPitkyvFbZlIt8SE9KOlGjVdb6pyH2jGwCsCuuU5aOQ4C2BBMFQgO38DJAmWLbjAFrn77WuPKzjjSU-bq7RjKI9pwkceIGcMTIwubaoZtStKy1jnyutAGD-cn9Tr3o3L4VVWO3fnUT5FNIke_Xi9DSa86zBoHiylGFanC2agLxTf0lOwUtXw5k_y1-wwz0WA70efj_eA41po8MmnbEAwynSa7G0usU-W4QIqVOJR2HzzhB1uFIRIFoopRAucepRxnZi00H5cHzNJpRgTN4WPduPURgxmIMb_CJriIdtG5jL7Xutl5CsGtdhrhUiwpR0-rBAP3j3J7h3WbQ1BAGkF6M7OMEjb999I8xL_IqvtfZTE9e7R5BOTMiYYGMYyCBkP=s803-no">
			</a>
		</span>
		<span>
			<a href="https://www.harrys.com/en/gb?sticky=true">
				<img id="cx-mods-gb-image" border="0" src="https://lh3.googleusercontent.com/EG0pBjrgQxk_MnT-E_UmewQMTg68HXOZtAsVXzNp2-IWYngldp5xEIb45fneSq5szulTGBzjdRkr5OTKch3n-ZBHsYOn9iTSANeq9RcFcwNqXiPZly1eXvPHxLJfO0JSeqxdkrZ1UcrgOW-CbNDqJ9biSl5Z995VSKKVyEtQoIs-il5tCpfmYvVC0bYe8y8m7gOjEBwrcmmpR2FNFwBMKK9nDld7f0Xtz3wnopSbaxxzk01JfWXspv9u6HT4-4mQ0KSX_SE1lxWO5isJarICjb86TOUPsWUs5DGmr7IqJj_S_jXESWyuMGEE3VEitm1aw2hwWF-Z9UCtsxWt5dvhqJZIl85_L1ickQDDctaxk8rEou1LURWarkLxnwJPyVPKBvrvspDH1vziohqeBNDY9FFSpcftM00IR-K3kEKjUtQToMQfWHtDQQuxvxLH5-jIuH5OsoofiInMti7dgXPIKyMvNISNDfHPbAQsPy2FCExWsZhTLiuRlv23VCCX4d72iTaO3OSB7e0-R7CxIDG_85sw9oRnRDiitLmVO6vErYoXReqtHZyLEBJo_g7xnd07uazT--pOzxLwgDm1NwWQlE7qpJiqVD-jpjDQO8QQlZkXizjA_aR3mRYhCzceB48II35N5e4PGioyjJaCvr1TxCpK=s803-no">
			</a>
		</span>
	`;

  const localeContainer = document.createElement("span");
  localeContainer.id = "cx-mods-locale-container";
  localeContainer.innerHTML = localeHTML;
  const secondaryNav = document.querySelector(".secondary-nav");
  // secondaryNav.insertBefore(secondaryNav.firstElementChild, localeContainer);
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

const getModSettings = callback => {
  chrome.storage.sync.get(["shipping", "locale", "seventeen"], result => {
    console.log("result", result);
    if (result.shipping === "undefined") {
      result.shipping = true;
    }
    if (result.locale === "undefined") {
      result.locale = true;
    }
    if (result.seventeen === "undefined") {
      result.seventeen = true;
    }
    callback({
      shipping: result.shipping,
      locale: result.locale,
      seventeen: result.seventeen
    });
  });
};

const initialize = () => {
  getModSettings(settings => {
    console.dir(settings);
    if (location.href.includes("/admin")) {
      if (settings.seventeen) {
        injectSeventeenDays();
      }
      if (settings.shipping) {
        injectSearchByAddress();
      }
    } else {
      if (settings.locale) {
        injectLocalePicker();
      }
    }
  });
};

chrome.extension.sendMessage({}, function(response) {
  var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);
      initialize();
    }
  }, 100);
});
