async function getProductsByCategory(category) {
  const res = await fetch(`https://dummyjson.com/products/category/${encodeURIComponent(category)}`);
  const data = await res.json();
  return data.products;
}

function renderCards(products) {
  const container = document.querySelector(".content-card");
  container.innerHTML = products.map(p => `
    <a class="card-link" href="detail.html?id=${p.id}" style="text-decoration: none;">
    <div class="card product-card">
      <img src="${p.thumbnail}" alt="${p.title}">
      <p class="p-head">${p.title}</p>
      <p style="color: black;">${p.category}</p>
      <p class="p-price">$ ${p.price.toFixed(2)}</p>
    </div></a>
  `).join("");
}

getProductsByCategory("tops").then(renderCards);