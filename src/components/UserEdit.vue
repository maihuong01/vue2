<template>
  <div id="app">
    <h1>User Edit</h1>
    <p>{{ name | toUpperCaseText }}</p>
    <span>User Local Age:{{ localUserAge }}</span>
    <span>User Props Age:{{ userAge }}</span>
    <button @click="changeAge">changeAge</button>
    <button @click="changeAgeParent">change Age callback</button>
    <hr />
    <h1>Product</h1>
    <input type="text" v-model="searchText" />
    <button>Search product</button>
    <button @click="products.push('Iphone 16')">Add</button>

    <ul>
      <li v-for="product in filterProduct" :key="product">
        <span>{{ product }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { productMixin } from "../mixins/productMixin";

export default {
  name: "UserEdit",
  props: {
    userAge: {
      type: Number,
      required: true
    },
    changeAgeParent: {
      type: Function,
      required: true
    }
  },
  mixins: [productMixin],
  data() {
    return {
      localUserAge: this.userAge,
      name: "UserEdit"
    };
  },

  watch: {
    userAge(newVal) {
      this.localUserAge = newVal;
    }
  },
  methods: {
    changeAge() {
      this.localUserAge = 30;
      this.$emit("changeAgeEmit", this.localUserAge);
    }
  },
  filters: {
    toUpperCaseText(name) {
      return name.toUpperCase();
    }
  }
};
</script>

<style></style>
