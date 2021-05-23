const App = Vue.createApp({
  data() {
    return {
      name: "Bosck",
      age: 22,
      imgSrc: 'https://image.freepik.com/free-vector/server-room-rack-blockchain-technology-token-api-access-data-center_39422-442.jpg',
    };
  },
  methods: {
      randBinary(){
          return Math.round(Math.random())
      }
  },
});

App.mount("#assignment");