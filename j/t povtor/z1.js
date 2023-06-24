let main = document.getElementById(`main`);
let car1 = {
    image: '<img src="a1.webp">',
    nam: 'ghjdfg',
    price: 5000,
    color: 'сірий',
    prob: 200
}
let car2 = {
    image: '<img src="a2.jpg">',
    nam: 'Tesla',
    price: 15000,
    color: 'чорний',
    prob: 0
}
let car3 = {
    image: '<img src="a3.jpg">',
    nam: 'Bugatti',
    price: 15000,
    color: 'синій',
    prob: 0
}
let cars = `<div class="car">
${car1.image}
<h3 align="center">${car1.nam}</h3>
<h4>${car1.price}$</h4> 
<h4>Колір:${car1.color}</h4>
<h4>Пробіг:${car1.prob}км</h4>
</div>`
;
cars += `<div class="car2">
${car2.image}
<h3 align="center">${car2.nam}</h3>
<h4>${car2.price}$</h4> 
<h4>Колір:${car2.color}</h4>
<h4>Пробіг:${car2.prob}км</h4>
</div>`

cars += `<div class="car3">
${car3.image}
<h3 align="center">${car3.nam}</h3>
<h4>${car3.price}$</h4> 
<h4>Колір:${car3.color}</h4>
<h4>Пробіг:${car3.prob}км</h4>
</div>`






main.innerHTML= cars;