const navBar = document.querySelector(".navbar")



window.addEventListener("scroll", function () {

    if (this.window.scrollY > 100){
        navBar.classList.add("sticky");
    } 
    else{
        navBar.classList.remove("sticky");
    }
})