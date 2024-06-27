const imges = document.querySelectorAll(".header-slider ul img");
const prev_btn =document.querySelector('.control-prev');
const next_btn =document.querySelector('.control-next');

let n =1;

function changeSlide() {
    for (let i = 0; i < imges.length; i++) {
        imges[i].style.display ='none'; 
    }
    imges[n].style.display ='block';
}

changeSlide();

prev_btn.addEventListener("click", (e) => {
    if(n > 0) {
        n--;
    }else{
        n= imges.length -1;
    }
    changeSlide();
})
next_btn.addEventListener("click", (e) => {
    if(n < imges.length - 1) {
        n++;
    }else {
        n = 0;
    }
    changeSlide();
})

const scrollContainer = document.querySelectorAll('.products');
for (const item of scrollContainer) {
    item.addEventListener("wheel",(evt) => {
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    });
}