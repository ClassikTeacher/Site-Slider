let container = document.querySelector('.container')

let pageSlider = new Swiper ('.page', {
    wrapperClass: 'page__container',
    slideClass: 'page__screen',

    direction:'vertical',

    slidesPerView: 'auto',
    parallax: true,

    keyboard:{
        enabled:true,
        onlyInViewport:true,
        pageUpDown:true,
    },
    mousewheel:{
        sensitivity:1,
    },

    watchOverflow:true,
    speed:700,
    observer:true,
    observeParents:true,
    observerSlideChildren:true,

    pagination:{
        el:'.page__pagination',
        type: 'bullets',
        clickable: true,
        bulletClass: 'page__bullet',
        bulletActiveClass: 'page__bullet_active'
    },

    init:false,
   
    scrollbar: {
        el: '.page__scroll',
        dragClass: 'page__drag-scroll',
        draggable: true,
      },

      on:{
          init: function(){
            menuSlider()
            TypeScroll()
            container.classList.add('_loaded')
          },
          slideChange: function(){
            removeActiveMenuLink ()
            menuLinks[pageSlider.realIndex].classList.add('_active')
          },
          resize: function(){
            TypeScroll()
          },
      },  
})
const aboutBtn = document.querySelectorAll('.text-btn')
const aboutText = document.querySelectorAll('.about')
let menuLinks = document.querySelectorAll('.menu__link')

function menuSlider(){
    
    if(menuLinks.length > 0){
        menuLinks[pageSlider.realIndex].classList.add('_active')
        
        for(let i = 0; i < menuLinks.length; i++){
            const menuLink = menuLinks[i]
            menuLink.addEventListener('click',function (e) {
                e.preventDefault()
                removeActiveMenuLink ()
                pageSlider.slideTo(i, 700)
                menuLink.classList.add('_active')
                
            })
        }
    }
}

function removeActiveMenuLink (){
    for(let i = 0; i < menuLinks.length; i++){
        let activeItem = menuLinks[i]
    //  let activeItem = document.querySelector('.menu__link_active')
    // if(activeItem){
        activeItem.classList.remove('_active')
}
}

function TypeScroll(){

    if(container.classList.contains('_free')){
        container.classList.remove('_free')
        pageSlider.params.freeMode.enabled = false
    }
    for(let i = 0; i < pageSlider.slides.length; i++){
        const page = pageSlider.slides[i];
        const pageContent = page.querySelector('.screen__content')

        if(pageContent){
            const pageContentHeight = pageContent.offsetHeight;
            if(pageContentHeight> window.innerHeight){
                container.classList.add('_free')
                pageSlider.params.freeMode.enabled = true;
                break;
            }
        }
    }
}
pageSlider.init()

function AboutTextSwitch (){
    aboutBtn.forEach((itemBtn)=>{
        itemBtn.addEventListener('click', (e)=>{
          const idBtn = itemBtn.getAttribute("id")
          
        //   const IdAbout = aboutText.getElementById(idBtn)
        aboutText.forEach(item =>{
           
           if (item.id==idBtn){
               console.log('11') 
               item.classList.toggle('_active')
           }
        })
        
        })
    })
}


AboutTextSwitch ()