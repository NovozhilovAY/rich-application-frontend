<template>
  <h1>Main page</h1>
  <button @click="logout">Logout</button>
</template>

<script>
import {LoginController} from "@/controller/LoginController";

export default {
  name: "MainPage",

  methods:{
    logout(){
      LoginController.logout()
      this.$router.push({path: '/login', replace: true});
    }
  }
}
</script>

<style scoped>

</style>