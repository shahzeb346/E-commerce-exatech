
// product detail
async function getProductById(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!res.ok) {
    throw new Error(`Product not found (status ${res.status})`);
  }

  const product = await res.json();
  console.log(product);
  return product;
}

function renderDetail(p) {
  const container = document.querySelector(".product-detail");
   
  container.innerHTML = `
    <div class="detail-wrapper">
    <div class="left-side">
    <a href="/index.html" class="back-link"><i class="fa-solid fa-arrow-left"></i> Back to Products</a>
    <div class="image-card">
      <img src="${p.image}" alt="${p.title}" class="detail-img">
      </div>
      <div class="thumbnail-row">
          ${Array(4).fill(`<img src="${p.image}" alt="${p.title}" class="thumbnail-img">`).join("")}
        </div>
      </div>
      <div class="right-side">
      <div class="detail-info">
        <h1>${p.title.slice(0,20)}...</h1>
        <p class="product-category" style="color: black;margin-bottom:10px">${p.category}</p>
        <p class="p-price">$ ${p.price.toFixed(2)}</p> <hr>
        <h2 class="p-description">Description</h2>
        <p class="detail-desc">No description available </p><hr>
        <a href="#"><button class="add-to-cart"><i class="fa-solid fa-cart-shopping"></i> Add to Cart</button></a>
      </div>
      <div class="product-features">
          <h2>Product Details</h2>
            <ul>
              <li>Material: Premium quality</li>
              <li>Color: As shown in image</li>
              <li>Size: Standard fit</li>
              <li>Care: Machine washable</li>
            </ul>
          </div>
      </div>
    </div>
  `;
 
}

// read the id from the page URL, e.g. detail.html?id=5
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

if (productId) {
  getProductById(productId)
    .then(renderDetail)
    .catch(err => {
      console.error(err);
      document.querySelector(".product-detail").innerHTML = `<p>Product not found.</p>`;
    });
} else {
  document.querySelector(".product-detail").innerHTML = `<p>No product selected.</p>`;
}

