let users = [`Ратушняк Андрій`, 'Горенко Олександра'];
let table = document.getElementById(`table`);
let data = `<tr><th>№</th><th>Користувач</th><th>Відправити лист</th></tr>`;

for(i = 0; i<users.length; i++){
if(i % 2 == 0){
data += `<tr class="gray>
<td>${i+1}</td>
<td>${users[i]}</td>
<td><input type="checkbox"></td>
</tr>`;}
else{
    data += `<tr>
<td>${i+1}</td>
<td>${users[i]}</td>
<td><input type="checkbox"></td>
</tr>`;
}


}
table.innerHTML = data;

