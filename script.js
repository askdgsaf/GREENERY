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