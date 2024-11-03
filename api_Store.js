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
        const productElement = document.createElement('div');
        productElement.innerHTML = `
            <h2>${product.name}</h2>
            <img src="${product.image}" alt="${product.name}" />
            <p>Company: ${product.company}</p>
            <p>Price: $${product.price}</p>
        `;
        productContainer.appendChild(productElement);
    });
}