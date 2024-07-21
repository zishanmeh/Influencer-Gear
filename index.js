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