let user = {
    im:`Саша`,
    pr:`Горенко`,
    vik: 14,
    email:`s@gmail.com`,
    misto:`Хмельницький`
}
let table = document.getElementById(`table`);
function showUser(){
   table.innerHTML = (`<tr><td>${user.im}</td><td>${user.pr}</td><td>${user.vik}</td><td>${user.email}</td><td>${user.misto}</td></tr>`);
}
showUser();
function changeName(x){
    user.im = x;
    showUser();
}
function changeLastName(y){
    user.pr = y;
    showUser();
}
function changeAge(a){
    user.vik = a;
    showUser();
}
function changeEmail(b){
    user.email = b;
    showUser();
}
function changeCity(c){
    user.misto = c;
    showUser();
}

function changeUserData(x, y, a, b, c){
    user.im = x;
    user.pr = y;
    user.vik = a;
    user.email = b;
    user.misto = c;
    showUser();
}