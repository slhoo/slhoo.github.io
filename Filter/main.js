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