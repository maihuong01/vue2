<template>
  <div id="app">
    <h1>User Detail</h1>
    <span>Message children:{{ name }}</span>
    <div>Age children:{{ userAge }}</div>
    <button @click="resetName">reset name</button>
    <button @click="resetNameByCb">reset name by callback</button>
    <div>User Age: {{ userAge }}</div>
  </div>
</template>

<script>
import { eventBus } from "../main.js";
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
  },
  created() {
    eventBus.$on("ageEmit", data => {
      this.userAge = data;
    });
  }
};
</script>

<style></style>
