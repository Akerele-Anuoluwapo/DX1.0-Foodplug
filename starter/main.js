var hamburgerdiv = document.querySelector(".humburger")
var mobilelinks = document.querySelector(".mobile-links-holder  ")
var mybackdrop = document.querySelector(".backdrop")


// console.log("send ur account")
// var writeup ="i am hungry"
function dosomething(){
    hamburgerdiv.classList.toggle("showburger")
    mobilelinks.classList.toggle("show-mobile-links-holder")
    mybackdrop.classList.toggle("show-backdrop")
}
