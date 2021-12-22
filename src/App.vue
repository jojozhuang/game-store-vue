<template>
  <div id="app">
    <app-header></app-header>
    <hr />
    <router-view :key="$route.fullPath" />
    <hr />
    <app-footer></app-footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue"; // @ is an alias to /src
import Footer from "@/components/Footer.vue"; // @ is an alias to /src

@Component({
  components: {
    "app-header": Header,
    "app-footer": Footer,
  },
})
export default class App extends Vue {}
</script>

<style>
.container {
  margin-top: 20px;
}
.btn {
  margin-right: 4px;
}
</style>
