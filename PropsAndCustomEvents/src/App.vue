<template>
  <div>
    <active-user :username="user.name" :userage="user.age"></active-user>
    <user-data @set-data='setUserData'></user-data>
  </div>
</template>

<script>
import ActiveUser from "./components/ActiveUser.vue";
export default {
  components: { ActiveUser },
  data() {
    return {
      user: {
        name: "Teerapat Surasin",
        age: 22,
      },
    };
  },
  methods: {
      setUserData(name, age){
          this.user ={
              name: name,
              age: +age
          }
      }
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}
section {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 10px
}
</style>
