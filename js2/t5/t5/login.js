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
let users = [];
db.collection('user_test').get().then(function(res){
    res.forEach(function(doc){
        let user = doc.data();
        user.id = doc.id;
        users.push(user);
        users.push(doc.data())
    });
})
console.log(users)
function check(){
    let email = document.getElementById('email').value;
    let password =  document.getElementById('password').value;
    for(i=0; i<users.length;i++){
        if(users[i].email == email){
           if( users[i].password == password){
            localStorage.setItem('sign_in', JSON.stringify(users[i]))
           }
        }
    }
}