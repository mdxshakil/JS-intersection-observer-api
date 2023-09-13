const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((items) => {
    items.forEach((item) => {
        if (item.isIntersecting) {
            item.target.classList.add("change-color")
        } else {

            item.target.classList.remove("change-color")
        }
    })
}, {
    // threshold: .1 //0.1-1
})

cards.forEach((card) => observer.observe(card))