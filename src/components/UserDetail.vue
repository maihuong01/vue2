<template>
  <div id="app">
    <h1>User Detail</h1>
    <span>Message children:{{ name }}</span>
    <button @click="resetName">reset name</button>
    <button @click="resetNameByCb">reset name by callback</button>
    <div>User Age: {{ userAge }}</div>
  </div>
</template>

<script>
export default {
  name: "UserDetail",
  props: {
    name: {
      type: String,
      required: true
    },
    resetNameByCb: {
      type: Function,
      required: true
    },
    userAge: {
      type: Number,
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
