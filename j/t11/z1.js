let mis = prompt(`Введіть місяць`);


if(mis == "Січень" || mis == "Березень" ||  mis == "Травень" || mis == "Липень" || mis == "Серпень" || mis == "Жовтень" || mis == "Грудень"){
    alert(`В цьому місяці 31 день`);
}else if(mis == "Квітень" || mis == "Червень" || mis == "Вересень" || mis == "Листопад"){
    alert(`В цьому місяці 30 днів`);
}else if(mis == "Лютий"){
    alert(`В цьому місяці 28 днів`);
}else(alert(`Такого місяця немає`))