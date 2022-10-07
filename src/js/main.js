function changeBg(){
    var navbar = document.getElementById('nav-bar');
    var scrollValue = window.scrollY;
    console.log(scrollValue);
    if(scrollValue > 700){
        navbar.classList.add('no-opacity');
    }else{
        navbar.classList.remove('no-opacity');
    }
}
window.addEventListener('scroll', changeBg);