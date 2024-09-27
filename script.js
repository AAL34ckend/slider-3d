let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
const slide = document.querySelector('.slide');
const items = document.querySelectorAll(".item");


items.forEach((item) => {
    item.addEventListener('click', function () {
        let currentItem = slide.children[0];
        slide.appendChild(currentItem)
    })
});
next.addEventListener('click', function () {
    let items = document.getElementsByClassName("item");
    slide.appendChild(items[0])
});

prev.addEventListener('click', function () {
    let items = document.getElementsByClassName("item");
    slide.prepend(items[items.length - 1]);
});

