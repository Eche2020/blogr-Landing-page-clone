const btn = document.getElementById('mobilemenu')
const mobileNav = document.getElementById('mobilenav')

mobileNav.style.left = "-100%";

btn.onclick = function(){
    if (mobileNav.style.left == "-100%") {
        mobileNav.style.left = "50%";
        btn.src = "images/icon-close.svg";
    } else {
        mobileNav.style.left = "-100%";
        btn.src = "images/icon.hamburger.svg";
    }
}