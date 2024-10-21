
// Import required modules
const path = require("path");
const htmx = require("htmx.js");

    // Enable all anchor elements with the "hx" attribute to use HTMX
    htmx.init();

    // Add event listener to the search bar to update the card view when the user presses Enter
    document
    .getElementById("card-search")
    .addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
        var cardName = event.target.value;
        htmx.get(`card.html?name=${cardName}`, {
            target: "#main-content",
        });
        }
    });
    // Add event listener to the navigation links to update the content when clicked
    document.querySelectorAll("a[hx-get]").forEach((link) => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        var href = link.getAttribute("href");
        htmx.get(href, {
        target: "#main-content",
        });
    });
    });
    // Add event listener to the "Load More" button to update the card gallery when clicked

    // TODO: Implement pagination and infinite scrolling for the card gallery
    // Example:
    // document.getElementById('load-more').addEventListener('click', function(event) {
    //   event.preventDefault();
    //   var currentPage = parseInt(document.querySelector('#current-page').textContent);
    //   htmx.get(`gallery.html?page=${currentPage + 1}`, {
    //     target: '#main-content'
    //   });
    // });
    // Add event listener to the "Back" button to return to the home page
    document
    .getElementById("back-button")
    .addEventListener("click", function (event) {
        event.preventDefault();
        htmx.get("index.html", {
        target: "#main-content",
        });
    });
    // TODO: Implement search functionality for the card gallery
    // Example:
    // document.getElementById('search-button').addEventListener('click', function(event) {
    //   event.preventDefault();
    //   var searchTerm = document.querySelector('#search-term').value;
    //   htmx.get(`gallery.html?search=${searchTerm}`, {
    //     target: '#main-content'
    //   });
    // });
    // TODO: Implement sorting functionality for the card gallery
    // Example:
    // document.getElementById('sort-button').addEventListener('click', function(event) {
    //   event.preventDefault();
    //   var sortBy = document.querySelector('#sort-by').value;
    //   htmx.get(`gallery.html?sort=${sortBy}`, {
    //     target: '#main-content'
    //   });
    // });
    // TODO: Implement filtering functionality for the card gallery
    // Example:
    // document.getElementById('filter-button').addEventListener('click', function(event) {
    //   event.preventDefault();
    //   var filterBy = document.querySelector('#filter-by').value;
    //   htmx.get(`gallery.html?filter=${filterBy}`, {
    //     target: '#main-content'
    //   });
    // });
    // TODO: Implement pagination and infinite scrolling for the card gallery
    // Example:
    // document.getElementById('load-more').addEventListener('click', function(event) {
    //   event.preventDefault();
    //   var currentPage = parseInt(document.querySelector('#current-page').textContent);
    //   htmx.get(`gallery.html?page=${currentPage + 1}`, {
    //     target: '#main-content'
    //   });
    // });

    // TODO: Implement search functionality for the card gallery
    // Example:
    // document.getElementById('search-button').addEventListener('click', function(event) {
    //   event.preventDefault();
    //   var searchTerm = document.querySelector('#search-term').value;
    //   htmx.get(`gallery.html?search=${searchTerm}`, {
    //     target: '#main-content'
    //   });
    // });
    // TODO: Implement sorting functionality for the card gallery
    // Example:
    // document.getElementById('sort-button').addEventListener('click', function(event) {
    //   event.preventDefault();
    //   var sortBy = document.querySelector('#sort-by').value;
    //   htmx.get(`gallery.html?sort=${sortBy}`, {
    //     target: '#main-content'
    //   });
    // });
    // TODO: Implement filtering functionality for the card gallery
    // Example:
    // document.getElementById('filter-button').addEventListener('click', function(event) {
    //   event.preventDefault();
    //   var filterBy = document.querySelector('#filter-by').value;
    //   htmx.get(`gallery.html?filter=${filterBy}`, {
    //     target: '#main-content'
    //   });
    // });
    // TODO: Implement pagination and infinite scrolling for the card gallery
    // Example:
    // document.getElementById('load-more').addEventListener('click', function(event) {
    //   event.preventDefault();
    //   var currentPage = parseInt(document.querySelector('#current-page').textContent);
    //   htmx.get(`gallery.html?page=${currentPage + 1}`, {
    //     target: '#main-content'
    //   });
    // });