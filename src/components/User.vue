<template>
  <div class="hello">
    <h1>Message parent: {{ name }}</h1>
    <button @click="changeName">change message</button>
    <user-detail-component
      :name="name"
      @resetNameEmit="name = $event"
    ></user-detail-component>
    <user-edit-component></user-edit-component>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";
export default {
  name: "User",
  components: {
    "user-detail-component": UserDetail,
    "user-edit-component": UserEdit
  },
  data() {
    return {
      name: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    changeName() {
      this.name = "Hello World";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
