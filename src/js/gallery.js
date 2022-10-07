function changeBg(){
    var navbar = document.getElementById('nav-bar');
    var scrollValue = window.scrollY;
    console.log(scrollValue);
    if(scrollValue > 700 && scrollValue < 1405){
        navbar.classList.add('no-opacity');
        navbar.classList.remove('no-opacity-2');
    }else if(scrollValue > 1405 && !(scrollValue <= 1405)){
        navbar.classList.add('no-opacity-2');
        navbar.classList.remove('no-opacity');
    }
    else{
        navbar.classList.remove('no-opacity');
        navbar.classList.remove('no-opacity-2');
    }
}
window.addEventListener('scroll', changeBg);