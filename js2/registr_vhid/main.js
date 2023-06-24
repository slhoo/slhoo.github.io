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
let status = 'поля реєстрації'
function changeForm(){
  if(status == 'поля реєстрації'){
  form.innerHTML = `
  <label for="">Пошта</label><br>
  <input type="text" id="email_vhid"><br><br>
  <label for="">Пароль</label><br>
  <input type="text" id="password_vhid"><br><br>
  <button onclick="ema_pass_vhid()">Увійти</button><br><br>
  <button onclick="google_vhid()">Вхід за допомогою гугл</button><br><br>
  <button onclick="changeForm()">У мене ще немає акаунта</button>
  `
  status = 'поля входу'
}else{
  form.innerHTML = `
  <label for="">Ім'я</label><br>
    <input type="text" id="na"><br><br>
    <label for="">Прізвище</label><br>
    <input type="text" id="las"><br><br>
    <label for="">Вік</label><br>
    <input type="text" id="ag"><br><br>
    <label for="">Пошта</label><br>
    <input type="text" id="email"><br><br>
    <label for="">Пароль</label><br>
    <input type="text" id="password"><br><br>
    <button onclick="ema_pass()">Зареєструватись</button><br><br>
    <button onclick="google_vhid()">Вхід за допомогою гугл</button><br><br>
    <button onclick="changeForm()">У мене вже є акаунт</button>
  `
  status = 'поля реєстрації'
}
}

function ema_pass_vhid(){
  firebase.auth().signInWithEmailAndPassword(email_vhid.value, password_vhid.value)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    localStorage.setItem('login',user.uid)
    setTimeout(function(){window.location.href = `spa.html?id=${user.uid}`}, 3000)
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}