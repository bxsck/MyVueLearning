<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click='toggleDetails'>Show Details</button>
    <u v-if='detailsAreVisible'>
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </u>
  </li>
</template>

<script>
export default {
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "bosck",
        name: "Teerapat Surasin",
        phone: "0123456789",
        email: "bosck@bosck.com",
      },
    };
  },
  methods:{
      toggleDetails(){
          this.detailsAreVisible = !this.detailsAreVisible;
      }
  }
};
</script>
