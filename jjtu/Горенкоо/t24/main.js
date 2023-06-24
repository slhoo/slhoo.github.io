function dc(cm){
    let cards = document.getElementById(`cards`);
    let cards_html  = ``;

    cm.map(function(phones){
        let action = ``;
     if(phones.action == true){
        action = `<div class="action">'Акція'</div>`;

    }
    cards_html  +=`<div class="card">
    ${action}
                        <img src="${phones.image}"
                            class="card-img-top">
                        <div class="card-body">
                            <h6 class="card-title">'${phones.name}'</h6>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"><b>Виробник:</b> <span>'${phones.developer}'</span></li>
                                <li class="list-group-item"><b>Відгуків:</b> <span>'${phones.reviews}'</span></li>
                                <li class="list-group-item"><b>Ціна:</b> <span>'${phones.price}'</span></li>
                            </ul>
                        </div>
                        <div class="card-body price">
                            <a href="#" class="card-link">В корзину</a>
                            <a href="#" class="card-link">Придбати</a>
                        </div>
                    </div>`
})




    cards.innerHTML = cards_html;
}

function findDevelopers(){
    let developers = [];

    phones.map(function(phone){
        if(developers.indexOf(phone.developer) === -1){
            developers.push(phone.developer);

        }
        let datalistOptions = document.getElementById(`datalistOptions`);

        let options = ``;

        developers.map(function(dev){
            options += `<option value="${dev}">`

        })


        datalistOptions.innerHTML = options;

    })
console.log(developers)

}
function saveFilter(){
    let filter = {
        developer: document.getElementById(`developer`).value,
        name: document.getElementById(`name`).value,
        min_price: document.getElementById(`min_price`).value,
        max_price: document.getElementById(`max_price`).value,
        order: document.getElementById(`order`).value


    }
localStorage.setItem("filter", JSON.stringify(filter));



rc(filter)
}

function rc(filter){

    let nph = phones.slice();
    if(filter.name.length > 0){
        nph = nph.filter(function(phone){
            return phone.name.includes(filter.name)


        })
    }

    if(filter.developer.length > 0){
        nph = nph.filter(function(phone){
            return phone.developer === filter.developer
        })
    }

    if(filter.min_price.length > 0){
        nph = nph.filter(function(phone){
            return filter.min_price <= phone.price
        })
    }
    if(filter.max_price.length > 0){
        nph = nph.filter(function(phone){
            return filter.max_price >= phone.price 
        })
    }

    if(filter.order.length > 0 && filter.order === "price"){
        nph = nph.sort(function(a, b){
            return a.price - b.price
        })
    }
    if(filter.order.length > 0 && filter.order === "reviews"){
        nph = nph.sort(function(a, b){
            return b.reviews - a.reviews
        })
    }
    dc(nph)
}

dc(phones)

findDevelopers();


let of = JSON.parse(localStorage.getItem("filter", ));

if(of){
    rc(of)


}else{
    dc(nph)
}