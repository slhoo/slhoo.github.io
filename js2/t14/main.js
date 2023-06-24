document.addEventListener('DOMContentLoaded', async function(){
    let not_found = await axios.get('templates/404.html');
    let home = await axios.get('templates/home.html');
    let books = await axios.get('templates/books.html');
    let ord = await axios.get('templates/ord.html');
    // console.log(home.data)
    // console.log(not_found.data)

    const data = {
        test: 'Pr',
        currentPath: window.location.hash,
        content: []
    }
    const Home = {
        template: home.data 
    }
    const NotFound = {
        template: not_found.data 
    }
    const Books = {
        template: books.data,
        methods: {
            getProducts(){
                db.collection('products').get().then(res => {
                    this.$root.content = [];
                    res.forEach(doc => {
                        let prod = doc.data();
                        prod.id = doc.id;
                        console.log(prod);
                        this.$root.content.push(prod)
                    })
                })
            }
        },
        mounted(){
            this.getProducts();
        }
    }
    const Orders = {
        template: ord.data
    }
    const routes = {
        '/': Home,
        '/not-found': NotFound,
        '/books': Books,
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
                return routes[this.currentPath.slice(1) || '/' || NotFound];

            }
        },
        mounted(){
            window.addEventListener('hashchange', () => {
                this.currentPath = window.location.hash;
                console.log('hashchange')
              });

        }
    }
    Vue.createApp(app).mount('#app')
})