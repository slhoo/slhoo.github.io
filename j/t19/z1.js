function vivodtext(){
    let text = document.getElementById(`text`).value;
    localStorage.setItem(`text`,text);
    text2();
}

function text2(){
    let text = localStorage.getItem(`text`);
    let stored_test = document.getElementById(`stored_test`);

    stored_test.innerText = text;
}

function cl(){
    localStorage.clear();
    stored_test.innerText = ``;
}
text2()

function zmina(){
    let zm = localStorage.getItem(`text`);
    document.getElementById(`text`).value = zm;

}