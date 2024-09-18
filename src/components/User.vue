<template>
  <div class="hello">
    <h1>Message parent: {{ name }}</h1>
    <p v-highlight:bgColor.delayed="'red'">Age parent {{ age }}</p>
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

    <hr />
    <transition-component></transition-component>
    <button v-on:click="show = !show">
      Toggle
    </button>
    <!-- <transition name="fade">
      <p v-if="show" class="card">hello</p>
    </transition> -->
    <transition name="slide">
      <p v-if="show" class="card">Slide</p>
    </transition>
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
      age: 18,
      show: true
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

.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-leave /* .fade-leave-active below version 2.1.8 */ {
}
.fade-leave-active {
  transition: opacity 0.5s;
  opacity: 0;
}
.card {
  background: rgb(176, 179, 41);
  border: 1px solid rgb(176, 179, 41);
  border-radius: 4px;
}

.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  opacity: 1;
  transition: opacity 1s;
  animation: slide-in 1s ease-in forwards;
}
.slide-leave {
  opacity: 1;
}
.slide-leave-active {
  opacity: 0;
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
