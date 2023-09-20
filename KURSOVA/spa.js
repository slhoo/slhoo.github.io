document.addEventListener('DOMContentLoaded', async function(){
let user_id = new URL(window.location.href).searchParams.get('id');
let home = await axios.get('templates/home.html');
let profile = await axios.get('templates/profile.html');
const data = {
    searchTerm: "",
    currentPath: window.location.hash,
    content: [],
    showCart: false
}

    const Home = {
        template: home.data,
            data() {
                return data;
              },        
        methods:{
            getUserInfo(){
                db.collection('users_kursova').doc(user_id).get().then(res=>{
                    const userData = res.data();
                    this.phone = userData.phone;
                    this.place = userData.place;
                    this.postoffice = userData.postoffice;
                    console.log(userData)
                });
            },
            
            poshuk() {
                const searchTerm = this.searchTerm.trim();
                const authorSearchTerm = this.searchTerm.trim();
                const productsCollection = db.collection("products");
                productsCollection.get().then((querySnapshot) => {
                  const foundProducts = [];
                  querySnapshot.forEach((doc) => {
                    const productData = doc.data();
                    if (productData.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                    productData.developer.toLowerCase().includes(authorSearchTerm.toLowerCase()
                    ))  {
                      foundProducts.push(productData);
                    }
                  });
                  this.$root.content = foundProducts;
                });
              },
            showAllGenres() {
                this.$root.content = this.products;
            },
            filterByGenre(genre) {
                const filteredProducts = this.products.filter(product => product.genre === genre);
                this.$root.content = filteredProducts;
            },


            getProducts(){
                db.collection('products').get().then(res => {
                    this.$root.content = [];
                    this.products = [];
                    res.forEach(doc => {
                        let prod = doc.data();
                        prod.id = doc.id;
                        this.$root.content.push(prod);
                        this.products.push(prod);
                    });
                    this.$root.content = this.products;
                });
            },
            slideLeft() {
                const slides = document.querySelector(`.slides`);
                const slides_num = document.querySelectorAll(`.slide`);
                
                if (this.gm(slides) >= -((slides_num.length - 2) * 500)) {
                  slides.style.marginLeft = `${this.gm(slides) - 500}px`;
                }
              },
              slideRight() {
                const slides = document.querySelector(`.slides`);
                
                if (this.gm(slides) < 0) {
                  slides.style.marginLeft = `${this.gm(slides) + 500}px`;
                }
              },
              gm(slides) {
                return Number(slides.style.marginLeft.replace(`px`, ``));
              },
              getRandomProductFromFirebase() {
                const db = firebase.firestore();
                db.collection('products').get().then(snapshot => {
                  if (snapshot.empty) {
                    console.log('Колекція "products" пуста');
                    return;
                  }
                  const products = snapshot.docs.map(doc => doc.data());
                  const randomProduct = products[Math.floor(Math.random() * products.length)];
            
            
                  let random_product = document.getElementById(`random-product`);
                  let tovar = `
                  <div class="card" v-for="tovar in $root.content" >
                  <div class="content">
                    <div class="back">
                      <div class="back-content">
                          <div class="img">
                              <img src="${randomProduct.img}" alt="" class="book_img">
                          </div>
                          <div class="info">
                              <h3 id="h4">${randomProduct.name}</h3>
                              <p style="margin-top: 15px;" class="writer">${randomProduct.developer}</p>
                              <p style="margin-top: 20px;" class="${randomProduct.genre}">${randomProduct.genre}</p>
                              
                          </div>
                          <p class="tovar_price" style="position: absolute; bottom: 25px; right: 40px; font-size: 20px;">${randomProduct.price} <small>₴</small></p>
                      </div>
                    </div>
                    <div class="front">
                              <p style="font-size: 17px; padding: 15px;">${randomProduct.description}</p>
                              <div style="display: flex;">
                                  <div class="counter" style="margin-left: 90px; border: 1px solid black; height: 22px; background-color: rgb(117, 117, 117); border-radius: 15px; margin-top: 4px;">
                                      <div class="control" data-action="minus">-</div>
                                      <div class="current" data-counter>1</div>
                                      <div class="control" data-action="plus">+</div>
                                  </div>
                              <button data-cart type="button" class="btn_add_cart" style="margin-left: 20px;">Додати у кошик</button>                        
                              </div>
          
                    </div>
                  </div>
              </div>
                  `;
                random_product.innerHTML = tovar;
                })
                .catch(error => {
                  console.error('Помилка при отриманні даних:', error);
                });
                
            },
            del(){
                let random_product = document.getElementById(`random-product`);
                let tovar = ``; 
                random_product.innerHTML = tovar;
            }
            },
            mounted(){
                this.getProducts();
                this.poshuk();
                this.getUserInfo();
            }
    }
    const Profile = {
        template: profile.data,
        data() {
            return {
                showDeleteConfirmation: false,
                showEditWindow: false,
                name: "",
                lastname: "",
                patronymic: "",
                phone: "",
                place: "",
                postoffice: "",
                img: "",
                email: "",
                password: ""
            };
        }, 
        methods:{
              deleteAccount() {
                const user = firebase.auth().currentUser;
                if (user) {
                  const userId = user.uid;
                  db.collection('users_kursova').doc(userId).delete()
                    .then(() => {
                      window.location.href = 'reg_vhid.html';
                    })
                    .catch((error) => {
                      console.error('Помилка під час видалення акаунту:', error);
                    });
                }
              },
            toggleEditWindow() {
                this.showEditWindow = !this.showEditWindow;
            },
            getUserInfo(){
                db.collection('users_kursova').doc(user_id).get().then(res=>{
                    const userData = res.data();
                    this.name = userData.name;
                    this.lastname = userData.lastname;
                    this.patronymic = userData.patronymic;
                    this.phone = userData.phone;
                    this.place = userData.place;
                    this.postoffice = userData.postoffice;
                    this.img = userData.img;
                    this.email = userData.email;
                    this.password = userData.password;
                    console.log(userData)
                });
            }, 
            saveChanges() {
                const userRef = db.collection('users_kursova').doc(user_id);
                userRef.update({
                  name: this.name,
                  lastname: this.lastname,
                  patronymic: this.patronymic,
                  phone: this.phone,
                  place: this.place,
                  postoffice: this.postoffice,
                  img: this.img,
                  email: this.email,
                  password: this.password,
                }).then(() => {
                  console.log("Зміни збережено успішно!");
                }).catch((error) => {
                  console.error("Помилка при збереженні змін:", error);
                });
              },
              handleImageUpload(event) {
                const file = event.target.files[0];
            
                if (file) {
                  const reader = new FileReader();
                  reader.onload = (e) => {
                    this.img = e.target.result; 
                  };
                  reader.readAsDataURL(file);
                }
              }      
            },

            mounted(){
                this.getUserInfo();
            }
    }
    
    const routes = {
        '/main': Home,
        '/profile': Profile
    }
    const app = {
        data(){
            return data;
        }, 
        methods: {
            toggleCart() {
                this.showCart = !this.showCart;
            },
            sign_out(){
                firebase.auth().signOut().then(() => {
                  }).catch((error) => {
                  });
                  localStorage.clear('login');
                  setTimeout(function(){
                    window.location.href = 'reg_vhid.html'
                  },1000)
            }
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
              });

        }
    };
    Vue.createApp(app).mount('#app');
 
    
});

