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
    .catch(error => {
        // this is to handle any errors that occur during the fetch
        console.error("Failed to load products. Please try again later.", error);
    });
