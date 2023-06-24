let slides = document.querySelector(`.slides`);
let slides_num = document.querySelectorAll(`.slide`);

function slideLeft(){
    if(gm() >= -((slides_num.length - 2) * 500)){
    slides.style.marginLeft = `${gm()-500}px`;
    }
}
function slideRight(){
    if(gm()<0){
    slides.style.marginLeft = `${gm()+500}px`;
    }
}
function gm(){
    return Number(slides.style.marginLeft.replace(`px`,``))
}