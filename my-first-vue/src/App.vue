<template>
  <section>
    <h2>My Friends</h2>
    <ul>
      <friend-contact></friend-contact>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "bosck",
          name: "Teerapat Surasin",
          phone: "0123456789",
          email: "bosck@bosck.com",
        },
        {
          id: "mook",
          name: "mookmanee mmk",
          phone: "0123456789",
          email: "mook@bosck.com",
        },
      ],
    };
  },
};
</script>
