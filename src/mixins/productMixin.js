export const productMixin = {
  data() {
    return {
      products: ["Apple", "Banana", "Cherry", "Date"],
      searchText: ""
    };
  },
  created: () => {
    console.log("Created from productMixin");
  },
  computed: {
    filterProduct() {
      return this.products.filter(product => {
        return product.match(this.searchText);
      });
    }
  }
};
