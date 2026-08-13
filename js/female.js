// female category
async function getProductsByCategory(category) {
  const res = await fetch(`https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`);
  const products = await res.json();
  console.log(products);
  return products;
}

function renderCards(products) {
  const container = document.querySelector(".content-card");
  container.innerHTML = products.map(p => `
    <a class="card-link" href="detail.html?id=${p.id}" style="text-decoration: none;">
    <div class="card">
          <img src="${p.image}" alt="${p.title}">
      <p class="p-head">${p.title.slice(0,15)}...</p>
      <p style="color: black;">${p.category}</p>
      <p class="p-price">$ ${p.price.toFixed(2)}</p>
    </div></a>
  `).join("");
}

getProductsByCategory("women's clothing").then(renderCards);
