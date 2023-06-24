function zagol(){
    let test = document.getElementById(`test`).value;
    let zag = document.getElementById(`zag`);
    let zagolov = ``;

    for(i=0;i<test;i++){
        zagolov += `<h1 class="a">Заголовок${i+1}</h1>`;

    }
    zag.innerHTML = zagolov;
}

function col(){
    let color = document.getElementById(`color`).value;
    let zagolovki = document.getElementsByClassName(`a`);
    Array.from(zagolovki).map(function(x){
        x.style.color = color;
    })
    console.log(zagolovki);
}  