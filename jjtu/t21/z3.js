function changeCard(x){
    if(document.getElementById(x).classList.length > 3){
    document.getElementById(x).classList.remove(`bg-red`, `yellow`)
    }else{document.getElementById(x).classList.add(`bg-red`, `yellow`);}
    
}

