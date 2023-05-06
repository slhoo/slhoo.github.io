function dod_tov(){
    let tovar = {
        name: document.getElementById('name').value,
        price: document.getElementById('price').value,
        img: document.getElementById('img').value,
        developer: document.getElementById('developer').value,
        reviews: document.getElementById('reviews').value,
        vidav: document.getElementById('reviews').value
    }
    db.collection('products').add(tovar).then(function(){
        location.reload()
    })

}