// This Is where i have started My JS Settings For My landing Page....
let navBtn = document.querySelector(".btnCont");
let navBar = document.getElementById("navBar");

navBtn.addEventListener("click", () => { 
    navBar.classList.toggle("show");
});