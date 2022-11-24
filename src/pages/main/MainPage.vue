<template>
  <div class="main-page">
    <MainHeader @selectRating="this.selectedMenuItem = 'rating'"
                @selectProfile="this.selectedMenuItem = 'profile'"/>
    <RatingPanel v-if="selectedMenuItem === 'rating'"/>
    <ProfilePanel v-if="selectedMenuItem === 'profile'"/>
  </div>
</template>

<script>
import {LoginController} from "@/controller/LoginController";
import MainHeader from "@/pages/main/components/MainHeader";
import RatingPanel from "@/pages/main/components/RatingPanel";
import ProfilePanel from "@/pages/main/components/ProfilePanel";

export default {
  name: "MainPage",
  components: {ProfilePanel, RatingPanel, MainHeader},
  data(){
    return {
      selectedMenuItem: "rating"
    }
  },
  methods:{
    logout(){
      LoginController.logout()
      this.$router.push({path: '/login', replace: true});
    }
  }
}
</script>

<style scoped>
.main-page {
  width: 100%;
  height: 100%;
  background-color: rgb(89, 89, 89);
}
</style>