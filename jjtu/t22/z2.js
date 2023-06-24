function num(){
    let cards_num = document.getElementById(`cards_num`).value;
    let cards = document.getElementById(`cards`);
    let c = ``;

    for(i=0;i<cards_num;i++){
        c += `<div class="card">
        <div class="card-body my-2">
          <h5 class="card-title">Card ${i+1}</h5>
        </div>
        </div>`;

    }
    cards.innerHTML = c; 
}
function colt(){
    let cards_text = document.getElementById(`cards_text`).value;
    let cards = document.getElementsByClassName(`card-title`);
    Array.from(cards).map(function(x){
        x.style.color = cards_text;
    })

}  
function colbg(){
    let cards_fon = document.getElementById(`cards_fon`).value;
    let cards = document.getElementsByClassName(`card-body`);
    Array.from(cards).map(function(x){
        x.style.background = cards_fon;
    })

}  
function b1(){
    document.getElementById(`vid`);
    
    
}