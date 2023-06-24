let name = document.getElementById(`name_user`);

let im = prompt(`Як вас звати?`);
let posh = prompt(`введіть електрону почту`);
let parol = prompt(`Введіть пароль`);
if(parol == `1111`){
    name.innerHTML = `<a href=""> ${im} </a>`;
    let p = document.getElementById(`priv`);
    p.innerHTML = ` Вітаю, ${im}! На вашу поштову скриньку<br> ${posh} було відправлено лист із підтвердженням `;
}else{
    name.innerHTML = `<a href=""> ${im} </a>`;
    let p = document.getElementById(`priv`);
    p.innerHTML = `На ваш емейл - ${posh} відправлено інструкцію для вфдправлення паролю`;
}
console.log(name);