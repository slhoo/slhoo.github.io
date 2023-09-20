const firebaseConfig = {
    apiKey: "AIzaSyCEn-vQTAJB-8DqRL6zHxVONLTGlVfoD9s",
    authDomain: "qwer-5258b.firebaseapp.com",
    projectId: "qwer-5258b",
    storageBucket: "qwer-5258b.appspot.com",
    messagingSenderId: "564260437374",
    appId: "1:564260437374:web:09a90137fa0b155c71472f"
  };

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

let all_tovars = [];
function GetTovars(){
    db.collection('products').get().then(res => 
        res.forEach(doc =>{
            let obj = doc.data();
            obj.id = doc.id;
            all_tovars.push(obj)
        })    
    )
    console.log(all_tovars)
}
function Filter(){
    let nph = all_tovars.slice();
    if(min_price.value.length > 0){
        nph = nph.filter(function(phone){
            return min_price.value <= phone.price
        })
    }
    if(max_price.value.length > 0){
        nph = nph.filter(function(phone){
            return max_price.value >= phone.price 
        })
    }
    console.log(nph)
}


let vsi_tovari=[]
function drawTovars(){
    let tovari = document.getElementById('tovari');
    tovari.innerHTML = ''
    db.collection('products').get().then(res => {
        res.forEach(doc  =>{
            let tovar = doc.data();
            tovar.id = doc.id;
            tovar.count = 1;
            vsi_tovari.push(tovar)
            tovari.innerHTML += `
        <div class="tovar">
            <p>Назва: ${tovar.name}</p>
            <p>Картинка:${tovar.img}</p>
            <p>Діагональ:${tovar.display}</p>
            <p>Акумулятор:${tovar.accumulyator}</p>
            <p>Ціна: ${tovar.price}</p>
            <button onclick="saveLocal(${vsi_tovari.length-1})">Купити</button>
        </div>
            `
           
        })
    })
}
drawTovars()


function saveLocal(index){
    let loc_tovars = getLocal();
 
    let tovar = loc_tovars.findIndex(car => car.id === vsi_tovari[index].id);
     
    if(tovar === -1){
        loc_tovars.push(vsi_tovari[index])
    }else{
        loc_tovars[tovar].count++
    }
   
    console.log(tovar)


   
    localStorage.setItem('prod', JSON.stringify(loc_tovars))
   
}


function getLocal(){
   let prod =  JSON.parse(localStorage.getItem('prod'));
    if(prod === null){
        return []
    }else{
        return prod
    }


}
