document.addEventListener('DOMContentLoaded', async function(){
    let not_found = await axios.get('templates/404.html');
    let home = await axios.get('templates/home.html');
    let books = await axios.get('templates/books.html');
    let ord = await axios.get('templates/ord.html');
    let login = await axios.get('templates/login.html');
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
    const Login = {
        template: login.data,
        methods: {
            googleAuth(){
                firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    
    var user = result.user;
    let new_user = {
        name: user.displayName,
        email: user.email,
        login: "joj"
    }
    db.collection('testReg').doc(user.uid).add(new_user).then(res => {
        console.log('Успіх')
    })
    console.log(result)
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
  });
            },
             x(){
            const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
        }
        },
    mounted(){
        this.x
    }

       
    }
    const routes = {
        '/': Home,
        '/not-found': NotFound,
        '/books': Books,
        '/orders': Orders,
        '/login': Login
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