const slides = document.querySelectorAll('.slide');
console.log(slides);
const btnLeft = document.querySelector('.slider__btn--left')
const btnRight = document.querySelector('.slider__btn--right')
const slider = document.querySelector('.slider');

slides.forEach((s, i)=> {
    s.style.transform =`translateX(${100*i}%)`
})

// slider.style.transform = 'scale(1)'
let curSlide = 0
const maxsSlide = slides.length;

btnRight.addEventListener('click', function(){
    if(curSlide === maxsSlide-1){
        curSlide=0;
    } else {
        curSlide++
    }
    slides.forEach((s, i)=> {
        s.style.transform =`translateX(${100*(i-curSlide)}%)`
    })
});
const prevSlide = function(){
    if(curSlide===0){
        curSlide=maxsSlide-1
    } else curSlide--;
    
    slides.forEach((s, i)=> {
        s.style.transform =`translateX(${100*(i-curSlide)}%)`
    })
    
}
btnLeft.addEventListener('click', prevSlide)

// slides.forEach((s, i)=> {
//     s.style.transform =`translateX(${100*(i-curSlide)}%)`
// })