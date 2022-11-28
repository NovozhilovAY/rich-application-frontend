<template>
  <div class="header">
    <div class="logotype">
      <img src="@/assets/text-fobres.png" class="text-fobres"/>
    </div>
    <div class="btn-head">
      <UIButton v-if="isUserLoggedIn()" class="btn-exit" @click="logout()"></UIButton>
      <UIButton v-else class="btn-login" @click="redirectToLoginPage()">Войти</UIButton>
      <UIButton v-if="isUserLoggedIn()" class="btn-profile" @click="this.$emit('selectProfile')"></UIButton>
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
      this.redirectToLoginPage();
    },
    isUserLoggedIn(){
      let res = LoginController.isUserLoggedIn();
      console.log("sas");
      console.log(res);
      return LoginController.isUserLoggedIn();
    },
    redirectToLoginPage(){
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

.text-fobres {
  height: 90px;
  width: 250px;
  display: inline;
  margin-top: 10%;
  margin-left: 5%;
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
  height: 60px;
  width: 60px;
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
  height: 60px;
  width: 60px;
}

.btn-login {
  background-color: white;
}

</style>