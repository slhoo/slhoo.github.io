


function test(){
let ball = 0;
if(document.getElementById(`q1`).value == "з дерева"){
    ball ++
}
if(document.getElementById(`q2`).value == "2004"){
    ball ++
}
if(document.getElementById(`q3`).value == 2){
    ball ++
}
if(document.getElementById(`q4`).value == "1000+"){
    ball ++
}
if(document.getElementById(`q5`).value == "Київ"){
    ball ++
}
if(document.getElementById(`q6`).value == "Варшава"){
    ball ++
}
let p1 = document.getElementById(`p1`);
let p = `<p>Кількість правильних відповідей - ${ball}</p>`;
p1.innerHTML = p;

}