window.addEventListener('click', function (event) {
                    let counter;
                    if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){
                    const counterWrapper = event.target.closest('.counter');
                    counter = counterWrapper.querySelector('[data-counter]');
                    }
                   
                    if(event.target.dataset.action === 'plus'){
                        counter.innerText = ++ counter.innerText;
                    }
                    if(event.target.dataset.action === 'minus'){
                         if(parseInt(counter.innerText) > 1){
                            counter.innerText = --counter.innerText;
                        }else if (event.target.closest('.cart_colection') && parseInt(counter.innerText) === 1) {
                            event.target.closest('.cart_item').remove();
                            calcCartPriceAndDelivery();
                        }
                    }
                    if (event.target.hasAttribute('data-action') && event.target.closest('.cart_colection')) {
                        calcCartPriceAndDelivery();
                    }
    
});

window.addEventListener('click', function(event){
    if (event.target.hasAttribute('data-cart')) {
        const card = event.target.closest('.card'); 
        const productName = card.querySelector('.info h3').textContent;
        db.collection('products').where('name', '==', productName).get().then(snapshot => {
            if (!snapshot.empty) {
                const productId = snapshot.docs[0].id;
                const productInfo = {
                    id: productId,
                    img: card.querySelector('.book_img').getAttribute('src'),
                    title: card.querySelector('.info h3').innerText,
                    price: card.querySelector('.tovar_price').innerText,
                    writer: card.querySelector('.writer').innerText,
                    counter: card.querySelector('[data-counter]').innerText,
                }
                const cart_colection = document.querySelector('.cart_colection');

		        const itemInCart = cart_colection.querySelector(`[data-id="${productInfo.id}"]`);
                if (itemInCart) {
                    const counterElement = itemInCart.querySelector('[data-counter]');
                    counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
                } else {
                const cartItemHTML = `
                <div class="cart_item" data-id="${productInfo.id}">
                <div class="cart_img"><img src="${productInfo.img}" alt="" class="img_item"></div>
                <div class="cart_info">
                    <div class="cart_title">${productInfo.title}</div>
                    <div class="title_dev" style="margin-top: 5px;"><small>${productInfo.writer}</small></div>
                    <div class="count_price" style="margin-left: -30px;">
                        <div class="cart_price">${productInfo.price}</div>
                        <div class="counter">
                            <div class="control" data-action="minus">-</div>
                            <div class="current" data-counter="">${productInfo.counter}</div>
                            <div class="control" data-action="plus">+</div>
                        </div>
                    </div>
                    </div>
                </div>
            `; 
            cart_colection.insertAdjacentHTML('beforeend',cartItemHTML);                     
                }
            card.querySelector('[data-counter]').innerText = '1';
            calcCartPriceAndDelivery();

            };


        });
       };  
   }); 

