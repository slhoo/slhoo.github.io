function color_p(){
    let clp = document.getElementById(`card_color`).value;
    let num = document.getElementById(`card_num`).value;
    let bg = document.getElementById(`card_bg`).value;
    document.getElementById(`card_${num}`).setAttribute(`style`, `color:${clp}; background:${bg};`);
}