<template>
  <div class="hello">
    <h1>Message parent: {{ name }}</h1>
    <button @click="changeName">change message</button>
    <div>User Age : {{ age }}</div>
    <user-detail-component
      :name="name"
      @resetNameEmit="name = $event"
      :resetNameByCb="resetName"
      :userAge="age"
    ></user-detail-component>
    <user-edit-component
      :userAge="age"
      @changeAgeEmit="age = $event"
      :changeAgeParent="changeAgeParent"
    ></user-edit-component>
    <product-component></product-component>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";
import Product from "./Product.vue";
export default {
  name: "User",
  components: {
    "user-detail-component": UserDetail,
    "user-edit-component": UserEdit,
    "product-component": Product
  },
  data() {
    return {
      name: "Admin",
      age: 18
    };
  },
  methods: {
    changeName() {
      this.name = "Hello World";
    },
    resetName() {
      this.name = "TBT Nguyen phu trong";
    },
    changeAgeParent() {
      this.age = 20;
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