function calcCartPriceAndDelivery() {
	const cart_colection = document.querySelector('.cart_colection');
	const priceElements = cart_colection.querySelectorAll('.cart_price');
	const totalPriceEl = document.querySelector('.total-price');
	const deliveryCost = document.querySelector('.delivery-cost');
	const cartDelivery = document.querySelector('[data-cart-delivery]');
	let priceTotal = 0;
	priceElements.forEach(function (item) {
		const amountEl = item.closest('.cart_item').querySelector('[data-counter]');
		priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText);
	});
	totalPriceEl.innerText = priceTotal + ' грн';
	if (priceTotal > 0) {
		cartDelivery.classList.remove('none');
	} else {
		cartDelivery.classList.add('none');
	}


	if (priceTotal >= 600) {
		deliveryCost.classList.add('free');
		deliveryCost.innerText = 'безкоштовно';
	} else {
		deliveryCost.classList.remove('free');
		deliveryCost.innerText = '50 грн';
	}
}

let all_tovars = [];
function GetTovars(){
    db.collection('products').get().then(res => 
        res.forEach(doc =>{
            let obj = doc.data();
            obj.id = doc.id;
            all_tovars.push(obj)
        })    
    )
    console.log(all_tovars)
}
GetTovars()
function Filter(){
  
    let nph = all_tovars.slice();
    if(min_price.value.length > 0){
        nph = nph.filter(function(phone){
            return min_price.value <= phone.price
        })
    }
    if(max_price.value.length > 0){
        nph = nph.filter(function(phone){
            return max_price.value >= phone.price 
        })
    }
    console.log(nph)
}