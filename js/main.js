// favours part starts here
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:8,
    nav:false,
    autoplay:true,
    dots:false,
    arrows:false,
    responsive:{
        // 0:{
        //     items:1,
        //     nav:false,
        // },
        250:{
            items:1,
            nav:false,
        },
        750:{
            items:3,
            nav:false,
        },
        1000:{
            items:3,
            nav:false,
        }
    }
})

const openMenu = document.querySelector('.open')
const closeMenu = document.querySelector('.close')
const Menu = document.querySelector('.navLinks')

openMenu.addEventListener('click', function(){
    Menu.style.top = "30%"
    closeMenu.style.display = "block"
    openMenu.style.display = "none"
})

closeMenu.addEventListener('click', function(){
    Menu.style.top = "-30%"
    openMenu.style.display = "block"
    closeMenu.style.display = "none"
})