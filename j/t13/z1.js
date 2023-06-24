let klaviatura = {
    akcia: true,
    nazva: "Клавіатура дротова Logitech G209 Prodigy USB",
    rev: 204,
    price: 1399,
    image: `<img src=z1-2.jpg>`
}

let klaviatura2 = {
    akcia: false,
    nazva: "Клавіатура Cougar Vantar",
    rev: 6,
    price: 1286,
    image: `<img src=z1-4.jpg>`
}

let products = document.getElementById(`products`);

let product1 = `
<div class="card">
<div class="header">
    <div class="action">Акція</div>
</div>

<div class="card_image">
    <img src="z1-2.jpg" alt="">
</div>

<div class="card_info">
    <div class="name">
        ${klaviatura.nazva}
    </div>
    
    <div class="reviews">
        ${klaviatura.rev} відгуки
    </div>
    
    <div class="price">
        ${klaviatura.price}&#8372;
    </div>
</div>
</div>
`;


let product2 = `
<div class="card">
<div class="header">

<div></div>
</div>

<div class="card_image">
    <img src="z1-2.jpg" alt="">
</div>

<div class="card_info">
    <div class="name">
        ${klaviatura2.nazva}
    </div>
    
    <div class="reviews">
        ${klaviatura2.rev} відгуки
    </div>
    
    <div class="price">
        ${klaviatura2.price}&#8372;
    </div>
</div>
</div>
`;
products.innerHTML = product1 + product2;


let kl1 = 0;
let kl2 = 0;

if(klaviatura.price < klaviatura2.price){
    kl1 = klaviatura.price - klaviatura2.price

}else{kl2 = klaviatura2.price - klaviatura.price}