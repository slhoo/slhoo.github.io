let data = {
    name: "Sasha",
    socs:[
        {
            name: 'Google',
            img: 'https://castironsteak.com/wp-content/uploads/2016/01/google-square.jpg'
        },
        {
            name: 'Faceboock',
            img: 'https://w7.pngwing.com/pngs/201/462/png-transparent-computer-icons-facebook-facebook-logo-black-and-white-symbol-thumbnail.png'
        },
        {
            name: 'Instagram',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png'
       }
     ],
     tovari:[

     ]
}

const SocialComponents = {
    props: ['social'],
    template: `
    <div class="card" style="width: 200px; padding: 10px; margin: 10px;">
        <h2 class="text-center">{{social.name}}</h2>
        <img v-bind:src="social.img" style='width:100px; height: 100px; margin:0 auto;'>
    </div>
    `
}
const TovComp = {
    props: ['tovar'],
    template: `
        <div class="tovar">
        <div class="img"><img v-bind:src="tovar.img" alt=""></div>
    <div class="book">
        <div class="nazva"><p>Назва: <br> {{tovar.name}}</p></div>
        <hr class="hr">
        <div class="writer"><p>Письменник: {{tovar.developer}}</p></div>
        <hr class="hr">
        <div class="vidav"><p>Видавництво: {{tovar.vidav}}</p></div>
        <hr class="hr">
        <div class="price"><p>Ціна: {{tovar.price}}</p></div>
        <hr class="hr">
        <div class="vidhuki"><p>Відгуки: {{tovar.reviews}}</p></div>
        <hr class="hr">
        <div class="basket"> <p>У кошик</p></div>
    </div>
        </div>
    `
}
const app = {
    data(){
        return data 
    },
    methods: {

    },
    components:{
        SocialComponents,
        TovComp
    },
    mounted(){
        db.collection('products').get().then(res => {
            res.forEach(tov => {
                let product = tov.data();
                product.id = tov.id;
                this.tovari.push(product)
            })
        })
    }
}
Vue.createApp(app).mount('#test')