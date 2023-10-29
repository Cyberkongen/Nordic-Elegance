const apiUrl = 'https://www.nordicelegance.no/wp-json/wc/v3/products';
const consumerKey = 'ck_5672f1cde42451157dfcb4a82a19748a2ca50d30';
const consumerSecret = 'cs_91e73ee79f492f1cb3843538653ef608e51e6227';
const ProductSection = document.querySelector('.Products');


fetch(apiUrl, {
  method: 'GET',
  headers: {
    'Authorization': 'Basic ' + btoa(consumerKey + ':' + consumerSecret)
  }
})
  .then(response => response.json())
  .then(data => {

    data.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.className = 'Product';

      const imgElement = document.createElement('img');
      imgElement.src = product.images[0].src;

      const ProductTitle = document.createElement('h1');
      ProductTitle.textContent = product.name;

      const ProductPrice = document.createElement('h2');
      ProductPrice.textContent = product.price + 'kr';

      const Button = document.createElement('button');
      Button.textContent = 'view';

      Button.addEventListener('click', () => {
        const productId = product.id;
        
        const productUrl = `productpage.html?ID=${productId}`;
        window.location.href = productUrl;
      });


      ProductSection.appendChild(productDiv);
      productDiv.appendChild(imgElement);
      productDiv.appendChild(ProductTitle);
      productDiv.appendChild(ProductPrice);
      productDiv.appendChild(Button);
    })

    
  })
  .catch(error => {
    console.error('Error fetching product data:', error);
  });
