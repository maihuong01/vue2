<template>
  <div id="app">
    <h1>User Detail</h1>
    <span>Message children:{{ name }}</span>
    <button @click="resetName">reset name</button>
  </div>
</template>

<script>
export default {
  name: "UserDetail",
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      key: "value"
    };
  },
  methods: {
    resetName() {
      this.name = "Van Lang";
      this.$emit("resetNameEmit", this.name);
    }
  }
};
</script>

<style></style>
