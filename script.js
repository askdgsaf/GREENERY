//LOGO RE-DIRECT
document.getElementById('redirectImage').addEventListener('click', function () {
    window.location.href = "index.html";
});

//NAVBAR
document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtns = document.querySelectorAll(".dropdown-button");
    const dropdownWrappers = document.querySelectorAll(".dropdown-wrapper");

    // Close all dropdowns except the one passed as parameter
    function closeAllDropdowns(exceptThisOne = null) {
        dropdownWrappers.forEach(wrapper => {
            if (wrapper !== exceptThisOne) {
                wrapper.classList.remove("active");
            }
        });
    }

    // Handle click on dropdown buttons
    dropdownBtns.forEach((btn, index) => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation(); // Prevent this click from reaching document
            const currentWrapper = dropdownWrappers[index];
            const isOpen = currentWrapper.classList.contains("active");
            
            closeAllDropdowns(isOpen ? null : currentWrapper);
            currentWrapper.classList.toggle("active", !isOpen);
        });
    });

    // Close dropdowns when clicking anywhere else
    document.addEventListener("click", function() {
        closeAllDropdowns();
    });

    // Prevent dropdown from closing when clicking inside it
    dropdownWrappers.forEach(wrapper => {
        wrapper.addEventListener("click", (e) => {
            e.stopPropagation();
        });
    });
});

const searchIcon = document.getElementById("searchIcon");
const crossIcon = document.getElementById("crossIcon")
const searchContainer = document.getElementById("searchContainer");

searchIcon.addEventListener('click', () =>{
    searchContainer.classList.add("active");
});
crossIcon.addEventListener('click', () =>{
    searchContainer.classList.remove('active');
});


//UGHHHHHHHHHHH SEARCHBOXXXXXXXXXX
//UGHHHHH NAVBARRRRR
// const dropdownBtn = document.querySelectorAll(".dropdown-button");
// const displaywrapper = document.querySelectorAll(".dropdown-wrapper");


// dropdownBtn.forEach((item, index) => item.addEventListener("click", () => {
//     displaywrapper[index].classList.toggle("active");
// }))



// const dropdownBtn = document.querySelectorAll(".dropdown-button");
// const displaywrapper = document.querySelectorAll(".dropdown-wrapper");

// dropdownBtn.forEach((item, index) => {
//     item.addEventListener("click", (event) => {
//         event.stopPropagation();
//         const isActive = displaywrapper[index].classList.contains("active");
//         displaywrapper.forEach(wrapper => {
//             wrapper.classList.remove("active");
//             wrapper.setAttribute("aria-hidden", "true");
//         });
//         dropdownBtn.forEach(btn => {
//             btn.classList.remove("active");
//             btn.setAttribute("aria-expanded", "false");
//         });
//         displaywrapper[index].classList.toggle("active");
//         displaywrapper[index].setAttribute("aria-hidden", !isActive);
//         item.classList.toggle("active");
//         item.setAttribute("aria-expanded", !isActive);
//     });

//     item.addEventListener("keydown", (event) => {
//         if (event.key === "Enter" || event.key === " ") {
//             event.preventDefault();
//             event.stopPropagation();
//             const isActive = displaywrapper[index].classList.contains("active");
//             displaywrapper.forEach(wrapper => {
//                 wrapper.classList.remove("active");
//                 wrapper.setAttribute("aria-hidden", "true");
//             });
//             dropdownBtn.forEach(btn => {
//                 btn.classList.remove("active");
//                 btn.setAttribute("aria-expanded", "false");
//             });
//             displaywrapper[index].classList.toggle("active");
//             displaywrapper[index].setAttribute("aria-hidden", !isActive);
//             item.classList.toggle("active");
//             item.setAttribute("aria-expanded", !isActive);
//         }
//     });
// });

// document.addEventListener("click", () => {
//     displaywrapper.forEach(wrapper => {
//         wrapper.classList.remove("active");
//         wrapper.setAttribute("aria-hidden", "true");
//     });
//     dropdownBtn.forEach(btn => {
//         btn.classList.remove("active");
//         btn.setAttribute("aria-expanded", "false");
//     });
// });
/* FAQ Accordion */
document.addEventListener('DOMContentLoaded', function() {
    var acc = document.getElementsByClassName('accordion');
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener('click', function() {
            this.classList.toggle('active');
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                this.querySelector('.plus-icon').innerText = '+';
            } else {
                panel.style.maxHeight = panel.scrollHeight + 'px';
                this.querySelector('.plus-icon').innerText = '-';
            } 
        });
    }
});


