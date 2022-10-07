function changeBg(){
    var navbar = document.getElementById('nav-bar');
    var scrollValue = window.scrollY;
    console.log(scrollValue);
    if(scrollValue >= 0 && scrollValue < 645){
        navbar.classList.add('no-opacity');
        navbar.classList.remove('no-opacity-2');
    }else if(scrollValue > 645 && !(scrollValue <= 645)){
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
    var bottom = document.getElementById('gallery-bottom');
    var scrollValue = window.scrollY;
    if(scrollValue > 645 && !(scrollValue <= 645) && !(scrollValue > 1274 )){
        position.classList.add('fixed-effect');
        invisible.classList.add('gallery-is-visible');
        position.classList.remove('gallery-is-bottom');
    }else if(scrollValue > 1274 && !(scrollValue <= 1274)){
        position.classList.add('gallery-is-bottom');
        position.classList.remove('fixed-effect');
        invisible.classList.remove('gallery-is-visible');
    }else{
        position.classList.remove('fixed-effect');
        invisible.classList.remove('gallery-is-visible');
    }
}

window.addEventListener('scroll', changeBg);
window.addEventListener('scroll', changePosition);