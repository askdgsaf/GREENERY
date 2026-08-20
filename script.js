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

/* HERO CAROUSEL */
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector("[data-hero-carousel]");

    if (!carousel) {
        return;
    }

    const slides = Array.from(carousel.querySelectorAll(".hero-carousel__slide"));
    const previousButton = carousel.querySelector(".hero-carousel__control--prev");
    const nextButton = carousel.querySelector(".hero-carousel__control--next");
    const dots = Array.from(carousel.querySelectorAll(".hero-carousel__dot"));
    const autoplayDelay = 3000;

    let activeSlideIndex = 0;
    let autoplayTimer = null;

    function renderSlide(targetIndex) {
        activeSlideIndex = (targetIndex + slides.length) % slides.length;

        slides.forEach((slide, index) => {
            const isActive = index === activeSlideIndex;
            slide.classList.toggle("is-active", isActive);
            slide.setAttribute("aria-hidden", isActive ? "false" : "true");
        });

        dots.forEach((dot, index) => {
            const isActive = index === activeSlideIndex;
            dot.classList.toggle("is-active", isActive);
            dot.setAttribute("aria-pressed", isActive ? "true" : "false");
        });
    }

    function restartAutoplay() {
        clearInterval(autoplayTimer);
        autoplayTimer = setInterval(() => {
            renderSlide(activeSlideIndex + 1);
        }, autoplayDelay);
    }

    previousButton.addEventListener("click", function () {
        renderSlide(activeSlideIndex - 1);
        restartAutoplay();
    });

    nextButton.addEventListener("click", function () {
        renderSlide(activeSlideIndex + 1);
        restartAutoplay();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener("click", function () {
            renderSlide(index);
            restartAutoplay();
        });
    });

    renderSlide(0);
    restartAutoplay();
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

/* CARBON FOOTPRINT CALCULATOR */
document.addEventListener("DOMContentLoaded", function () {
    const calcPage = document.querySelector(".carbon-calc-page");
    if (!calcPage) return;

    const tabButtons = calcPage.querySelectorAll(".calc-tab");
    const panels = calcPage.querySelectorAll(".calc-panel");
    const resultValue = calcPage.querySelector(".calc-result-value");
    const resultDetail = calcPage.querySelector(".calc-result-detail");

    const transportFactors = {
        car: 0.192,
        bus: 0.105,
        train: 0.041,
        flight_short: 0.255,
        flight_long: 0.195,
        motorbike: 0.103
    };

    const fuelMultipliers = {
        petrol: 1,
        diesel: 1.1,
        hybrid: 0.7,
        electric: 0.2
    };

    const dietFactors = {
        omnivore: 2.5,
        vegetarian: 1.7,
        vegan: 1.2
    };

    const wasteMultipliers = {
        low: 1,
        medium: 1.2,
        high: 1.4
    };

    const stayFactors = {
        hotel: 15,
        hostel: 6,
        eco: 8,
        camping: 1.5
    };

    function formatLabel(value) {
        return value.replace(/_/g, " ");
    }

    function formatKg(value) {
        return value.toFixed(2) + " kg CO2e";
    }

    function getPositiveNumber(input) {
        const value = parseFloat(input.value);
        if (Number.isNaN(value) || value <= 0) {
            return null;
        }
        return value;
    }

    function getNonNegativeNumber(input) {
        const value = parseFloat(input.value);
        if (Number.isNaN(value) || value < 0) {
            return null;
        }
        return value;
    }

    function setResult(total, detail) {
        resultValue.textContent = formatKg(total);
        resultDetail.textContent = detail;
    }

    function setActiveTab(target) {
        tabButtons.forEach((button) => {
            const isActive = button.dataset.target === target;
            button.classList.toggle("active", isActive);
            button.setAttribute("aria-selected", isActive ? "true" : "false");
        });

        panels.forEach((panel) => {
            const isActive = panel.id === "calc-" + target;
            panel.classList.toggle("active", isActive);
        });
    }

    tabButtons.forEach((button) => {
        button.addEventListener("click", function () {
            setActiveTab(button.dataset.target);
        });
    });

    panels.forEach((panel) => {
        const submitButton = panel.querySelector(".calc-submit");
        if (!submitButton) return;

        submitButton.addEventListener("click", function () {
            const type = panel.dataset.type;
            let total = null;
            let detail = "Enter valid numbers to calculate.";

            if (type === "transport") {
                const distanceInput = panel.querySelector("[name='travel-distance']");
                const distance = getPositiveNumber(distanceInput);
                const mode = panel.querySelector("[name='travel-mode']").value;
                const fuel = panel.querySelector("[name='fuel-type']").value;

                if (distance) {
                    let factor = transportFactors[mode] || 0;
                    if (mode === "car") {
                        factor *= fuelMultipliers[fuel] || 1;
                    }
                    total = distance * factor;
                    detail = "Estimate for " + distance.toFixed(1) + " km by " + formatLabel(mode) + ".";
                }
            }

            if (type === "food") {
                const mealInput = panel.querySelector("[name='meal-count']");
                const meals = getPositiveNumber(mealInput);
                const diet = panel.querySelector("[name='diet-type']").value;
                const waste = panel.querySelector("[name='food-waste']").value;

                if (meals) {
                    const factor = (dietFactors[diet] || 0) * (wasteMultipliers[waste] || 1);
                    total = meals * factor;
                    detail = "Estimate for " + meals + " meals per week.";
                }
            }

            if (type === "stay") {
                const nightsInput = panel.querySelector("[name='stay-nights']");
                const nights = getPositiveNumber(nightsInput);
                const stayType = panel.querySelector("[name='stay-type']").value;

                if (nights) {
                    const factor = stayFactors[stayType] || 0;
                    total = nights * factor;
                    detail = "Estimate for " + nights + " night" + (nights === 1 ? "" : "s") + ".";
                }
            }

            if (type === "water") {
                const showersInput = panel.querySelector("[name='showers-week']");
                const minutesInput = panel.querySelector("[name='shower-minutes']");
                const laundryInput = panel.querySelector("[name='laundry-loads']");
                const showers = getPositiveNumber(showersInput);
                const minutes = getPositiveNumber(minutesInput);
                const laundry = getNonNegativeNumber(laundryInput);

                if (showers && minutes && laundry !== null) {
                    total = showers * minutes * 0.25 + laundry * 1.4;
                    detail = "Estimate for weekly showers and laundry.";
                }
            }

            if (total === null) {
                setResult(0, detail);
                return;
            }

            setResult(total, detail);
        });
    });
});

