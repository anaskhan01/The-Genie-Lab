let search = document.getElementById('search');
let header = document.getElementById('header');
let searchfunctionality = document.getElementById("searchSection");
let close = document.getElementById("close");
let sticky = header.offsetTop;

window.onscroll = function () { myFunction() };


// Search bar functionality
search.addEventListener("click", function () {
    header.style.display = "none";
    searchfunctionality.style.display = "block";
});
close.addEventListener("click", function () {
    header.style.display = "block";
    searchfunctionality.style.display = "none";
});

function myFunction() {
    if (window.scrollY >= 300) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

