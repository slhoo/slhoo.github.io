function reg(){
    let name = document.getElementById(`name`).value;

    let email = document.getElementById(`email`).value;

    let password = document.getElementById(`password`).value;

    let users = {
        name: name,
        email: email,
        password: password
    }
    localStorage.setItem(`regis`, JSON.stringify(users));

    console.log(users);
     if(document.getElementById(`name`).value.lenght < 3 || document.getElementById(`email`).value.lenght < 6 || document.getElementById(`password`).value.length < 8){
    document.getElementById(`message`).innerHTML = `<div class="alert alert-danger col-6">Помилка</div>`

    }else(document.getElementById(`message`).innerHTML = `<div class="alert alert-success col-6">Успіх</div>`)
}
