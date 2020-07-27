import addCSS from "../../utils/addCSS.js";

const getCartSubtotal = (cart) => {
  let total = 0;
  cart.items.forEach((item) => {
    const price = Number(item.price);
    total = item.quantity * price + total;
  });
  let displayTotal = total.toString();
  if (displayTotal.includes(".")) {
    const totalArray = displayTotal.split(".");
    if (totalArray[1].length < 2) {
      displayTotal += "0";
    }
  }
  return displayTotal;
};

const getPrice = (label) => {
  const priceRegEx = /[$£](\d+(.\d+)?)/;
  const labelRegExArray = label.innerText.match(priceRegEx);
  const price = labelRegExArray[1];
  return price;
};

const getCart = () => {
  const cart = {
    items: [],
  };
  const productElements = Array.from(
    document.querySelectorAll('input[type="number"]:not([id^="quick_order"])')
  ).map((inputEl) => inputEl.parentNode);

  for (let i = 0; i < productElements.length; i++) {
    const label = productElements[i];
    const quantity = Number(label.querySelector("input").value);
    const name = label.querySelector("strong").innerText;
    if (quantity > 0) {
      cart.items.push({
        name: name,
        price: getPrice(label),
        quantity: quantity,
      });
    }
  }
  cart.subtotal = getCartSubtotal(cart);
  return cart;
};

const countrySelector = document.querySelector("select#country");
const selectedCountry =
  countrySelector &&
  countrySelector.options[countrySelector.selectedIndex].value;

const createCartItem = (product) => `
  <li class="cx-mods-cart-items">
    <span class="cx-mods-cart-item-name">${product.name}</span>
    <span class="cx-mods-cart-item-details">${product.quantity} x ${
  selectedCountry === "GB" ? "£" : "$"
}${product.price}</span>
  </li>
  `;

const renderCart = (cart) => {
  const cartContentsString = cart.items
    .map((product) => createCartItem(product))
    .join("");
  const cartDiv = document.querySelector(".cx-mods-cart");
  const cartUl = cartDiv.querySelector("ul");
  const cartSubtotalSpan = cartDiv.querySelector(".cx-mods-cart-subtotal");
  cartUl.innerHTML = cartContentsString;
  cartSubtotalSpan.innerHTML = `Subtotal: ${
    selectedCountry === "GB" ? "£" : "$"
  }${cart.subtotal}`;
};

const createOrderCart = () => {
  const productElements = Array.from(
    document.querySelectorAll('input[type="number"]')
  ).map((inputEl) => inputEl.parentNode);

  productElements.forEach((label) => {
    const input = label.querySelector("input");
    input.addEventListener("change", () => {
      const cart = getCart();
      renderCart(cart);
    });
  });

  const cartDiv = document.createElement("div");
  cartDiv.setAttribute("class", "cx-mods-cart");
  cartDiv.innerHTML = `
  <div class="cx-mods-cart-inner-container">
  <h4>Your Cart</h4>  
  <ul class="cx-mods-cart-ul"></ul>
  <span class="cx-mods-cart-subtotal"></span>
  </div>
  `;
  document.body.appendChild(cartDiv);
  addCSS(`
        div.cx-mods-cart {
            display: flex;
            flex-direction: column;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 0 1px #FFF inset;
            border-radius: 5px;
            background-color: white;
            min-height: 100px;
            min-width: 200px;
            position: fixed;
            top: 10px;
            right: 10px;
            z-index: 1000;
        }
        div.cx-mods-cart-inner-container{
          padding: 5px;
        }
        ul.cx-mods-cart-ul {
          list-style: none;
        }
        span.cx-mods-cart-item-name {
          display: block;
        }
    `);
  const cart = getCart();
  renderCart(cart);
};

export default createOrderCart;
