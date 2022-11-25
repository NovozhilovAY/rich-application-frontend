<template>
  <div class="header">
    <div class="logotype">
      <img src="@/assets/logo-fobres.png" class="logo-fobres">
      <img src="@/assets/text-fobres.png" class="text-fobres"/>
    </div>
    <div class="btn-head">
      <UIButton class="btn-exit" @click="logout()"></UIButton>
      <UIButton class="btn-profile" @click="this.$emit('selectProfile')"></UIButton>
      <UIButton class="btn-rating" @click="this.$emit('selectRating')"></UIButton>
    </div>
  </div>
</template>

<script>
import {LoginController} from "@/controller/LoginController";
import UIButton from "@/UI/UIButton";

export default {
  name: "MainHeader",
  components: {UIButton},
  methods:{
    logout(){
      LoginController.logout();
      this.$router.push({path: '/login', replace: true});
    }
  }
}
</script>

<style scoped>
.header{
  height: 130px;
  width: auto;
  background: rgb(39,39,39);
  margin: 0px;
  box-sizing: border-box;
  border-bottom-style: solid;
  border-width: 1px;
}

.logotype {
  float: left;
}

.logo-fobres {
  height: 130px;
  width: 130px;
  display: inline;
}

.text-fobres {
  height: 90px;
  width: 250px;
  display: inline;
  margin-bottom: 10px;
}

.btn-head button {
  border: none;
  float: right;
  margin-top: 28px;

}

btn-head button:hover {
  background-color: #3e8e41;
}

.btn-rating {
  display: inline;
  margin-right: 45px;
  margin-left: auto;
  background-image: url("/src/assets/rating.png");
  background-position: center center;
  background-size: cover;
  height: 80px;
  width: 80px;
}

.btn-profile {
  display: inline;
  margin-right: 45px;
  background-image: url("/src/assets/profile.png");
  background-position: center center;
  background-size: cover;
  height: 60px;
  width: 60px;
}

.btn-exit {
  display: inline;
  margin-right: 45px;

  background-image: url("/src/assets/exit.png");
  background-position: center center;
  background-size: cover;
  height: 70px;
  width: 70px;
}

</style>