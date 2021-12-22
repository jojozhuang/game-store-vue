<template>
  <div class="jumbotron text-center">
    <h1>Game Store - Product Management</h1>
    <p>Built with Vue and Restful API(Spring Boot/Asp.Net Core)</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
