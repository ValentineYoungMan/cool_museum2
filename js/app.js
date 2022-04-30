function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('.ibg-img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('.ibg-img').getAttribute('src') + ')';
        }
    }
}

ibg();




//menu burger
const iconMenu = document.querySelector('.menu-icon');
const section1NavUl = document.querySelector('.section1-top-nav');
const section1 = document.querySelector('.section1');
const section1Background = document.querySelector('.section1-background');
if (iconMenu) {
    
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active');
        section1NavUl.classList.toggle('_active');
        //section1.classList.toggle('_active');
        section1Background.classList.toggle('_active');
    });
}

//dynamic adaptive

function dynamicAdaptive() {
    
        const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        if (viewport_width < 767) {
            if (!section1HeaderContainer.classList.contains('done') && !section1HeaderContainer.classList.contains('invisible')) {
                section1HeaderContainer.classList.add('_invisible');
                section1TopNav.insertBefore(section1HeaderContainer, section1TopNav.children[2]);
                section1HeaderContainer.classList.add('done');
                
                setTimeout(function f1(){
                    section1HeaderContainer.classList.remove('_invisible');
                }, 100)
            }
        } else {
            if (section1HeaderContainer.classList.contains('done')) {
                section1Header.insertBefore(section1HeaderContainer, section1Header.children[2]);
                section1HeaderContainer.classList.remove('done');
            }
        }    
    }



//const section1NavUl = document.querySelector('.section1-top-nav');
//const section1 = document.querySelector('.section1');
const section1Header = document.querySelector('.section1-header');// parent original
const section1HeaderContainer = document.querySelector('.section1-header-container'); //item
const section1TopNav = document.querySelector('.section1-top-nav');//parent next

window.addEventListener('resize', dynamicAdaptive);
window.addEventListener('load', dynamicAdaptive);

/*----------------------------------------------------------*/

//tabs

let section3TabContainerActive = document.querySelector('.section3-tab-container-active');

document.querySelectorAll('.section3-tab-name').forEach((item) => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const id = e.target.getAttribute('data-identyficator');
        //console.log(id)
        const tabContainerActive = document.querySelector('.section3-tab-container[data-identyficator=' + id +']').getAttribute('data-transform');
        //console.log(tabContainerActive)
        let number = document.querySelector('.section3-tab-container[data-identyficator=' + id +']').querySelector('span').innerHTML;
       // console.log(number);
        section3TabContainerActive.style.left = tabContainerActive+'%';
        section3TabContainerActive.querySelector('.section3-tab-point-active').innerHTML = `<span>${number}</span>`

        document.querySelectorAll('.section3-tab-name').forEach(
            (child) => child.classList.remove('_name-active')
        );
        document.querySelectorAll('.section3-center-info').forEach(
            (child) => child.classList.remove('_info-active')
        );

        item.classList.add('_name-active');
        document.getElementById(id).classList.add('_info-active')
       // console.log(getComputedStyle(document.querySelector('.section3-center-info._info-active')).height)
    })
})

document.querySelector('[data-identyficator=index1]').click();

//console.log(getComputedStyle(document.querySelector('.section3-center-info._info-active')).height)

/*------------------------------------------------*/

new Swiper('.section5-slider', {

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    
    thumbs: {

        swiper: {
            el: '.section5-minislider',
            slidesPerView: 1,
            loop: true,
            spaceBetween: 20,
            //centeredSlides: false,
            // breakpoints: {
            //     1: {    
            //         slidesPerView: 0,
                   
            //     },
            //     767: {
            //         slidesPerView: 1,
            //     }
            // }
        },
        
    }
})

//dynamic adaptive 2

const section5MinsliderPlace = document.querySelector('.section5-minslider-place');// parent original
const section5MiniswiperNavigation = document.querySelector('.section5-miniswiper-navigation'); //item
const section5Slider = document.querySelector('.section5-slider');//parent next

function dynamicAdaptive2() {
    
    const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (viewport_width < 767) {
        if (!section5MiniswiperNavigation.classList.contains('done')) {
            section5Slider.insertBefore(section5MiniswiperNavigation, section5Slider.children[2]);
            section5MiniswiperNavigation.classList.add('done');
            
        }
    } else {
        if (section5MiniswiperNavigation.classList.contains('done')) {
            section5MinsliderPlace.insertBefore(section5MiniswiperNavigation, section5MinsliderPlace.children[2]);
            section5MiniswiperNavigation.classList.remove('done');
        }
    }    
}

window.addEventListener('resize', dynamicAdaptive2);
window.addEventListener('load', dynamicAdaptive2);

/*----------------------------------------------------------------------*/

let section6AcordionItem = document.querySelectorAll('.section6-acordion-item');

section6AcordionItem.forEach(spoiler => {
    spoiler.querySelector('.section6-acordion-title').addEventListener('click', (e) => {
        let item = e.target;
        let thisSection6AcordionTitleText = item.closest('.section6-acordion-item').querySelector('.section6-acordion-titleText');
        let thisSection6AcordionText = item.closest('.section6-acordion-item').querySelector('.section6-acordion-text');
        //let thisSection6AcordionArrow = item.closest('.section6-acordion-item').querySelector('.section6-acordion-arrow');
        if (thisSection6AcordionText.closest('.active') && thisSection6AcordionTitleText.closest('.active')) {
            slideUp(thisSection6AcordionText);
            thisSection6AcordionTitleText.classList.remove('active');
        } else {
            if (document.querySelector('.acordion1').closest('.one')){
                for (let i = 0; i < section6AcordionItem.length; i++){
                    section6AcordionItem[i].querySelector('.section6-acordion-titleText').classList.remove('active');
                    slideUp(section6AcordionItem[i].querySelector('.section6-acordion-text'));
                }
                
            }
            slideDown(thisSection6AcordionText);
            thisSection6AcordionTitleText.classList.add('active');
        }

    })
})

function slideUp(target) {
    target.style.height = '0px';
    target.classList.remove('active');
    target.closest('.section6-acordion-item').classList.remove('active');
    
}

function slideDown(target) {
    target.style.height = target.scrollHeight + 'px';
    target.classList.add('active');
    target.closest('.section6-acordion-item').classList.add('active');
}
/*---------------------------------------------------*/

const anchors = document.querySelectorAll('.section1-nav-a[href]')
console.log(anchors)

for (let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const sectionId = anchor.getAttribute('href')
        document.querySelector('' + sectionId).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}
