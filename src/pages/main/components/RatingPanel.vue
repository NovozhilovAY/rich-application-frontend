<template>
  <div class="main-container">
    <div class="btn-group">
      <UIButton ref="worldBtn" class="btn-template" @click="GetUsers">World</UIButton>
      <UIButton :disabled="!isUserLoggedIn()" @click="GetUsersCountry">Country</UIButton>
      <UIButton :disabled="!isUserLoggedIn()" class="btn-template" @click="GetUsersCity">City</UIButton>
    </div>
    <div class="profiles">
    <div class="profile" v-for="(profile, index) in profiles" :key="profile.id" @click="viewProfile(profile.id)">
      <div class="profile-info">
        <div class="num-rating"><strong>#</strong>{{index + 1}}</div>
        <img class="avatar-profile" :src=profile.profilePicture />
        <div class="centr-info">
          <div class="fi-country">{{profile.lastName}} {{profile.firstName}}  |  {{profile.country}}</div>
          <div class="status">{{profile.status}}</div>
        </div>
        <div class="money-profile">{{profile.money}} coins</div>
      </div>
    </div>
    </div>
  </div>
  <UserProfileInfo @exit="closeProfileInfo" v-if="isUserClicked" :id=selectedUserId ></UserProfileInfo>
</template>

<script>

import {UserController} from "@/controller/UserControler";
import UserProfileInfo from "@/pages/main/components/modals/UserProfileInfo";
import UIButton from "@/UI/UIButton";
import {LoginController} from "@/controller/LoginController";

export default {
  name: "RatingPanel",
  components: {UIButton, UserProfileInfo},
  data() {
    return {
      profiles: [],
      selectedUserId: null,
      isUserClicked: false
    }
  },
  mounted() {
    this.$refs.worldBtn.$el.click();
  },
  methods: {
    GetUsers() {
      UserController.getUsers().then(
          (resp) => {
            console.log(resp);
            this.profiles = resp.data;
          });
    },
    GetUsersCountry() {
      let profile = JSON.parse(localStorage.getItem('profile'));
      UserController.getUsersCountry(profile.country).then(
          (resp) => {
            console.log(resp);
            this.profiles = resp.data;
          });
    },
    GetUsersCity() {
      let profile = JSON.parse(localStorage.getItem('profile'));
      UserController.getUsersCity(profile.city).then(
          (resp) => {
            console.log(resp);
            this.profiles = resp.data;
          });
      },
    viewProfile(id) {
      this.selectedUserId = id;
      this.isUserClicked = true;
    },
    closeProfileInfo() {
      this.selectedUserId = null;
      this.isUserClicked = false;
    },
    isUserLoggedIn(){
      return LoginController.isUserLoggedIn();
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main-container {
  background-color: rgb(28, 28, 28);
  width: 70%;
  height: 84%;
  padding: 0px 0px 1px 0px;
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
}

.profiles {
  width: 100%;
  height: 90%;
  overflow: auto;
}

.profiles::-webkit-scrollbar {
  width: 0;
}

.profile {
  padding: 15px;
  margin: 20px 80px;
  background-color: rgb(54, 53, 53);
  color: white;
  font-family: Arial,serif;
  font-size: 1.4rem;
}

.profile-info {
  display: flex;
}

.avatar-profile {
  width: 75px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 20px;
  display: inline;
  float: left;
  border-radius: 100px;
}

.centr-info {
  display: inline;
  width: 50%;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 60px;
  margin-right: auto;
  float: left;
}

.fi-country {
  float: left;
  margin-bottom: 15px;
}

.status {
  float: left;
  text-align: left;
}

.num-rating {
  margin-right: 35px;
  margin-left: 35px;
  margin-top: auto;
  margin-bottom: auto;
  display: inline;
  top: 50%;
  font-size: 1.7rem;
}

.money-profile {
  width: 200px;
  margin-top: auto;
  margin-bottom: auto;
  float: right;
}

.btn-group button {
  background-color: rgb(39, 39, 39);
  font-size: 3.5rem;
  color: white; /* White text */
  display: inline;
  justify-content: space-around;
  cursor: pointer; /* Pointer/hand icon */
}

.btn-group button:not(:last-child) {
  border-right: none; /* Prevent double borders */
}

/* Clear floats (clearfix hack) */
.btn-group:after {
  content: "";
  clear: both;
  display: table;
}

.btn-group button:hover {
  background-color: rgb(28, 28, 28);
}

.btn-template {
  width: 33.3333333333333%;
}

.btn-template:focus {
  outline: none;
  background-color: rgb(28, 28, 28);
}

.notActive{

}

</style>