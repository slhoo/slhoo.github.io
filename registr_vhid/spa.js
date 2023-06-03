document.addEventListener('DOMContentLoaded', async function(){
    let user_id = new URL(window.location.href).searchParams.get('id');
    let not_found = await axios.get('templates/404.html');
    let home = await axios.get('templates/home.html');
    let books = await axios.get('templates/books.html');

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
    const routes = {
        '/': Home,
        '/not-found': NotFound,
        '/books': Books
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
    Vue.createApp(app).mount('#test_app')
})