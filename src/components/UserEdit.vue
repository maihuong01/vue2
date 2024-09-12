<template>
  <div id="app">
    <h1>User Edit</h1>
    <span>User Local Age:{{ localUserAge }}</span>
    <span>User Props Age:{{ userAge }}</span>
    <button @click="changeAge">changeAge</button>
    <button @click="changeAgeParent">change Age callback</button>
  </div>
</template>

<script>
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
  data() {
    return {
      localUserAge: this.userAge
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
  }
};
</script>

<style></style>
