// all products
async function getAllProducts() {
  const res = await fetch(`https://fakestoreapi.com/products/`);
  const products = await res.json(); 
  return products;
}

function renderCards(products) {
  const container = document.querySelector(".content-card");
  container.innerHTML = products.map(p => `
    <a class="card-link" href="detail.html?id=${p.id}" style="text-decoration: none;">
    <div class="card product-card">
      <img src="${p.image}" alt="${p.title}">
        <p class="p-head">${p.title.slice(0,15)}...</p>
        <p style="color: black;">${p.category}</p>
      <p class="p-price">$ ${p.price.toFixed(2)}</p>
    </div></a>
  `).join("");
}

getAllProducts().then(renderCards);

