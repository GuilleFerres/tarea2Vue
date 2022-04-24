const app = Vue.createApp({
    data() {
        return {
            name: '',
            confirmInput: ''
        }
    },
    methods:{
        showAlert() {
            alert('Show alert!!');
        },
        register(event) {
            this.name = event.target.value;
        },
        registerConfirm(event){
            this.confirmInput = this.name;
        }
    }
});
app.mount('#assignment');