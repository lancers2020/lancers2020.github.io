function changeBg(){
    var navbar = document.getElementById('about-nav-bar');
    var scrollValue = window.scrollY;
    console.log(scrollValue);
    if(scrollValue > 80){
        navbar.classList.add('no-opacity');
    }else{
        navbar.classList.remove('no-opacity');
    }
}
window.addEventListener('scroll', changeBg);