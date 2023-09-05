const carouselItems = document.querySelector('.carousel-items');
const dots = document.querySelectorAll('.dots');
var index = 0;
var dotsIndex = 1;

document.addEventListener("DOMContentLoaded", function(){
     setInterval(() => {
        if(index == 0){
            carouselItems.style.transform = 'translateX(-173px)';
            index++;
        }
        else if(index == 1){
            carouselItems.style.transform = '';
            carouselItems.style.transform = 'translateX(-346px)';
            index++;
        }
        else {
            carouselItems.style.transform = 'translateX(0px)';
            index = 0;
        }
        
        if(dotsIndex == 1){
            dots[dotsIndex].classList.add('active-dot');
            dots[0].classList.remove('active-dot');
            dots[2].classList.remove('active-dot');
            dotsIndex++;
        }
        else if(dotsIndex == 2){
            dots[dotsIndex].classList.add('active-dot');
            dots[0].classList.remove('active-dot');
            dots[1].classList.remove('active-dot');
            dotsIndex++;
        }
        else{
            dots[0].classList.add('active-dot');
            dots[1].classList.remove('active-dot');
            dots[2].classList.remove('active-dot');
            dotsIndex = 0;
        }
     }, 6000);
})

const tab1 = document.querySelector('.mountain-1'); 
const tab2 = document.querySelector('.mountain-2');
const timetab = document.querySelector('.schedule-tab-1');
const timetab2 = document.querySelector('.schedule-tab-2');

tab1.addEventListener('click', function() {
    if(!tab1.classList.contains('.active-tab')){
        tab1.classList.add('active-tab');
        tab2.classList.remove('active-tab');
        if(!timetab.classList.contains('active-card')){
        timetab.classList.add('active-card');
        timetab2.classList.remove('active-card');
        }
    }
})

tab2.addEventListener('click', function() {
    if(!tab2.classList.contains('.active-tab')){
        tab2.classList.add('active-tab');
        tab1.classList.remove('active-tab');
        if(!timetab2.classList.contains('active-card'))
        timetab2.classList.add('active-card');
        timetab.classList.remove('active-card')
    }
})