<template>
  <MainHeader @selectRating="this.selectedMenuItem = 'rating'"
              @selectProfile="this.selectedMenuItem = 'profile'"/>
  <RatingPanel v-if="selectedMenuItem === 'rating'"/>
  <ProfilePanel v-if="selectedMenuItem === 'profile'"/>
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

</style>