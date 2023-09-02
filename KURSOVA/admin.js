document.addEventListener('DOMContentLoaded', async function(){
let user_list = await axios.get('template_admin/user_list.html');
let add_tovar = await axios.get('template_admin/add_tovar.html');
let orders = await axios.get('template_admin/orders.html');

const data = {
    currentPath: window.location.hash,
    content: []
}
const User_list = {
    template: user_list.data
}
const Add_tovar = {
    template: add_tovar.data
}
const Orders = {
    template: orders.data
}
const routes = {
    '/user_list': User_list,
    '/add_tovar': Add_tovar,
    '/orders': Orders
}
const app = {
    data(){
        return data
    },
    methods: {
    },
    components: {
        
    },
    computed: {
        currentView(){
                    return routes[this.currentPath.slice(1)];
    }
    },
    mounted(){
        window.addEventListener('hashchange', () => {
        this.currentPath = window.location.hash;
        console.log('hashchange')
        });
        
    }
}
Vue.createApp(app).mount('#admin_vue')
})
function dod_tov(){
    let tovar = {
        name: document.getElementById('name').value,
        price: document.getElementById('price').value,
        img: document.getElementById('img').value,
        developer: document.getElementById('developer').value,
        description: document.getElementById('description').value,
        genre: document.getElementById('genre').value
    }
    db.collection('products').add(tovar).then(function(){
        location.reload()
    })

}

let books = [];
db.collection("products").get().then( function(res) {
    res.forEach( function(doc, index) {
        const user = doc.data();
        const id = doc.id;
        books.push(user);
        drawUsers(user, index, id);
    });
});

function drawUsers(tovar, index, id){
    let tbody = document.getElementById(`tbody`);
    let trs = `
    <tr id=${id}>
    <th scope="row">${books.length}</th>
    <td>${tovar.name}</td>
    <td>${tovar.developer}</td>
    <td>${tovar.genre}</td>
    <td>${tovar.price}</td>
    <td>${tovar.description}</td>
    <td class="text-center"><button onclick=showMod('editTaskModal','${id}') style="background-color: transparent; color: rgb(255, 179, 39); padding: 7px; border: none;">Редагувати</button></td>
    <td class="text-center"><button onclick=delDoc('${id}') style="background-color: transparent; color: rgb(254, 48, 7); padding: 7px; border: none;">x</button></td>
  </tr>`;
    tbody.innerHTML += trs;
}
function delDoc(id){
    db.collection('products').doc(id).delete().then(function(){
        console.log('видалено')
        location.reload()
    });
}
function add(){

let us = {
        name: document.getElementById('name').value,
        price: document.getElementById('price').value,
        img: document.getElementById('img').value,
        developer: document.getElementById('developer').value,
        description: document.getElementById('description').value,
        genre: document.getElementById('genre').value
}
db.collection('products').add(us).then(function(){
hideMod()
location.reload()    
})

}

function showMod(id, docid){
    document.getElementById('save').setAttribute('onclick', `editUser('${docid}')`);
    document.getElementById(id).classList.add('show');
    modalGetUser(docid)
}
function hideMod(id){
    document.getElementById(id).classList.remove('show')
}


function modalGetUser(id){
    db.collection("products")
    .doc(id)
    .get()
    .then(function(res){
        const data = res.data();
        console.log(data);
        document.getElementById("edit_name").value = data.name;
        document.getElementById("edit_developer").value = data.developer;
        document.getElementById("edit_genre").value = data.genre;
        document.getElementById("edit_price").value = data.price;
        document.getElementById("edit_description").value = data.description;
        document.getElementById("edit_img").value = data.img;
    });
}

function editUser(id){
    const user = {
        name: document.getElementById('edit_name').value,
        price: document.getElementById('edit_price').value,
        img: document.getElementById('edit_img').value,
        developer: document.getElementById('edit_developer').value,
        genre: document.getElementById('edit_genre').value,
        description: document.getElementById("edit_description").value
    }
    db.collection("products").doc(id).update(user).then( function(){

        console.log("Document is updated!")
        hideMod('editTaskModal')
        location.reload()
});
};
