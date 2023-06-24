let users = [
	"Андрусишин Олег",
	"Балицький Олексій",
	"Барановський Ігор",
	"Бей Тетяна",
	"Білас Всеволод",
	"Білоус Андрій",
	"Бордун Галина",
	"Буба Євген",
	"Вантух Володимир",
	"Васьків Роман",
	"Вервега Тарас",
	"Візняк Юрій",
	"Гагалюк Богдан",
	"Ганущин Олександр",
	"Гичка Михайло",
	"Гірняк Володимир",
	"Голуб Юрій",
	"Грабінський Ігор",
	"Грицик Ольга",
	"Гудима Юрій",
	"Дворянин Парасковія",
	"Дейнека Анатолій",
	"Демчина Роман",
	"Дзюдзь Михайло"
];
let dc = document.getElementById(`tab`);
let zmist = `<tr> <td>№</td> <td>Користувач</td> <td>Відправити лист</td> </tr>`; 
for(i=0; i<users.length; i++){
  if(i % 2 == 0){  
    zmist+=`<tr>
    <td>${i+1}</td>
    <td>${users[i]}</td>
    <td><input type="checkbox"></td>
    </tr>`
}else{zmist+=`<tr class="tr1">
<td>${i+1}</td>
<td>${users[i]}</td>
<td><input type="checkbox"></td>
</tr>`}
}
let pt = Number(prompt(`Скільки користувачів треба добавити?`));


for(i=0; i<pt;i++){users.push(prompt(`Введіть ім'я та фамілію користувача`))
   if(i % 2 == 0){ 
    zmist+=`<tr class="tr1">
    <td>${users.length+i}</td>
    <td>${users[]}</td>
    <td><input type="checkbox"></td>
    </tr>`
   }else{zmist+=`<tr>
   <td>${users.length+i}</td>
   <td>${users[]}</td>
   <td><input type="checkbox"></td>
   </tr>`}
}
tab.innerHTML = zmist;