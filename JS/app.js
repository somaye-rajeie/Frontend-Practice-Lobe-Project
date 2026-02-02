const menuMobile=document.querySelector('.menu-mobile')
const headerMenuList=document.querySelector('.header-menu')

menuMobile.addEventListener('click',()=>{
    menuMobile.classList.toggle('menu-mobile--active')
    headerMenuList.classList.toggle('header-menu--mobile')
})