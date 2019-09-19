const buttonsATF = () => {
  if (
    !location.href.includes("/show_create_order") &&
    !location.href.includes("/create_order")
  )
    return;
  const pagenavButtons = document.querySelector("fieldset.actions>ol");
  const pagenavButtonsClone = pagenavButtons.cloneNode(true);
  pagenavButtonsClone.id = "page-nav-clone";

  const prevEl = pagenavButtons.querySelector('[value="Back"]');
  const nextEl = pagenavButtons.querySelector('[value="Next Page"]');
  const clonePrevEl = pagenavButtonsClone.querySelector('[value="Back"]');
  const cloneNextEl = pagenavButtonsClone.querySelector('[value="Next Page');
  const connectPrevEls = () => {
    if (!prevEl || !clonePrevEl) return;
    clonePrevEl.addEventListener("click", () => {
      prevEl.click();
    });
  };
  const connectNextEls = () => {
    if (!nextEl || !cloneNextEl) return;
    cloneNextEl.addEventListener("click", () => {
      nextEl.click();
    });
  };
  connectPrevEls();
  connectNextEls();
  const mainContentWrapper = document.querySelector("div#main_content_wrapper");
  mainContentWrapper.prepend(pagenavButtonsClone);
};

export default buttonsATF;
