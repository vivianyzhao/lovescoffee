<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/resume">Resume</router-link> |
    <router-link to="/loves">Coffee & Dessert</router-link> |
    <router-link to="/contact">Contact</router-link>
  </div>
  <router-view>{{ test }}</router-view>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'

export default defineComponent({
  setup() {
    const test: Ref<any> = ref('Coming Soon...')

    return { test }
  }
})
</script>

<style lang="scss">
@import "src/styles/app";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
