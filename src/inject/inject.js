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
				<img border="0" id="cx-mods-us-image" src="https://lh3.googleusercontent.com/TAE6oIlZf4mO1_y0KjaEOXDxnq-aAaGDVBWpem9rXWDNDKYm-2SGxHz1IiW4aCViRf5-LyfJdxVCdA7vn8Efx5RYAd4n-r30525492Tcw8peH9u-pMjHAxOAS27JrBqWvWecfFh0M-6fvQkcb3cmYNjuhQc8FEQkzk9QQw8jVjf3u-r4VXaBLnxJ51w9iA37l1fBD191gKZuUtgm_jIbahU86q22N568AG21c4fdKBkYu9aevFROoU2ZJQwJNPxD0Oa7xLyIj8R52JmSeC6YnwPraQtxtT7aT-g0Dxcovikjjt35kB5YgMVaWd5sbmTJQfqtKLfPNYMTQ7HAvqQKOxCU2IzOFn3KiHJxgnKN3VTWEQZDnqfkW3HjR7iOlzK6OdoJl2RTepwKG__tCaG4-5ETOXv3EZlqSlj5VPn0_c1_mKAbmzoIDLAMd70A-KtFEvu5KlUwqlTTHgzbXb4Kq1R3uXObtsgL7W6iRnJ2WI42dkHzXy-6IORWDugUnXqsCefypt-kLd12bBQV3blzT8wRMU55de52Roz8qd4ALan8nIXtcocUGj0kXKVQgQI0TPeee1AS-nnBZNCBzUBBYpWLDbDLkHnj-QYQHJEqPKLtHBY_q-AS8KGfkFZtcImSXMU2t0ARMt9yYEjuQUFzXr-H=s803-no">
			</a>
		</span>
		<span>
			<a href="https://www.harrys.com/en/ca/?sticky=true">
				<img border="0" id="cx-mods-ca-image" src="https://lh3.googleusercontent.com/E9byc5eLVPPGODyhsO-nOhFEPtjgOVEOXlVPv_glsm539roY5bB-iYdnRZ7g96bf5w2iTNLWE15hgYaQ9XOeCq3E5QN9pJu5wJhlHWCLaP7eHZXtFLhexoYiFH7Vncj8XImZUYbOu5A69liAho_xaD7rEStQhEcVYjUU4hYSeo5NTbMmZOojyv5XjR8tsJHcsxLKse7x8n5Oj-C9tSAzezeCpBkdk_gQozHzZ_fknNoiUllllGp1W971OmLHHBDA_u6CEFhOD_MSr4d4bdbKvFnuQZGNYaZk2MaCNQRMAZZpK-sKyXuSnwUV4oJiRqme5HyzKjW10l-WRtfNDSr9z9AENOtjh06w6P35SDXZiSa7pOq1HHpiakOwBGvQ3C0tqqyT-T8duvhoRtu0NybtMJsq-MCXHKI1Bmtlf75W_svRKa4KlJpmCsjQaAqO_dpIqOXVRDHyEF5obM5XSxyYslODgnKgwLl8H27Ul3Z7qYNiMw-V23qyv8tNSY1g2UIjKR2q_qKXvdYT--qBUo78Bd3ipqcBj6RrqzpToR5-q4DyW3b-RAEEDhqVi8G7Rs5J9yBwR2bWzGq3pygBUGeZR_ztA74Y4IA_MyOFC_Gt1M3bXfO0dpc-uShWUSY-O03CepbIgLEH48KcpzOJwoRdyFUW=s803-no">
			</a>
		</span>
		<span>
			<a href="https://www.harrys.com/en/gb?sticky=true">
				<img id="cx-mods-gb-image" border="0" src="https://lh3.googleusercontent.com/WuYvHZXIG3UVJlGTERSmOj9DaQ0Ku-ExpJ3hJQEs3hxAtf-rlqrC_VGNrH_zg_BCOcVU7Q2SE6LRO2WlqxhpPdMKJvqMsrOm8WOmSLJl_KCaOg2rBjhRrJLeP8OaGHI9tp1eknRC2Gr-EBOqWI_caCue2Xh5OvCJu1lJIrPc6qAd8NlyXM8yrje2UROIBVARGeWnF8l1MCjhMVw0k8G81MM_pglVRuHn8YrmaK-fWqld1p5_k6XDNI10bJVjGNIMdlPOP-gwRv0mYdb7j6jn0JLjc0flwQXH9_c_3UBKHPl42Zj-BS1BycjxLm1PLtFvRzcLfBpQPSLpL2wUVpBJsYkcDwbcNAsHzpuSRJSn_SL32PLG5JT8mN11efefpwlY4NmmsBiOONsC44FQ7-l30ElCIDwmFxNO5AH9tP5UXCAyWjttCPNreUqfw00Ic1zpl4LKePn1T-iQ3Iwg2aHEnewDK-WtQHTZNLUa7PgqlThXmMy2lDfClB1CE34Qig7BV3SkJUz1h8ApsYcFUewMAgW2VGxT4RIDwxqgmQ_Zj6YTWEg4t52lBKiU_bPcuay_ArEIZn-8I7wdzzBsIudfvzttab3OC0D4x83MRiotRVoZagm2x6u4_PvlcNIbpwvnRhW9JbCIhGpFFLD4rKKlAg45=s334-no">
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
      "https://lh3.googleusercontent.com/tJtZLcdfLJITp6ZUTXQ5HCBghabUt6Eo_jppCTpRobHR9iOtDr33B80HSXDhwt6IAYZ8slPPULu8MgqtW44lIwffX8R165AmUMUu1LCrMfNwdzLsUxni8R4tdxJZW2GMsjFtCB30EvBu62WEGdWFzFx9WxUp7smmVV4tTqkEg_KNg_lo19ENtVP7NRCG9j_HLA5CkFkjgWQ1bjFd3-H48WpTBSe_GYCe3bVpPpb8bvpVZW7UgFqIiEdYVOv3LJZUQkqA8-kufR41TYGZBfxximIk49NcDwnN01xebtxsvxqG4cmY76Yr3ojyaCDAVDIGd8BaEpmj5eeMZ8g4lu8n5A02spNsUn7Q1Q3VnRr6mpRindN-MpCQfu47yOE7BycNjZ9lGL3ITvCLPsOblDOPZlrCPtVSUnLvkKmzHp-LtIwauOpYbls3n4SpptAfDGtzOfFQEvvNuTe7gcZ21au5K3jlrO9IlHhrDS2Osq6wJQA87KjjoRwAXqfkyHFzdMDfauyqbwadXtPg8wKwVtd0pPYaPtFKqizCQtBl--9BCDAQIvJLTyACoD-VgGSDAh3l1piAgBdDZLQruRCGaU5eJu2nxOYuc2fohyQBr6PGTJ_GUvNYjeBenDxFZXyTQQ-EDmHPAGR69A2ccUmMlOikihwY=s803-no"
    );
  } else if (location.href.includes("/en/ca")) {
    const img = localeContainer.querySelector("#cx-mods-ca-image");
    img.setAttribute(
      "src",
      "https://lh3.googleusercontent.com/DKujtHKcD0TccBnbO1mBDNAARTAJiG1Ve3wHyFyiDZ3KzyMzYt9YOj6s5Big8nQ7Xi3g5sEfo7Ps9FsbP2R_U5yjwi9zMso39cRoThSD3YZYyfEus5d2KHb3NX9UioSGpT2QOTMXbNuwikP-h-eFqnpFpUKhpAB35AVQLWLtP7zXNT8Dcd-C16A1Tp9i8aYomMpe_ff5XMzPUEFzaDkmYOI_S_isg1yP1hmgNehpkztzjWFxKS7zNXdLpsNddzS5HB3VBT9oxldk6zfQnVfYUxPOQPitkyvFbZlIt8SE9KOlGjVdb6pyH2jGwCsCuuU5aOQ4C2BBMFQgO38DJAmWLbjAFrn77WuPKzjjSU-bq7RjKI9pwkceIGcMTIwubaoZtStKy1jnyutAGD-cn9Tr3o3L4VVWO3fnUT5FNIke_Xi9DSa86zBoHiylGFanC2agLxTf0lOwUtXw5k_y1-wwz0WA70efj_eA41po8MmnbEAwynSa7G0usU-W4QIqVOJR2HzzhB1uFIRIFoopRAucepRxnZi00H5cHzNJpRgTN4WPduPURgxmIMb_CJriIdtG5jL7Xutl5CsGtdhrhUiwpR0-rBAP3j3J7h3WbQ1BAGkF6M7OMEjb999I8xL_IqvtfZTE9e7R5BOTMiYYGMYyCBkP=s803-no"
    );
  } else if (location.href.includes("/en/gb")) {
    const img = localeContainer.querySelector("#cx-mods-gb-image");
    img.setAttribute(
      "src",
      "https://lh3.googleusercontent.com/EG0pBjrgQxk_MnT-E_UmewQMTg68HXOZtAsVXzNp2-IWYngldp5xEIb45fneSq5szulTGBzjdRkr5OTKch3n-ZBHsYOn9iTSANeq9RcFcwNqXiPZly1eXvPHxLJfO0JSeqxdkrZ1UcrgOW-CbNDqJ9biSl5Z995VSKKVyEtQoIs-il5tCpfmYvVC0bYe8y8m7gOjEBwrcmmpR2FNFwBMKK9nDld7f0Xtz3wnopSbaxxzk01JfWXspv9u6HT4-4mQ0KSX_SE1lxWO5isJarICjb86TOUPsWUs5DGmr7IqJj_S_jXESWyuMGEE3VEitm1aw2hwWF-Z9UCtsxWt5dvhqJZIl85_L1ickQDDctaxk8rEou1LURWarkLxnwJPyVPKBvrvspDH1vziohqeBNDY9FFSpcftM00IR-K3kEKjUtQToMQfWHtDQQuxvxLH5-jIuH5OsoofiInMti7dgXPIKyMvNISNDfHPbAQsPy2FCExWsZhTLiuRlv23VCCX4d72iTaO3OSB7e0-R7CxIDG_85sw9oRnRDiitLmVO6vErYoXReqtHZyLEBJo_g7xnd07uazT--pOzxLwgDm1NwWQlE7qpJiqVD-jpjDQO8QQlZkXizjA_aR3mRYhCzceB48II35N5e4PGioyjJaCvr1TxCpK=s803-no"
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
