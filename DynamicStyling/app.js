const App = Vue.createApp({
    data(){
        return{
            isShow:true,
            userClass:'',
            inputBgColor:'',
        }
    },
    computed:{
        showHide(){
            return this.isShow ? 'visible' : 'hidden'
        },
        classes(){
            return{
                user1: this.userClass ==='user1',
                user2: this.userClass ==='user2',
                visible: this.isShow,
                hidden: !this.isShow,
            }
        }
    },
    methods:{
        paragraphToggler(){
            this.isShow = !this.isShow;
        },
    }
})

App.mount('#assignment')