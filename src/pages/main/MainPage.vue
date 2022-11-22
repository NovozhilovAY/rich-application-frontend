<template>
  <MainHeader/>
  <RatingPanel/>
</template>

<script>
import {LoginController} from "@/controller/LoginController";
import MainHeader from "@/pages/main/components/MainHeader";
import RatingPanel from "@/pages/main/components/RatingPanel";

export default {
  name: "MainPage",
  components: {RatingPanel, MainHeader},
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