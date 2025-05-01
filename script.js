// script.js
let cartCount = 0;
let cartTotal = 0.0;

document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", () => {
    const price = parseFloat(
      button.previousElementSibling.innerText.slice(1)
    );
    cartCount++;
    cartTotal += price;
    document.getElementById("cart-count").innerText = cartCount;
    document.getElementById("cart-total").innerText = cartTotal.toFixed(2);
  });
});
