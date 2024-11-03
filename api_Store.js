//Task 2 Fetch Products from the API Using Fetch and Promises
const apiURL = "https://www.course-api.com/javascript-store-products";

// this is to fetch product data from the API
fetch(apiURL)
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => {
        // this is to call all the function to display products
        displayProducts(data);
    })
    // this is task 4
    .catch(error => {
        // this is to handle any errors that occur during the fetch
        console.error("Failed to load products. Please try again later.", error);
    });
// Task 3 Display Product Details Dynamically
function displayProducts(products) {
    const productContainer = document.getElementById("product-container");
 products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const productImage = document.createElement('img');
        productImage.src = product.image; // this is for images
        productImage.alt = product.title; // this is for title
        productImage.classList.add('product-image');

        const companyName = document.createElement('h3');
        companyName.textContent = `Company: ${product.brand'}`; // this is for company name

        const productName = document.createElement('h4');
        productName.textContent = `Product: ${product.title}`;

        const productPrice = document.createElement('p');
        productPrice.textContent = `Price: $${product.price.toFixed(2)}`;

        productDiv.appendChild(productImage);
        productDiv.appendChild(companyName);
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);

        productContainer.appendChild(productDiv);
    });
}
fetchProducts();
