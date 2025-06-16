const dropdownBtn = document.querySelectorAll(".dropdown-button");
const displaywrapper = document.querySelectorAll(".dropdown-wrapper");
// console.log(dropdown)
//console.log(displaywrapper)

dropdownBtn.forEach((item,index) => item.addEventListener("click",()=>{
    displaywrapper[index].classList.toggle("active");
    
}))