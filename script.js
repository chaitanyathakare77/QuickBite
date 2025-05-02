    // let cartCount = 0;
    // let cartTotal = 0.0;

    // function toggleCart() {
    //   const cart = document.getElementById('cartSummary');
    //   cart.style.display = cart.style.display === 'block' ? 'none' : 'block';
    // }

    // function updateCartDisplay() {
    //   document.getElementById('cart-count').textContent = cartCount;
    //   document.getElementById('cart-total').textContent = cartTotal.toFixed(2);
    // }

    // // Setup controls for each card
    // document.querySelectorAll('.card').forEach(card => {
    //   const price = parseFloat(card.dataset.price);
    //   const plusBtn = card.querySelector('.plus');
    //   const minusBtn = card.querySelector('.minus');
    //   const quantityDisplay = card.querySelector('.quantity');
    //   let quantity = 0;

    //   plusBtn.addEventListener('click', () => {
    //     quantity++;
    //     cartCount++;
    //     cartTotal += price;
    //     quantityDisplay.textContent = quantity;
    //     updateCartDisplay();
    //   });

    //   minusBtn.addEventListener('click', () => {
    //     if (quantity > 0) {
    //       quantity--;
    //       cartCount--;
    //       cartTotal -= price;
    //       quantityDisplay.textContent = quantity;
    //       updateCartDisplay();
    //     }
    //   });
    // });

    let cartCount = 0;
    let cartTotal = 0.0;
    
    function toggleCart() {
      const cart = document.getElementById('cartSummary');
      cart.style.display = cart.style.display === 'block' ? 'none' : 'block';
    }
    
    function updateCartDisplay() {
      document.getElementById('cart-count').textContent = cartCount;
      document.getElementById('cart-total').textContent = cartTotal.toFixed(2);
    }
    
    document.addEventListener('DOMContentLoaded', () => {
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
      

    