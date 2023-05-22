// este es para los semilleros submenu
const navSemilleros = document.querySelector('.semilleros');
const subnavBar = document.querySelector('.desplegable1');

navSemilleros.addEventListener('click', toggleSubNav);
const listenoutside = [navSemilleros]
addEventListener('click',(event) => {
    if(!listenoutside.includes(event.target) &&  !subnavBar.classList.contains('inactive')){
        toggleSubNav(event.target);
    }
})

function toggleSubNav(){
    subnavBar.classList.toggle('inactive');
}