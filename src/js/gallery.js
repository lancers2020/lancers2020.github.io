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
function changePosition(){
    var position = document.getElementById('gallery-left');
    var invisible = document.getElementById('gallery-invisible');
    var scrollValue = window.scrollY;
    if(scrollValue > 1405 && !(scrollValue <= 1405) && !(scrollValue > 2024 )){
        position.classList.add('fixed-effect');
        invisible.classList.add('gallery-is-visible');
        invisible.classList.remove('gallery-is-bottom');
    }else if(scrollValue > 2024){
        invisible.classList.add('gallery-is-bottom');
    }else{
        position.classList.remove('fixed-effect');
        invisible.classList.remove('gallery-is-visible');
        invisible.classList.remove('gallery-is-bottom');
    }
}

window.addEventListener('scroll', changeBg);
window.addEventListener('scroll', changePosition);