const menuBar = document.getElementById("menuBar");
const navItems = document.getElementById("navItems");

// When nav menu bar click

menuBar.addEventListener('click', () => {
    if(navItems.classList.contains("hide")){
        navItems.classList.remove("hide");
    }else {
        navItems.classList.add("hide")
    }
})

// Added brands image in brand section

const brandSection = document.getElementById("brands")
fetch('data/brands.json')
    .then((response) => response.json())
    .then((brands) => {
        
        for(let i = 0; i < brands.length; i++){
            const newBrand = document.createElement('img');
            newBrand.src = brands[i].url;
            newBrand.alt = brands[i].name;

            brandSection.appendChild(newBrand);
        }

    } );

// Added Popular products card section
const popular_products = document.getElementById("popular_products");
fetch('data/products.json')
    .then((response) => response.json())
    .then((products) => { 
        
        for(let i = 0; i < products.length; i++){
            const product_card = document.createElement("div");
            product_card.classList.add("product-card");

            // Image
            const product_image = document.createElement("img");
            product_image.src = products[i].url;

            // Title
            const product_title = document.createElement("h1");
            product_title.textContent = products[i].title;

            // price
            const product_price = document.createElement("h3");
            product_price.textContent = `$${products[i].price}`

            // rating
            const product_rating = document.createElement("p");
            product_rating.textContent = `Rating : ${products[i].rating}`

            // Details
            const product_details = document.createElement("p");
            product_details.textContent = products[i].description;




            // Add created elements
            popular_products.appendChild(product_card)
            // Added details in card
            product_card.appendChild(product_image)
            product_card.appendChild(product_title)
            product_card.appendChild(product_price)
            product_card.appendChild(product_rating)
            product_card.appendChild(product_details)
        }

    })