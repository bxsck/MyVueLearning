const App = Vue.createApp({
  data() {
    return {
      taskList: [],
      enterVal: "",
      isShow: true,
    };
  },
  computed:{
    shownText(){
        if(this.isShow === true){
            return "Hide Tasks"
        }else{
            return "Show Tasks"
        }
    }
  },
  methods: {
    addTask() {
      if (this.enterVal !== '') {
        this.taskList.push(this.enterVal);
        this.enterVal = "";
      }
    },
    toggleVisibility() {
      this.isShow = !this.isShow;
    },
  },
});

App.mount("#assignment");
