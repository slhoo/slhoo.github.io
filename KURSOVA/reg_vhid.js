var provider = new firebase.auth.GoogleAuthProvider();
function google_vhid(){
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    var user = result.user;
    console.log(result)
    console.log(user)
    const randomPassword = generateRandomPassword();
    create_user(user.uid, user.displayName, user.email, randomPassword)
    localStorage.setItem('login',user.uid)
    setTimeout(function(){window.location.href = `spa.html?id=${user.uid}#/main`}, 1000)
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    console.log(errorCode)
    console.log(errorMessage)
    console.log(email)
  });
}
function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomPassword = '';
  for (let i = 0; i < 8; i++) {
    randomPassword += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return randomPassword;
}
function ema_pass(){
    
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    var user = userCredential.user;
    console.log(userCredential)
    console.log(user)
    create_user(user.uid, nik.value, email.value, password.value)
    localStorage.setItem('login',user.uid)
    setTimeout(function(){window.location.href = `spa.html?id=${user.uid}#/main`}, 1000)
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode)
    console.log(errorMessage)
   
  });
  
}
function create(uid, displayName, email, password) {
  const userRef = db.collection('users_kursova').doc(uid);
  userRef.set({
    displayName: displayName,
    email: email,
    password: password
  })
    .then(() => {
      console.log('Користувач успішно доданий у базу даних.');
    })
    .catch((error) => {
      console.error('Помилка додавання користувача у базу даних: ', error);
    });
}
function create_user(id, na, em, passw){
    let user = {
        name: na,
        email: em,
        password: passw
    }
    db.collection('users_kursova').doc(id).set(user).then(res => (
        console.log('успіх')
    ))
}

// function check_user(){
//   let check = localStorage.getItem('login')
//   if(check != null){
//     window.location.href = `spa.html?id=${check}`
//   }
// }
// check_user()

var status = "Реєстрація"
const form = document.getElementById("signup-box");
function changeForm(){
    if(status == "Реєстрація"){
      form.innerHTML = `
      <h2>Вхід</h2>
        <div class="user-box">
            <label for="">Пошта</label><br>
            <input type="text" id="email_vhid"><br><br>
        </div>
        <div class="user-box">
            <label for="">Пароль</label><br>
            <input type="password" id="password_vhid"><br><br>
        </div>
        <div class="user-button3">
            <button onclick="ema_pass_vhid()" id="loginButton">Увійти</button><br><br>    
            <button onclick="changeForm()">У мене немає акаунта</button><br><br>
        </div>
        <div class="user-button2">
        <button onclick="google_vhid()" id="AuthButton">Вхід за допомогою гугл</button>
        <button onclick="showLoginForm()" id="vhid_admin">Увійти в акаунт адміністратора</button>
    </div>  
        <div id="login-form">
            <div style="display: flex; justify-content: center;">
                <div style="margin-left: 15px; margin-top: 5px;">
                    <label for="password">Введіть пароль адміністратора:</label>
                    <input type="password" id="password_admin" required>
                    <button onclick="checkCredentials()">Увійти</button>
                </div>
                <div>
                    <img src="https://cdn3.iconfinder.com/data/icons/user-interface-169/32/cross-256.png" style="width: 20px; height: 20px; background-color: aliceblue; border-radius: 50%; cursor: pointer;" onclick="CloseLoginAdmin()">
                </div>
            </div>
        </div>
        `;
        status = "Вхід"
    }else{
      form.innerHTML = `
      <h2>Реєстрація</h2>
      <div class="user-box">
          <label for="">Ім'я</label><br>
          <input type="text" id="nik"><br><br>
      </div>
      <div class="user-box">
          <label for="">Пошта</label><br>
          <input type="text" id="email"><br><br>
      </div>
      <div class="user-box">
          <label for="">Пароль</label><br>
          <input type="password" id="password"><br><br>
      </div>
      <div class="user-button">
          <button onclick="ema_pass()" id="registerButton">Зареєструватись</button><br><br>    
          <button onclick="changeForm()">У мене вже є акаунт</button><br><br>
      </div>
      <div class="user-button2">
      <button onclick="google_vhid()" id="AuthButton">Вхід за допомогою гугл</button>
      <button onclick="showLoginForm()" id="vhid_admin">Увійти в акаунт адміністратора</button>
  </div>
  <div id="login-form">
  <div style="display: flex; justify-content: center;">
      <div style="margin-left: 15px; margin-top: 5px;">
          <label for="password">Введіть пароль адміністратора:</label>
          <input type="password" id="password_admin" required>
          <button onclick="checkCredentials()">Увійти</button>
      </div>
      <div>
          <img src="https://cdn3.iconfinder.com/data/icons/user-interface-169/32/cross-256.png" style="width: 20px; height: 20px; background-color: aliceblue; border-radius: 50%; cursor: pointer;" onclick="CloseLoginAdmin()">
      </div>
  </div>
</div>
        `
        status = "Реєстрація"
    }
}

function ema_pass_vhid(){
  firebase.auth().signInWithEmailAndPassword(email_vhid.value, password_vhid.value)
  .then((userCredential) => {
    var user = userCredential.user;
    localStorage.setItem('login',user.uid)
    setTimeout(function(){window.location.href = `spa.html?id=${user.uid}#/main`}, 1000)
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode)
    console.log(errorMessage)
    document.getElementById('notification').style.display = 'block';
    
  });
}
function CloseNote(){
  document.getElementById('notification').style.display = 'none';
}
function showLoginForm(){
  const loginForm = document.getElementById('login-form');
  loginForm.style.display = 'block';
}
function CloseLoginAdmin(){
  const loginForm = document.getElementById('login-form');
  loginForm.style.display = 'none';
}

let password_ad = 10021410;
function checkCredentials(){
    let passwordInput = document.getElementById('password_admin').value;
    if (passwordInput == password_ad) {
      window.location.href = 'admin.html'
    } else {
      alert('Невірний пароль');
    }
}
