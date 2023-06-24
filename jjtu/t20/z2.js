function ls(){
let user = JSON.parse(localStorage.getItem(`users`));
console.log(user)
    if(document.getElementById(`login`).value == user.login || document.getElementById(`login`).value == user.email && document.getElementById(`pass`).value == user.pass){
        alert(`Вірно`)
    }else(alert(` Не вірно`))
   

}