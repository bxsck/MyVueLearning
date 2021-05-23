app = Vue.createApp({
    data(){
      return{
        alertText:'Welcome to our site !',
        name: '',
        name2: ''
      }
    },
    methods:{
      onAlert(){
        alert(this.alertText);
      },
      onInputChange(event){
          this.name = event.target.value
      },
      onInputSubmit(event){
          this.name2 = event.target.value
      }
    }
  })
  
  app.mount('#assignment')