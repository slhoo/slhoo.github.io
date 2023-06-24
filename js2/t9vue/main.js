const test = {
    testp: []
}
const testVue = {
    data(){
        return test 

    },
    methods : {
        clickRah(){
            this.clicks++;

        }
    },
    mounted(){

        db.collection('users').get().then(res=>{
            res.forEach(doc => {
                const user = doc.data();
                user.id = doc.id;
                this.testp.push(user)
            })
        })
    }
}
Vue.createApp(testVue).mount('#app');