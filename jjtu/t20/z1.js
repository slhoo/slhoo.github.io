function register(){
let login = document.getElementById(`login`).value;

let email = document.getElementById(`email`).value;

let pass = document.getElementById(`pass`).value;

let user ={
    login: login,
    email: email,
    pass: pass
}

console.log(user)
localStorage.setItem(`users`,JSON.stringify(user))
}

function chlog(){
    if(document.getElementById(`login`).value.length < 4){
        document.getElementById(`pom`).innerHTML = `занадто короткий логін`;
        setTimeout(function(){
            document.getElementById(`pom`).innerHTML = ``;
        },1000)
    }


}

function chem(){
    if(document.getElementById(`email`).value.length < 6){
        document.getElementById(`pom2`).innerHTML = `занадто короткий імеїл`;
        
    }else(document.getElementById(`pom2`).innerHTML = ``)


}

function chpass(){
    if(document.getElementById(`pass`).value.length < 6){
        document.getElementById(`pom3`).innerHTML = `занадто короткий пароль`;
        
    }else(document.getElementById(`pom3`).innerHTML = ``)


}