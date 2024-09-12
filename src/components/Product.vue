<template>
  <div class="">
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
  name: "Product",
  mixins: [productMixin],
  data() {
    return {};
  }
};
</script>

<style scoped></style>
