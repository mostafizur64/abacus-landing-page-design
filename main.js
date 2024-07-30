const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links')
const menuBtnIcon = menuBtn.querySelector('i');

menuBtn.addEventListener('click', (e) => {
    navLinks.classList.toggle('open');

    const isOpen = navLinks.classList.contains('open');
    menuBtnIcon.setAttribute('class', isOpen ? 'ri-close-line' : 'ri-menu-line');

})

navLinks.addEventListener('click', (e) => {

    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute('class', 'ri-menu-line')
})


// const swiper = new Swiper(".swiper",{
//     slidesPerView:"auto",
//     spaceBetween:20,
//     pagination:{
//         el:".swiper-pagination"
//     }
// })

const swiper = new Swiper('.swiper', {
    // Optional parameters

    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
});