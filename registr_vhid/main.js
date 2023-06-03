var provider = new firebase.auth.GoogleAuthProvider();
function google_vhid(){
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    var user = result.user;
    console.log(result)
    console.log(user)
    create_user(user.uid,'','','')
    localStorage.setItem('login',user.uid)
    setTimeout(function(){window.location.href = `spa.html?id=${user.uid}`}, 3000)
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
  });
}
function ema_pass(){
    
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    var user = userCredential.user;
    console.log(userCredential)
    console.log(user)
    create_user(user.uid, na.value, las.value, ag.value)
    localStorage.setItem('login',user.uid)
    setTimeout(function(){window.location.href = `spa.html?id=${user.uid}`}, 3000)
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode)
    console.log(errorMessage)
   
  });
  
}
function create_user(id, na, las, ag){
    let user = {
        name: na,
        lastname: las,
        age: ag
    }
    db.collection('reg_test').doc(id).set(user).then(res => (
        console.log('успіх')
    ))
}

function check_user(){
  let check = localStorage.getItem('login')
  if(check != null){
    window.location.href = `spa.html?id=${check}`
  }
}
check_user()