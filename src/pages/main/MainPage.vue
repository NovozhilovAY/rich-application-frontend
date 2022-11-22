<template>
  <MainHeader/>
</template>

<script>
import {LoginController} from "@/controller/LoginController";
import MainHeader from "@/pages/main/components/MainHeader";

export default {
  name: "MainPage",
  components: {MainHeader},
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