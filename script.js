let cartCount = 0;
let cartTotal = 0.0;

// Toggle Cart Display
function toggleCart() {
  const cart = document.getElementById('cartSummary');
  cart.style.display = cart.style.display === 'block' ? 'none' : 'block';
}

// Update Cart Count and Total
function updateCartDisplay() {
  document.getElementById('cart-count').textContent = cartCount;
  document.getElementById('cart-total').textContent = cartTotal.toFixed(2);
}

// Profile Logic
function handleProfileClick() {
  const username = localStorage.getItem("quickbite_user");
  const menu = document.getElementById("profileMenu");

  if (username) {
    document.getElementById("profileUser").textContent = "Logged in as: " + username;
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  } else {
    window.location.href = "landing.html"; // If not logged in, go to landing
  }
}

function logout() {
  localStorage.removeItem("quickbite_user");
  window.location.href = "landing.html";
}

// DOM Loaded Logic
document.addEventListener('DOMContentLoaded', () => {
  // Update profile name if logged in
  const username = localStorage.getItem("quickbite_user");
  if (username) {
    const profileName = document.getElementById("profile-name");
    if (profileName) profileName.textContent = username;
  }

  // Handle Add to Cart Buttons
  document.querySelectorAll('.card').forEach(card => {
    const price = parseFloat(card.dataset.price);
    const addBtn = card.querySelector('.add-btn');
    const qtyControls = card.querySelector('.quantity-controls');
    const plusBtn = card.querySelector('.plus');
    const minusBtn = card.querySelector('.minus');
    const quantityDisplay = card.querySelector('.quantity');
    let quantity = 0;

    addBtn.addEventListener('click', () => {
      addBtn.style.display = 'none';
      qtyControls.style.display = 'flex';
      quantity++;
      cartCount++;
      cartTotal += price;
      quantityDisplay.textContent = quantity;
      updateCartDisplay();
    });

    plusBtn.addEventListener('click', () => {
      quantity++;
      cartCount++;
      cartTotal += price;
      quantityDisplay.textContent = quantity;
      updateCartDisplay();
    });

    minusBtn.addEventListener('click', () => {
      if (quantity > 0) {
        quantity--;
        cartCount--;
        cartTotal -= price;
        quantityDisplay.textContent = quantity;
        updateCartDisplay();
      }

      if (quantity === 0) {
        qtyControls.style.display = 'none';
        addBtn.style.display = 'inline-block';
      }
    });
  });
});
