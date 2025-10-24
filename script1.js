// Load product detail page
if (window.location.pathname.includes('product.html')) {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const product = products.find(p => p.id === id);

  if (product) {
    const container = document.getElementById('productDetail');
    container.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="product-info">
        <h2>${product.name}</h2>
        <p>${product.description || 'High-quality electronic product available at BigTech.'}</p>
        <p class="price">₹${product.price}</p>

        <div class="qty-box">
          <label>Qty:</label>
          <input type="number" id="qty" value="1" min="1">
        </div>

        <button class="add-btn" onclick="addToCartDetail(${product.id})">Add to Cart</button>
      </div>
    `;
  } else {
    document.getElementById('productDetail').innerHTML = "<p>Product not found.</p>";
  }
}

// Add to cart from detail page
function addToCartDetail(id) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const product = products.find(p => p.id === id);
  const qty = parseInt(document.getElementById('qty').value);
  const item = {...product, quantity: qty};

  cart.push(item);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${product.name} (${qty}) added to cart!`);
}
