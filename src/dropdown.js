const category__button = document.querySelector(".category__button")
category__button.onclick = createDropdown;

function createDropdown() {
    document.getElementById("dropdown").classList.toggle("show");   
}

