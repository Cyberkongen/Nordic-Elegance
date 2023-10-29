const apiUrl = 'https://www.nordicelegance.no/wp-json/wc/v3/products';
const consumerKey = 'ck_5672f1cde42451157dfcb4a82a19748a2ca50d30';
const consumerSecret = 'cs_91e73ee79f492f1cb3843538653ef608e51e6227';
const ProductSection = document.querySelector('.productContainer');

const urlParams = new URLSearchParams(window.location.search);
const productID = urlParams.get("ID");


fetch(apiUrl, {
  method: 'GET',
  headers: {
    'Authorization': 'Basic ' + btoa(consumerKey + ':' + consumerSecret)
  }
})
  .then(response => response.json())
  .then(data => {

    const specificProduct = data.find(product => product.id == productID);

    if (specificProduct) {
        const productDiv = document.createElement('div');
        productDiv.className = 'Product';
  
        const imgElement = document.createElement('img');
        imgElement.src = specificProduct.images[0].src;
  
        const ProductTitle = document.createElement('h1');
        ProductTitle.textContent = specificProduct.name;
  
        const ProductPrice = document.createElement('h2');
        ProductPrice.textContent = specificProduct.price + 'kr';

        console.log(specificProduct);
  
        ProductSection.appendChild(productDiv);
        productDiv.appendChild(imgElement);
        productDiv.appendChild(ProductTitle);
        productDiv.appendChild(ProductPrice);
      } else {
        console.error('Product with ID ' + productID + ' not found.');
      }
  })
  .catch(error => {
    console.error('Error fetching product data:', error);
  });