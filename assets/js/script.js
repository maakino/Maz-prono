
document.addEventListener("DOMContentLoaded", function () {

    const nav=document.querySelector("#nav");
    const burger=document.querySelector("#burger");

    burger.addEventListener("click", function () {
        nav.classList.toggle("active");
    });

    nav.querySelectorAll("li").forEach(function (li) {
        li.addEventListener("click", function () {
            nav.classList.remove("active");
        });
    });


});