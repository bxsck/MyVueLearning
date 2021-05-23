const app = Vue.createApp({
    data(){
        return{
            value:0,
        }
    },
    watch:{
        result(){
            setTimeout(()=>{this.value=0},2000)
        }
    },
    computed:{
        result(){
            if(this.value<=37){
                return "Not there yet"
            }else{
                return "Too much!"
            }
        }
    },
    methods:{
        addFive(){
            console.log(this.value)
            this.value+=5
        },
        addOne(){
            this.value+=1
        }
    }
})

app.mount('#assignment')