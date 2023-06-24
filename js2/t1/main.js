let users = [];
db.collection("users").get().then(function(responce){
    responce.forEach(function(doc){
        users.push(doc.data())
        
    })
})
console.log(users)

function a(){
let table = document.getElementById(`tb`);
let tab = ``;
for(i=0; i<users.length; i++){
    tab +=`
    <tr><td>${i+1}</td>
        <td>${users[i].name}</td>
        <td>${users[i].lastname}</td>
        <td>${users[i].email}</td>
        <td>${users[i].phone}</td>
        </tr>`
}

table.innerHTML = tab;
}