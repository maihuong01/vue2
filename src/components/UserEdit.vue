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
    <div>Age children:{{ userAge }}</div>
    <button @click="changeAge">change age</button>
  </div>
</template>

<script>
import { eventBus } from "../main";
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
      // eventBus.$emit("ageEmit", this.userAge);
      eventBus.changeAge(this.userAge);
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