/* ITINERARY SCROLL */
document.addEventListener("DOMContentLoaded", function () {
    const itineraryContainer = document.querySelector(".itinerary-container");
    const prevBtn = document.querySelector(".nav-btn.prev");
    const nextBtn = document.querySelector(".nav-btn.next");

    if (itineraryContainer && prevBtn && nextBtn) {
        prevBtn.addEventListener("click", () => {
            const scrollAmount = 680; // Card width (650) + gap (30)
            itineraryContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        });

        nextBtn.addEventListener("click", () => {
            const scrollAmount = 680; // Card width (650) + gap (30)
            itineraryContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    }
});

/* LEAVE NO TRACE PRINCIPLES CAROUSEL */
document.addEventListener("DOMContentLoaded", function () {
    const carouselContainer = document.querySelector(".lnt-principles .principles-carousel-container");
    if (!carouselContainer) return;

    const prevBtn = carouselContainer.querySelector(".carousel-nav.prev");
    const nextBtn = carouselContainer.querySelector(".carousel-nav.next");
    const cards = carouselContainer.querySelectorAll(".principles-grid .principle-card");

    if (!prevBtn || !nextBtn || cards.length < 2) return;

    const carouselItems = [
        {
            image: "./IMAGES/leaveNoTrace/caraousel/1.png",
            alt: "Mountain trail at sunrise",
            title: "1. Walk with Intention",
            description: "Plan your route, carry essentials, and trek with care for every ecosystem you cross."
        },
        {
            image: "./IMAGES/leaveNoTrace/caraousel/2.png",
            alt: "Forest pathway",
            title: "2. Stay on the Path",
            description: "Use marked trails and durable surfaces to protect fragile plants and living soil."
        },
        {
            image: "./IMAGES/leaveNoTrace/caraousel/3.png",
            alt: "Hikers carrying reusable gear",
            title: "3. Pack In, Pack Out",
            description: "Carry all waste back with you and leave every campsite cleaner than you found it."
        },
        {
            image: "./IMAGES/leaveNoTrace/caraousel/4.png",
            alt: "Camper near low-impact setup",
            title: "4. Keep Fires Minimal",
            description: "Prefer a stove when possible, and use established fire rings only where allowed."
        },
        {
            image: "./IMAGES/leaveNoTrace/caraousel/5.png",
            alt: "Wildlife in natural habitat",
            title: "5. Respect Wildlife",
            description: "Observe from a distance, avoid feeding animals, and protect their natural behavior."
        },
        {
            image: "./IMAGES/leaveNoTrace/caraousel/6.png",
            alt: "Group of trekkers on mountain ridge",
            title: "6. Share the Trail",
            description: "Be courteous to fellow trekkers, yield when needed, and keep noise levels low."
        },
        {
            image: "./IMAGES/leaveNoTrace/caraousel/7.png",
            alt: "Hands planting in healthy soil",
            title: "7. Protect What You Love",
            description: "Leave natural objects where they are and support local conservation wherever you travel."
        }
    ];

    let startIndex = 0;

    function setCardData(card, item) {
        const image = card.querySelector("img");
        const title = card.querySelector(".principle-info h3");
        const description = card.querySelector(".principle-info p");

        if (!image || !title || !description) return;

        image.src = item.image;
        image.alt = item.alt;
        title.textContent = item.title;
        description.textContent = item.description;
    }

    function renderCarousel() {
        const firstItem = carouselItems[startIndex % carouselItems.length];
        const secondItem = carouselItems[(startIndex + 1) % carouselItems.length];

        setCardData(cards[0], firstItem);
        setCardData(cards[1], secondItem);
    }

    prevBtn.addEventListener("click", function () {
        startIndex = (startIndex - 1 + carouselItems.length) % carouselItems.length;
        renderCarousel();
    });

    nextBtn.addEventListener("click", function () {
        startIndex = (startIndex + 1) % carouselItems.length;
        renderCarousel();
    });

    renderCarousel();
});

