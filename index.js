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

            brandSection.appendChild(newBrand);
        }

    } );